import DataInjectedFactEngine from "@/utilities/engine/DataInjectedFactEngine";
import FactCheckEngine from "@/utilities/engine/FactEngine";
import OpenAIInjectedFactEngine from "@/utilities/engine/OpenAIInjectedFactEngine";
import OpenAIEngine from "@/utilities/openai/OpenAIEngine";
import { IDataInjector } from "@/utilities/types";
import { assert } from "node:console";
import { describe } from "node:test";

const testInjector: IDataInjector = {
    async getData() {
        return `
4.1 בשנת 2008, חבר הכנסת גדעון סער יזם תיקון לחוק ומשמעותו היא שגן לנציגי הקואליציה וגם לשופטים יש בפועל זכות וטו בועדה, ולא ניתן למנות שופטים בלי הסכמה של נציגי הקואליציה. בשנים האחרונות, הרכב השופטים מגוון הרבה יותר מכפי שהיה, והמגמה היא הגדלת הגיוון.
4.2 בעבר, העסקת בני משפחה של שופטים במערכת המשפט הייתה נפוצה מאוד, עד שבתחילת שנות האלפיים שונו הנהלים. כיום, קשה מאוד לבני משפחה של שופטים להתמנות, ולא מדובר בשיטת "חבר מביא חבר". בעיה זו כבר תוקנה!
4.3 במדינות בהם הרוב ממנה שופטים, ישנן הגבלות נוספות על כוחו של הרוב, שלא קיימות בישראל, כמו חוקה. ההצעה שהרוב ימנה שופטים בישראל, משמעותה מחיקת ההגבלה היחידה על כוחו של הרוב בישראל. אם נרצה שהרוב ימנה שופטים, כדאי לחשוב על שיטות אחרות להגבלת כוחו.
        `
    },
}

describe("Creates a test for a limited scope, using gpt-3", () => {
    let engine: FactCheckEngine;
    it("Creates the fack check module", async () => {
        engine = (await DataInjectedFactEngine.withInjectedData(testInjector, OpenAIInjectedFactEngine))
            .withOpenAI(new OpenAIEngine({ model: "gpt-3.5-turbo" }));
    })
})