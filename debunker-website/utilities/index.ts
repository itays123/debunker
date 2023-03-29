import DataInjectedFactEngine from "./engine/DataInjectedFactEngine";
import FactCheckEngine from "./engine/FactEngine";
import OpenAIInjectedFactEngine from "./engine/OpenAIInjectedFactEngine";
import { IDataInjector, IOpenAIEngine } from "./types";

/**
 * A singleton for the fact checker engine
 */
class FactChecker {
    private static injector: IDataInjector = {} as IDataInjector;
    private static openai: IOpenAIEngine = {} as IOpenAIEngine;
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