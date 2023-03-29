import { Correction } from "@/interfaces";

export interface IDataInjector {
    getData(): Promise<string>;
}

export interface IOpenAIEngine {
    aggregate(systemPrompt: string, message: string): Promise<string>;
}