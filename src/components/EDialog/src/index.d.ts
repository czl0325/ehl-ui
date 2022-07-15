export interface DialogElement extends HTMLElement {
    confirm: () => Promise<any>;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnConfirm: {
        type: BooleanConstructor;
        default: boolean;
    };
    noPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    onConfirm: () => void;
    visible: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "ok"[], "ok", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnConfirm: {
        type: BooleanConstructor;
        default: boolean;
    };
    noPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onOk?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    showFooter: boolean;
    closeOnConfirm: boolean;
    noPadding: boolean;
}>;
export default _default;
