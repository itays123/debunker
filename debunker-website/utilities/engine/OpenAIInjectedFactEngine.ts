import { Correction } from "@/interfaces";
import DataInjectedFactEngine from "./DataInjectedFactEngine";
import { IOpenAIEngine } from "../types";

/**
 * This class is responsible for injecting OpenAI capabilities into the fact engine
 * @author Itay Schechner
 * @version 0.1.0
 */
class OpenAIInjectedFactEngine extends DataInjectedFactEngine {

    constructor(prompt: string) {
        super(prompt);
    }

    private openai: IOpenAIEngine | undefined;

    public withOpenAI(openai: IOpenAIEngine) {
        this.openai = openai;
        return this;
    }

    public async check(statements: string): Promise<Correction[]> {
        if (!this.openai)
            throw new Error("OpenAI Engine not found");
        console.log("Checking");
        const response = await this.openai.aggregate(this.data, statements);
        // assert response is of format "[{ Statement: .... Correction: ...}]"
        return JSON.parse(response) as Correction[];
    }
}

export default OpenAIInjectedFactEngine;