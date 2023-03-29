import { Correction } from "@/interfaces";
import { IDataInjector } from "../types";
import { SYSTEM_PROMPT_OPENING } from "@/consts";
import FactCheckEngine, { FactEngineConstuctor } from "./FactEngine";

/**
 * This class is a basic implementation of the IFactCheckEngine interface that injects existing facts from out database.
 * @author Itay Schechner
 * @version 0.1.0
 */
abstract class DataInjectedFactEngine extends FactCheckEngine {

    public static async withInjectedData<Class extends DataInjectedFactEngine>(injector: IDataInjector, instance: FactEngineConstuctor<Class>): Promise<Class> {
        const injectedData = await injector.getData();
        const prompt = `${SYSTEM_PROMPT_OPENING}\n ${injectedData}`;
        return new instance(prompt);
    }

}

export default DataInjectedFactEngine;