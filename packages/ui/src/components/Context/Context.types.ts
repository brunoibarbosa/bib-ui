import { ButtonProps } from "../Button";

export interface ComponentConfig<P> {
  defaultProps: P;
}

export interface BibUIComponents {
  Button?: ComponentConfig<ButtonProps>;
}

export interface BibUIState {
  components?: BibUIComponents;
}

export type BibComponentName = keyof BibUIComponents;
