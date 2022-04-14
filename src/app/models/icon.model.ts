export type LabelType = 'activate' | 'deactivate' | 'default' | 'nostyle' | 'setting';
export interface Label {
    type: LabelType;
    text: string;
    subtext?: string;
    id?: string;
    value?: any;
}

export interface Icon {
  src?: string;
  presets: string;
  labels?: Label[];
  numberVisibleChips?: number;
  state: string;
}
