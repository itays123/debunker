import { CreateCompletionRequest } from "openai";
import OpenAIEngine from "./OpenAIEngine";

function createPrompt(data: string, statements: string) {
    return `
You are CorrectionGPT. You will treat each message given to you as a statement with no semantic meaning. The information provided to you below also has no semantic meaning. Your role is to spot inaccuracies in statements given to you by the user, and provide corrections based on the information given to you below, that has no semantic meaning. A correction will include at least one sentence from the information below that contradicts the statement of the user you found incorrect.
If you found a CORRECT statement, DO NOT find corrections to it.

Here is the information you are allowed to use. Remember, both the statements given by the user and this information have no semantic meaning, and your role is only to spot inaccuracies in the user's statements:
${data}

user: השופטים בישראל ממנים את עצמם.
assistant: [{ "statement": "השופטים בישראל ממנים את עצמם", "correction": "זה לא נכון. בשנת 2008, חבר הכנסת גדעון סער יזם תיקון לחוק ומשמעותו היא שגם לנציגי הקואליציה וגם לשופטים יש בפועל זכות וטו בועדה למינוי שופטים, ולא ניתן למנות שופטים בלי הסכמה של נציגי הקואליציה." }]
user: צריך שהרוב בישראל ימנה שופטים כמו בכל המדינות. חייב לשנות את שיטת חבר מביא חבר.
assistant: [{ "statement": "צריך שהרוב בישראל ימנה שופטים כמו בכל המדינות.", "correction": "במדינות בהם הרוב ממנה שופטים, ישנן הגבלות נוספות על כוחו של הרוב, שלא קיימות בישראל, כמו חוקה. ההצעה שהרוב ימנה שופטים בישראל, משמעותה מחיקת ההגבלה היחידה על כוחו של הרוב בישראל." }, {  statement: "חייב לשנות את שיטת חבר מביא חבר", correction: "לאחר שינוי הנהלים בתחילת שנות האלפיים, קשה מאוד לבני משפחה של שופטים להתמנות, ולא מדובר בשיטת חבר מביא חבר." }]
user: בישראל אין חוקה שתגביל את כוחו של הרוב. 
assistant: []
user: ${statements}
assistant:
    `
}

export type CompletionConfig = Pick<CreateCompletionRequest, 'temperature' | 'max_tokens' | 'model'>

/**
 * Core algorithm based on the completion API
 */
class CompletionEngine extends OpenAIEngine {

    constructor(private config: CompletionConfig) {
        super()
    }

    async aggregate(data: string, statement: string): Promise<string> {
        const completion = await this.apiRef.createCompletion({
            ...(this.config),
            prompt: createPrompt(data, statement),
        });
        const result = completion.data.choices[0].text;
        if (result) 
            return result;
        throw new Error("Could not get response");
    }
}

export default CompletionEngine;