import { DataItem } from "@/interfaces";

/**
 * Splits a list in the following format:
 * 1. Item
 * 2. Item 2
 * 2.1 Subitem 1
 * 2.2 Subitem 2
 * To an array of objects {name: string, subitems: string[] }
 */
export function generateDataSource(input: string) {
    const items: DataItem[] = [];

    // split to items
    const itemRegex = /\d+\.\s+/; // digits + dot followed by whitespace 
    const subitemRegex = /\d+\.\d+\s+/ // digits + dot followed by a whitespace
    return input.split(itemRegex).filter(item => item !== '').map(item => {
        const subitems = item.split(subitemRegex);
        const content = subitems.shift();
        return { content, subitems }
    })
}