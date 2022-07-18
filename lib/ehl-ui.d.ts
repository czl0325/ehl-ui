declare module 'ehl-ui' {
  export const EPanelTitle: import("vue").DefineComponent<{
    title: StringConstructor;
    icon: {
      type: StringConstructor;
      default: string;
    };
    underline: {
      type: BooleanConstructor;
      default: boolean;
    };
    noPadding: {
      type: BooleanConstructor;
      default: boolean;
    };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    icon: {
      type: StringConstructor;
      default: string;
    };
    underline: {
      type: BooleanConstructor;
      default: boolean;
    };
    noPadding: {
      type: BooleanConstructor;
      default: boolean;
    };
  }>>, {
    noPadding: boolean;
    icon: string;
    underline: boolean;
  }>;

  export interface DigitalInfo {
    curr: number;
    list: number[];
  }
  declare const EDigitalPanel: import("vue").DefineComponent<{
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

  export interface DialogElement extends HTMLElement {
    confirm: () => Promise<any>;
  }
  declare const EDialog: import("vue").DefineComponent<{
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
}
