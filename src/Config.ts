import {Config as ViewConfig} from "./View/View";
import {Config as StoreConfig} from "./Store/Store";

export interface ConfigInput {
    readonly contentClasses?: Array<string>;
    readonly labelClasses?: Array<string>;
    readonly connectionClasses?: Array<string>;
    readonly labelPadding?: number;
    readonly lineHeight?: number;
    readonly topContextMargin?: number;
    readonly bracketWidth?: number;
    readonly allowMultipleLabel?: "notAllowed" | "differentCategory" | "allowed";
    readonly allowMultipleConnection?: "notAllowed" | "differentCategory" | "allowed";
    readonly connectionWidthCalcMethod?: "text" | "line";
    readonly labelOpacity?: number;
}

export interface Config extends ViewConfig, StoreConfig {
}

const defaultValues: Config = {
    contentClasses: ['poplar-annotation-content'],
    labelClasses: ['poplar-annotation-label'],
    connectionClasses: ['poplar-annotation-connection'],
    labelPadding: 2,
    lineHeight: 1.5,
    topContextMargin: 3,
    bracketWidth: 8,
    allowMultipleLabel: "differentCategory",
    allowMultipleConnection: "differentCategory",
    connectionWidthCalcMethod: "line",
    labelOpacity: 90,
    defaultLabelColor: "#ff9d61"
};

export function parseInput(input: ConfigInput): Config {
    let result = {};
    for (let entry in defaultValues) {
        // noinspection JSUnfilteredForInLoop
        result[entry] = input[entry] || defaultValues[entry];
    }
    return result as Config;
}