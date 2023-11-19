import Color from "color";
import { merge } from "lodash";
import styled, { css } from "styled-components";
import { getComponentTheme } from "../../utils";
import { UnstyledInput } from "./Input.unstyled";

export const StyledInput = styled(UnstyledInput)(({ theme, ...props }) => {
  const componentTheme = getComponentTheme(theme, "Input");
  const mergedProps = merge(componentTheme?.defaultProps, props);
  const { size, themeMode } = mergedProps;

  const isDarkTheme = themeMode === "dark";

  const stylesOverrided = componentTheme?.styleOverride
    ? componentTheme.styleOverride(mergedProps, theme)
    : [];

  return [
    ...css`
      width: 200px;
      font-size: 0.875rem;
      background-color: ${theme.color("transparent")};
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      border-color: ${Color(
        isDarkTheme ? theme.color("text", 50) : theme.color("text", 950)
      )
        .alpha(0.15)
        .toString()};
      color: ${isDarkTheme
        ? theme.color("text", 50)
        : theme.color("text", 950)};

      &:focus {
        border-color: ${Color(
          isDarkTheme ? theme.color("text", 50) : theme.color("text", 950)
        )
          .alpha(0.4)
          .toString()};
        transition: box-shadow 100ms;
      }

      // Size
      ${() => {
        switch (size) {
          case "small":
            return css`
              height: 1.5rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            `;
          case "large":
            return css`
              height: 2.5rem;
              padding-left: 0.75rem;
              padding-right: 0.75rem;
            `;
          default:
            return css`
              height: 2rem;
              padding-left: 0.625rem;
              padding-right: 0.625rem;
            `;
        }
      }}
    `,
    ...stylesOverrided,
  ];
});
