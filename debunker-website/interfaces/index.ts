export interface Speech {
    name: string;
    speaker: string;
    date: Date;
    statements: string;
}

export interface Correction {
    statement: string;
    correction: string;
}

export interface DataItem {
    content: string;
    subitems: string[];
}

export type DataSource = DataItem[];