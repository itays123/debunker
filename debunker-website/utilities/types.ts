import { Correction } from "@/interfaces";

export interface IDataInjector {
    getData(): Promise<string>;
}

export interface IOpenAIEngine {
    aggregate(data: string, statement: string): Promise<string>;
}