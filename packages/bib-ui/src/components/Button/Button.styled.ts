import Color from "color";
import { merge } from "lodash";
import { css, styled } from "styled-components";
import { getComponentTheme } from "../../utils";
import { UnstyledButton } from "./Button.unstyled";
import { LoadingIcon } from "./LoadingIcon";

export const StyledButton = styled(UnstyledButton)(({ theme, ...props }) => {
  const componentTheme = getComponentTheme(theme, "Button");
  const mergedProps = merge(componentTheme?.defaultProps, props);
  const {
    fullWidth,
    isLoading,
    size,
    shape,
    color = "orange",
    asIcon,
    variant,
    themeMode,
  } = mergedProps;

  const isDarkTheme = themeMode === "dark";

  const stylesOverrided = componentTheme?.styleOverride
    ? componentTheme.styleOverride(mergedProps, theme)
    : [];

  return [
    ...css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      white-space: nowrap;
      font-size: 0.875rem;
      font-weight: 500;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      border-width: 1px;
      border-color: ${theme.color("transparent")};
      outline: none;

      ${() => {
        switch (variant) {
          case "default":
          case "transparent":
          case "text":
          case "outline":
            return css`
              &:focus-visible {
                transition: box-shadow 100ms;
                box-shadow: 0 0 0 2px
                    ${isDarkTheme
                      ? theme.color("black", 950)
                      : theme.color("white")},
                  0 0 0 4px
                    ${Color(theme.color(color, 500)).alpha(0.3).toString()};
              }
            `;
          case "link":
            return css`
              &:focus-visible {
                text-decoration: underline;
              }
            `;
        }
      }}

      // Disabled
      &:disabled {
        pointer-events: none;
        color: ${theme.color("disabled", "dark")};
      }

      // Full Width
      ${fullWidth &&
      css`
        width: 100%;
      `}

      // isLoading
      ${isLoading &&
      css`
        opacity: 60%;
        &:disabled {
          opacity: 100%;
        }
        cursor: default;
        pointer-events: none;
      `}

      // Size
      ${() => {
        switch (size) {
          case "small":
            return css`
              height: 1.5rem;
              padding-left: 0.75rem;
              padding-right: 0.75rem;
              padding-top: 0.375rem;
              padding-bottom: 0.375rem;
            `;
          case "large":
            return css`
              height: 2.5rem;
              padding-left: 1.25rem;
              padding-right: 1.25rem;
              padding-top: 0.625rem;
              padding-bottom: 0.625rem;
            `;
          default:
            return css`
              height: 2rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            `;
        }
      }}

      // Shape
      border-radius: ${() => {
        switch (shape) {
          case "rounded":
            return "4px";
          case "circle":
            return "9999px";
          default:
            return 0;
        }
      }};

      // asIcon & Size
      ${() => {
        if (asIcon) {
          switch (size) {
            case "small":
              return css`
                height: 1.5rem;
                width: 1.5rem;
                padding: 0.5rem;
              `;
            case "large":
              return css`
                height: 2.5rem;
                width: 2.5rem;
                padding: 0.625rem;
              `;
            default:
              return css`
                height: 2rem;
                width: 2rem;
                padding: 0.5rem;
              `;
          }
        }
      }}

      // Variant & Disabled
      ${() => {
        switch (variant) {
          case "transparent":
            return css`
              color: ${theme.color("black", "DEFAULT")};
              &:disabled {
                background-color: ${theme.color("disabled", "light")};
              }
            `;
          case "text":
            return css`
              color: ${theme.color("black", "DEFAULT")};
              &:disabled {
                background-color: ${theme.color("transparent")};
              }
            `;
          case "link":
            return css`
              color: ${theme.color("black", "DEFAULT")};
              &:disabled {
                background-color: ${theme.color("transparent")};
              }
              &:hover {
                text-decoration: underline;
              }
            `;
          case "outline":
            return css`
              color: ${theme.color("black", "DEFAULT")};
              &:disabled {
                border-color: ${theme.color("disabled", "main")};
                background-color: ${theme.color("disabled", "light")};
              }
            `;
          default:
            return css`
              color: ${theme.color("white")};
              &:disabled {
                background-color: ${theme.color("disabled", "light")};
              }
            `;
        }
      }}

      // Color & Variant
      ${() => {
        switch (variant) {
          case "outline":
            return css`
              ${LoadingIcon} {
                border-color: ${theme.color(color, 500)};
              }
              color: ${theme.color(color, 500)};
              background-color: ${theme.color("transparent")};
              border-color: ${theme.color(color, 500)};
              &:hover {
                color: ${theme.color("white")};
                background-color: ${theme.color(color, 500)};
              }
              &:active {
                color: ${theme.color("white")};
                border-color: ${theme.color(color, 600)};
                background-color: ${theme.color(color, 600)};
              }
            `;
          case "link":
            return css`
              ${LoadingIcon} {
                border-color: ${theme.color(color, 600)};
              }
              color: ${theme.color(color, 600)};
              background-color: ${theme.color("transparent")};
              &:active {
                color: ${theme.color(color, 700)};
              }
            `;
          case "text":
            return css`
              ${LoadingIcon} {
                border-color: ${theme.color(color, 600)};
              }
              color: ${theme.color(color, 600)};
              background-color: ${theme.color("transparent")};
              &:hover {
                background-color: ${Color(theme.color(color, 800))
                  .alpha(0.2)
                  .toString()};
              }
              &:active {
                background-color: ${Color(theme.color(color, 800))
                  .alpha(0.3)
                  .toString()};
              }
            `;
          case "transparent":
            return css`
              ${LoadingIcon} {
                border-color: ${theme.color(color, 600)};
              }
              color: ${theme.color(color, 600)};
              background-color: ${Color(theme.color(color, 800))
                .alpha(isDarkTheme ? 0.25 : 0.15)
                .toString()};
              &:hover {
                background-color: ${Color(theme.color(color, 800))
                  .alpha(isDarkTheme ? 0.4 : 0.3)
                  .toString()};
              }
              &:active {
                background-color: ${Color(theme.color(color, 800))
                  .alpha(isDarkTheme ? 0.5 : 0.4)
                  .toString()};
              }
            `;
          default:
            return css`
              background-color: ${theme.color(color, 500)};
              color: ${theme.color("white")};
              &:hover {
                background-color: ${theme.color(color, 600)};
              }
              &:active {
                background-color: ${theme.color(color, 700)};
              }
            `;
        }
      }}
    `,
    ...stylesOverrided,
  ];
});
