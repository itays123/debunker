import { Correction } from "@/interfaces";
import { proxy } from "valtio";

export interface IDebunkerState {
    status: 'IDLE' | 'LOADING' | 'ERROR' | 'DEBUNKED',
    statement: string;
    corrections: Correction[];
}

const debunkerProxy = proxy({
    status: "IDLE",
    statement: 'לקואליציה אין וטו בועדה למינוי שופטים',
    corrections: []
} as IDebunkerState)

/* 
* Actions:
* 1. On statement change
* 2. clearStatament
* 3. On correction fetch
* 4. On correction error
* 5. On corrections found
* 6. close corrections
*/

export const onStatementChange = (newStatement: string) => {
    if (debunkerProxy.corrections.length)
        debunkerProxy.corrections = [];
    debunkerProxy.statement = newStatement;
}

export const clearStatement = () => {
    if (debunkerProxy.corrections.length)
        debunkerProxy.corrections = [];
    debunkerProxy.statement = '';
}

// Note: activate ONLY when corrections don't exist and status is IDLE
export const fetchCorrections = () => {
    if (debunkerProxy.status === 'IDLE' && !debunkerProxy.corrections.length) {
        debunkerProxy.status = 'LOADING';
        fetch(`/api/check?statement=${encodeURI(debunkerProxy.statement)}`)
            .then((res) => res.json())
            .then((corrections) => onCorrectionsFound(corrections))
            .catch(() => onCorrectionError())
    }
    else if (debunkerProxy.corrections.length) // clicked again after closing
        debunkerProxy.status = 'DEBUNKED'
}

export const onCorrectionError = () => {
    debunkerProxy.status = 'ERROR';
}

export const onCorrectionsFound = (corrections: Correction[]) => {
    debunkerProxy.corrections = corrections;
    debunkerProxy.status = 'DEBUNKED'
}

export const closeCorrections = () => {
    debunkerProxy.status = 'IDLE';
}


export default debunkerProxy;