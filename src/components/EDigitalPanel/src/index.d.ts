export interface DigitalInfo {
    curr: number;
    list: number[];
}
declare const _default: import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    showList: import("vue").Ref<{
        curr: number;
        list: number[];
    }[]>;
    defaultNumber: import("vue").Ref<{
        curr: number;
        list: number[];
    }[]>;
    numberList: import("vue").Ref<{
        curr: number;
        list: number[];
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: string;
}>;
export default _default;
