import { useContext } from "react";
import {
  ComponentConfig,
  UIComponentName,
  UIConfigContext,
} from "../components";
import { deepMerge } from "./deepMerge";

export function getComponentProps<
  S extends string,
  P extends ComponentConfig<P, S>["defaultProps"]
>(component: UIComponentName, props: P) {
  const { components } = useContext(UIConfigContext);
  return deepMerge(components?.[component]?.defaultProps ?? {}, props) as P;
}

export function getComponentStyle<
  S extends string,
  P extends ComponentConfig<P, S>["defaultProps"]
>(component: UIComponentName, props: P) {
  const { components } = useContext(UIConfigContext);
  const getStyleOverride = components?.[component]?.stylesOverride;
  const styles = getStyleOverride && getStyleOverride(props ?? {});
  return styles;
}
