import Color from "color";
import {
  ColorTheme,
  ComponentTheme,
  PaletteTheme,
  SpacingTheme,
  TypographyTheme,
  UIColorScale,
  UIColorTone,
  UITheme,
  UIThemeConstructorProps,
} from "./types";

export class UIThemeModel implements UITheme {
  private palette: PaletteTheme;
  private baseSpacing: SpacingTheme;
  public components: Partial<ComponentTheme>;
  public typography: TypographyTheme;
  private DEFAULT_SCALE = 500;

  constructor(props: UIThemeConstructorProps) {
    this.palette = props.palette;
    this.components = props.components;
    this.baseSpacing = props.spacing;
    this.typography = props.typography;
  }

  public color(
    color: keyof ColorTheme,
    selector?: keyof UIColorScale | keyof UIColorTone
  ) {
    const colorTheme = this.palette.colors[color];
    if (selector) {
      if (typeof colorTheme === "object") {
        if ("DEFAULT" in colorTheme) {
          if (selector === "DEFAULT" || typeof selector === "number") {
            return colorTheme[selector];
          } else {
            switch (selector) {
              case "light":
                return colorTheme["300"];
              case "main":
                return colorTheme["500"];
              case "dark":
                return colorTheme["600"];
              case "contrastText":
                return colorTheme["950"];
            }
          }
        } else {
          if (selector !== "DEFAULT" && typeof selector !== "number") {
            return colorTheme[selector];
          } else {
            const manipulatedColor = Color(colorTheme["main"]);
            switch (selector) {
              case "DEFAULT":
                return manipulatedColor.hex();
              case 50:
                return manipulatedColor.lighten(0.75).hex();
              case 100:
                return manipulatedColor.lighten(0.6).hex();
              case 200:
                return manipulatedColor.lighten(0.45).hex();
              case 300:
                return manipulatedColor.lighten(0.3).hex();
              case 400:
                return manipulatedColor.lighten(0.15).hex();
              case 500:
                return manipulatedColor.hex();
              case 600:
                return manipulatedColor.darken(0.15).hex();
              case 700:
                return manipulatedColor.darken(0.3).hex();
              case 800:
                return manipulatedColor.darken(0.45).hex();
              case 900:
                return manipulatedColor.darken(0.6).hex();
              case 950:
                return manipulatedColor.darken(0.75).hex();
            }
          }
        }
      } else {
        if (selector === "DEFAULT" || typeof selector === "number") {
          const manipulatedColor = Color(colorTheme);
          if (selector === "DEFAULT" || selector === this.DEFAULT_SCALE)
            return manipulatedColor.hex();
          if (selector > this.DEFAULT_SCALE)
            return manipulatedColor
              .darken(((selector - this.DEFAULT_SCALE) * 2) / 2000)
              .hex();
          return manipulatedColor
            .lighten(((this.DEFAULT_SCALE - selector) * 2) / 2000)
            .hex();
        } else {
          const manipulatedColor = Color(colorTheme);
          switch (selector) {
            case "light":
              return manipulatedColor.lighten(0.3).hex();
            case "main":
              return manipulatedColor.hex();
            case "dark":
              return manipulatedColor.darken(0.3).hex();
            case "contrastText":
              return manipulatedColor.darken(0.6).hex();
          }
        }
      }
    } else {
      if (typeof colorTheme === "object") {
        if ("DEFAULT" in colorTheme) {
          return colorTheme["DEFAULT"];
        } else {
          return colorTheme["main"];
        }
      } else {
        return colorTheme;
      }
    }
  }

  private calculateSpacing(value?: number | "auto") {
    if (typeof value === "undefined") return "";
    if (value === "auto") return value;
    if (typeof this.baseSpacing === "number")
      return (value * this.baseSpacing).toString();
    return this.baseSpacing(value).toString();
  }

  public spacing(
    s1: number | "auto",
    s2?: number | "auto",
    s3?: number | "auto",
    s4?: number | "auto"
  ) {
    const result = [
      this.calculateSpacing(s1),
      this.calculateSpacing(s2),
      this.calculateSpacing(s3),
      this.calculateSpacing(s4),
    ];
    return result.filter((value) => value.trim() !== "").join(" ");
  }
}
