import GithubDataInjector from "./data/GithubDataInjector";
import DataInjectedFactEngine from "./engine/DataInjectedFactEngine";
import FactCheckEngine from "./engine/FactEngine";
import OpenAIInjectedFactEngine from "./engine/OpenAIInjectedFactEngine";
import OpenAIEngine from "./openai/OpenAIEngine";
import { IDataInjector, IOpenAIEngine } from "./types";

/**
 * A singleton for the fact checker engine
 */
class FactChecker {
    private static injector: IDataInjector = new GithubDataInjector();
    private static openai: IOpenAIEngine = new OpenAIEngine({ model: "gpt-3.5-turbo" });
    private static _instance: FactCheckEngine | undefined;
    public static async getInstance(): Promise<FactCheckEngine> {
        if (!this._instance) {
            this._instance = (await DataInjectedFactEngine.withInjectedData(this.injector, OpenAIInjectedFactEngine))
                .withOpenAI(this.openai);
        }
        return this._instance;       
    }
}

export default FactChecker;