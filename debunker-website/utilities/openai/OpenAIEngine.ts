/**
 * Core usage of OpenAI API
 */

import { ChatCompletionRequestMessage, Configuration, OpenAIApi, CreateChatCompletionRequest } from "openai";
import { IOpenAIEngine } from "../types";

export type OpenAIEngineConfig = Pick<CreateChatCompletionRequest, 'model'>

class OpenAIEngine implements IOpenAIEngine {

    private apiRef: OpenAIApi;
    private config: OpenAIEngineConfig;

    constructor(config: OpenAIEngineConfig) {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        })
        this.apiRef = new OpenAIApi(configuration);
        this.config = config
    }

    async aggregate(systemPrompt: string, message: string): Promise<string> {
        const messages: ChatCompletionRequestMessage[] = [
            { role: "system", content: systemPrompt },
            { role: "user", content: message }
        ]
        const completion = await this.apiRef.createChatCompletion({
            ...(this.config),
            messages
        });
        const result = completion.data.choices[0].message?.content;
        if (result) 
            return result;
        throw new Error("Could not get response");
    }

}

export default OpenAIEngine;
