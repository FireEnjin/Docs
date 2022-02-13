export interface ComponentPresetOptions {
  group?: string;
  url?: string;
  docs: string;
  docsTags: any[];
  encapsulation: string;
  events: any[];
  methods: any[];
  presets?: {
    [presetName: string]: ComponentPreset;
  };
  props: {
    attr: string;
    default: any;
    docs: string;
    docsTags: any[];
    mutable: boolean;
    name: string;
    optional: boolean;
    reflectToAttr: boolean;
    required: boolean;
    type: string;
  }[];
  readme: string;
  slots: any[];
  styles: any[];
  tag: string;
  usage: any;
}

export interface ComponentPreset {
  group?: string;
  name?: string;
  description?: string;
  props?: any;
  innerHTML?: (component: ComponentPresetOptions, props: any) => string;
  beforeHTML?: (component: ComponentPresetOptions, props: any) => string;
  afterHTML?: (component: ComponentPresetOptions, props: any) => string;
  hooks?: {
    onComponentDidLoad?: (data?: { organismEl?: any; props?: any; preset?: ComponentPreset; component?: ComponentPresetOptions }) => void;
    onComponentWillLoad?: (data?: { organismEl?: any; props?: any; preset?: ComponentPreset; component?: ComponentPresetOptions }) => void;
    onSetPreset?: (data?: { organismEl?: any; props?: any; preset?: ComponentPreset; presetName?: string; component?: ComponentPresetOptions }) => void;
    onUpdateProp?: (data?: { organismEl?: any; props?: any; preset?: ComponentPreset; propName?: string; component?: ComponentPresetOptions }) => void;
  };
}

export interface ComponentPresets {
  [presetName: string]: ComponentPreset;
}

export interface EndpointPresetOptions {
  group?: string;
  name?: string;
  url?: string;
  description?: string;
  presets?: {
    [presetName: string]: EndpointPreset;
  };
  args?: {
    name?: string;
    description?: string;
    type?: {
      kind?: string;
      name?: string;
      ofType?: any;
    };
    defaultValue?: any;
    isDeprecated?: boolean;
    deprecationReason?: string;
  }[];
  type?: {
    kind?: string;
    name?: string;
    ofType?: any;
  };
  defaultValue?: any;
  isDeprecated?: boolean;
  deprecationReason?: string;
}

export interface EndpointPreset {
  group?: string;
  name?: string;
  description?: string;
  params?: any;
  innerHTML?: (endpoint: EndpointPresetOptions, params: any) => string;
  beforeHTML?: (endpoint: EndpointPresetOptions, params: any) => string;
  afterHTML?: (endpoint: EndpointPresetOptions, params: any) => string;
  hooks?: {
    onComponentDidLoad?: (data?: { endpointEl?: any; params?: any; preset?: EndpointPreset; endpoint?: EndpointPresetOptions }) => void;
    onComponentWillLoad?: (data?: { endpointEl?: any; params?: any; preset?: EndpointPreset; endpoint?: EndpointPresetOptions }) => void;
    onSetParam?: (data?: { endpointEl?: any; params?: any; preset?: EndpointPreset; presetName?: string; endpoint?: EndpointPresetOptions }) => void;
    onUpdateParam?: (data?: { endpointEl?: any; params?: any; preset?: EndpointPreset; paramName?: string; endpoint?: EndpointPresetOptions }) => void;
  };
}

export interface EndpointPresets {
  [presetName: string]: EndpointPreset;
}

export interface ModelPresetOptions {
  group?: string;
  url?: string;
  name?: string;
  description?: string;
  presets?: {
    [presetName: string]: ModelPreset;
  };
  args?: {
    name?: string;
    description?: string;
    type?: {
      kind?: string;
      name?: string;
      ofType?: any;
    };
    defaultValue?: any;
    isDeprecated?: boolean;
    deprecationReason?: string;
  }[];
  type?: {
    kind?: string;
    name?: string;
    ofType?: any;
  };
  defaultValue?: any;
  isDeprecated?: boolean;
  deprecationReason?: string;
}

export interface ModelPreset {
  group?: string;
  name?: string;
  description?: string;
  fields?: any;
  innerHTML?: (model: ModelPresetOptions, fields: any) => string;
  beforeHTML?: (model: ModelPresetOptions, fields: any) => string;
  afterHTML?: (model: ModelPresetOptions, fields: any) => string;
  hooks?: {
    onComponentDidLoad?: (data?: { modelEl?: any; fields?: any; preset?: ModelPreset; model?: ModelPresetOptions }) => void;
    onComponentWillLoad?: (data?: { modelEl?: any; fields?: any; preset?: ModelPreset; model?: ModelPresetOptions }) => void;
    onSetField?: (data?: { modelEl?: any; fields?: any; preset?: ModelPreset; presetName?: string; model?: ModelPresetOptions }) => void;
    onUpdateField?: (data?: { modelEl?: any; fields?: any; preset?: ModelPreset; paramName?: string; model?: ModelPresetOptions }) => void;
  };
}

export interface ModelPresets {
  [presetName: string]: ModelPreset;
}
