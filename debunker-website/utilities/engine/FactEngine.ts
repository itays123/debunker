import { Correction } from "@/interfaces";

/**
 * An abstraction of the fact engine object
 * @author Itay Schechner
 * @version 0.1.0
 */
abstract class FactCheckEngine {

    protected data: string;

    constructor (data: string) {
        this.data = data;
    }

    protected abstract check(statements: string): Promise<Correction[]>
}

export type FactEngineConstuctor<Class extends FactCheckEngine> = new (data: string) => Class;

export default FactCheckEngine;