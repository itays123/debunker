/**
 * Core usage of OpenAI API
 */

import { Configuration, OpenAIApi, CreateCompletionRequest } from "openai";
import { IOpenAIEngine } from "../types";
import createPrompt from "./createPrompt";

export type OpenAIEngineConfig = Pick<CreateCompletionRequest, 'model' | 'temperature' | 'max_tokens'>

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

    async aggregate(data: string, statement: string): Promise<string> {
        const completion = await this.apiRef.createCompletion({
            ...(this.config),
            prompt: createPrompt(data, statement),
        });
        const result = completion.data.choices[0].text;
        console.log(result);
        if (result) 
            return result;
        throw new Error("Could not get response");
    }

}

export default OpenAIEngine;
