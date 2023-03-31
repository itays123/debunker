import { DataSource } from "@/interfaces"
import { generateDataSource } from "@/utilities/data/itemSplitter"

const INPUT = '1. Item 1.1 Subitem 1.2 Subitem 2. Item 2.1 Subitem'
const EXPECTED_OUTPUT: DataSource = [{ content: 'Item ', subitems: ['Subitem ', 'Subitem '] }, { content: 'Item ', subitems: ['Subitem'] }]

describe("Checks the item splitting function", () => {
    it("Checks the splitting function", () => {
        expect(generateDataSource(INPUT)).toEqual(EXPECTED_OUTPUT);
    })
})