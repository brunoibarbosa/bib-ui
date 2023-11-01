import { UITheme } from "../theme";

declare module "styled-components" {
  export interface DefaultTheme extends UITheme {}
}
