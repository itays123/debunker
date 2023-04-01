/**
 * Core usage of OpenAI API
 */

import { Configuration, OpenAIApi, CreateCompletionRequest } from "openai";
import { IOpenAIEngine } from "../types";

abstract class OpenAIEngine implements IOpenAIEngine {

    protected apiRef: OpenAIApi;

    constructor() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        })
        this.apiRef = new OpenAIApi(configuration);
    }
    
    abstract aggregate(data: string, statement: string): Promise<string>;

}

export default OpenAIEngine;
