import { DATA_URL } from "@/consts";
import { IDataInjector } from "../types";

class GithubDataInjector implements IDataInjector {
    async getData(): Promise<string> {
        const response = await fetch(DATA_URL);
        return await response.text();
    }

}

export default GithubDataInjector;