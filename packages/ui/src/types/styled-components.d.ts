import { UITheme } from "../styles";

declare module "styled-components" {
  export interface DefaultTheme extends UITheme {}
}
