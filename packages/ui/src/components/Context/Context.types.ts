import { ButtonProps, ButtonSlot } from "../Button";

export interface ComponentConfig<P, S extends string> {
  defaultProps?: Omit<P, "style">;
  stylesOverride?: (
    context: Omit<P, "style">
  ) => Record<S, React.CSSProperties>;
}

export interface UIComponents {
  Button?: ComponentConfig<ButtonProps, ButtonSlot>;
}

export interface UIConfigState {
  components?: UIComponents;
}

export type UIComponentName = keyof UIComponents;
