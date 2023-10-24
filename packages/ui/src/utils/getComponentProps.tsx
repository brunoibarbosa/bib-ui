import { useContext } from "react";
import { BibComponentName, BibUIContext, ComponentConfig } from "../components";
import { deepMerge } from "./deepMerge";

export function getComponentProps<
  K extends BibComponentName,
  P extends ComponentConfig<P>
>(component: K, props: P["defaultProps"]) {
  const { components } = useContext(BibUIContext);
  return deepMerge(components?.[component]?.defaultProps ?? {}, props);
}
