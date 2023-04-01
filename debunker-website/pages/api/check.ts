// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Correction } from '@/interfaces'
import DataInjectedFactEngine from '@/utilities/engine/DataInjectedFactEngine'
import OpenAIInjectedFactEngine from '@/utilities/engine/OpenAIInjectedFactEngine'
import OpenAIEngine from '@/utilities/openai/OpenAIEngine'
import { IDataInjector } from '@/utilities/types'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Correction[]

const testInjector: IDataInjector = {
  async getData() {
      return `
4.1 בשנת 2008, חבר הכנסת גדעון סער יזם תיקון לחוק ומשמעותו היא שגן לנציגי הקואליציה וגם לשופטים יש בפועל זכות וטו בועדה, ולא ניתן למנות שופטים בלי הסכמה של נציגי הקואליציה. בשנים האחרונות, הרכב השופטים מגוון הרבה יותר מכפי שהיה, והמגמה היא הגדלת הגיוון.
4.2 בעבר, העסקת בני משפחה של שופטים במערכת המשפט הייתה נפוצה מאוד, עד שבתחילת שנות האלפיים שונו הנהלים. כיום, קשה מאוד לבני משפחה של שופטים להתמנות, ולא מדובר בשיטת "חבר מביא חבר". בעיה זו כבר תוקנה!
4.3 במדינות בהם הרוב ממנה שופטים, ישנן הגבלות נוספות על כוחו של הרוב, שלא קיימות בישראל, כמו חוקה. ההצעה שהרוב ימנה שופטים בישראל, משמעותה מחיקת ההגבלה היחידה על כוחו של הרוב בישראל. אם נרצה שהרוב ימנה שופטים, כדאי לחשוב על שיטות אחרות להגבלת כוחו.
      `
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (typeof req.query.statement === 'string') {
      const dataInjector: IDataInjector = testInjector; // refetch data when checking
      const openai = new OpenAIEngine({ model: "text-davinci-003", temperature: 0.7, max_tokens: 2048 })
      const factCheckEngine = (await DataInjectedFactEngine.withInjectedData(dataInjector, OpenAIInjectedFactEngine))
        .withOpenAI(openai);
      const corrections = await factCheckEngine.check(req.query.statement)
      res.status(200).json(corrections);
    } 
    else 
      res.status(422);
  } catch (err) {
    res.status(500);
  }
  
}
