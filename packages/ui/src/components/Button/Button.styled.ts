import Color from "color";
import { merge } from "lodash";
import { css, styled } from "styled-components";
import { getComponentTheme } from "../../utils";
import { UnstyledButton } from "./Button";
import { LoadingIcon } from "./LoadingIcon.styled";

const ring = (colorToString: string) =>
  `0 0 0 2px ${Color(colorToString).alpha(0.4).toString()}`;

export const Button = styled(UnstyledButton)(({ theme, ...props }) => {
  const componentTheme = getComponentTheme(theme, "Button");
  const mergedProps = merge(componentTheme?.defaultProps, props);
  const { fullWidth, isLoading, size, shape, color, asIcon, variant } =
    mergedProps;

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
      font-weight: 600;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;

      &:focus-visible {
        outline: none;
        box-shadow: ${() => {
          switch (color) {
            case "orange":
              return ring(theme.color("orange", 600));
            case "red":
              return ring(theme.color("red", 600));
            case "green":
              return ring(theme.color("green", 600));
            case "violet":
              return ring(theme.color("violet", 600));
            case "yellow":
              return ring(theme.color("yellow", 600));
            case "blue":
              return ring(theme.color("blue", 600));
            case "black":
              return ring(theme.color("black", 600));
            case "gray":
              return ring(theme.color("gray", 600));
          }
        }};
      }

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

      // Variant
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
              border-width: 1px;
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
        if (variant === "outline") {
          switch (color) {
            case "orange":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("orange", 500)};
                }
                color: ${theme.color("orange", 500)};
                background-color: ${theme.color("transparent")};
                border-color: ${theme.color("orange", 500)};
                &:hover {
                  color: ${theme.color("white")};
                  background-color: ${theme.color("orange", 500)};
                }
                &:active {
                  border-color: ${theme.color("orange", 600)};
                  background-color: ${theme.color("orange", 600)};
                }
              `;
            case "red":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("red", 500)};
                }
                color: ${theme.color("red", 500)};
                background-color: ${theme.color("transparent")};
                border-color: ${theme.color("red", 500)};
                &:hover {
                  color: ${theme.color("white")};
                  background-color: ${theme.color("red", 500)};
                }
                &:active {
                  border-color: ${theme.color("red", 600)};
                  background-color: ${theme.color("red", 600)};
                }
              `;
            case "yellow":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("yellow", 500)};
                }
                color: ${theme.color("yellow", 500)};
                background-color: ${theme.color("transparent")};
                border-color: ${theme.color("yellow", 500)};
                &:hover {
                  color: ${theme.color("white")};
                  background-color: ${theme.color("yellow", 500)};
                }
                &:active {
                  border-color: ${theme.color("yellow", 600)};
                  background-color: ${theme.color("yellow", 600)};
                }
              `;
            case "green":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("green", 500)};
                }
                color: ${theme.color("green", 500)};
                background-color: ${theme.color("transparent")};
                border-color: ${theme.color("green", 500)};
                &:hover {
                  color: ${theme.color("white")};
                  background-color: ${theme.color("green", 500)};
                }
                &:active {
                  border-color: ${theme.color("green", 600)};
                  background-color: ${theme.color("green", 600)};
                }
              `;
            case "violet":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("violet", 500)};
                }
                color: ${theme.color("violet", 500)};
                background-color: ${theme.color("transparent")};
                border-color: ${theme.color("violet", 500)};
                &:hover {
                  color: ${theme.color("white")};
                  background-color: ${theme.color("violet", 500)};
                }
                &:active {
                  border-color: ${theme.color("violet", 600)};
                  background-color: ${theme.color("violet", 600)};
                }
              `;
            case "blue":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("blue", 500)};
                }
                color: ${theme.color("blue", 500)};
                background-color: ${theme.color("transparent")};
                border-color: ${theme.color("blue", 500)};
                &:hover {
                  color: ${theme.color("white")};
                  background-color: ${theme.color("blue", 500)};
                }
                &:active {
                  border-color: ${theme.color("blue", 600)};
                  background-color: ${theme.color("blue", 600)};
                }
              `;
            case "gray":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("gray", 500)};
                }
                color: ${theme.color("gray", 500)};
                background-color: ${theme.color("transparent")};
                border-color: ${theme.color("gray", 500)};
                &:hover {
                  color: ${theme.color("white")};
                  background-color: ${theme.color("gray", 500)};
                }
                &:active {
                  border-color: ${theme.color("gray", 600)};
                  background-color: ${theme.color("gray", 600)};
                }
              `;
            case "black":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("black", 500)};
                }
                color: ${theme.color("black", 500)};
                background-color: ${theme.color("transparent")};
                border-color: ${theme.color("black", 500)};
                &:hover {
                  color: ${theme.color("white")};
                  background-color: ${theme.color("black", 500)};
                }
                &:active {
                  border-color: ${theme.color("black", 600)};
                  background-color: ${theme.color("black", 600)};
                }
              `;
          }
        } else if (variant === "link") {
          switch (color) {
            case "orange":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("orange", 600)};
                }
                color: ${theme.color("orange", 600)};
                background-color: ${theme.color("transparent")};
                &:active {
                  color: ${theme.color("orange", 700)};
                }
              `;
            case "red":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("red", 600)};
                }
                color: ${theme.color("red", 600)};
                background-color: ${theme.color("transparent")};
                &:active {
                  color: ${theme.color("red", 700)};
                }
              `;
            case "yellow":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("yellow", 600)};
                }
                color: ${theme.color("yellow", 600)};
                background-color: ${theme.color("transparent")};
                &:active {
                  color: ${theme.color("yellow", 700)};
                }
              `;
            case "green":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("green", 600)};
                }
                color: ${theme.color("green", 600)};
                background-color: ${theme.color("transparent")};
                &:active {
                  color: ${theme.color("green", 700)};
                }
              `;
            case "violet":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("violet", 600)};
                }
                color: ${theme.color("violet", 600)};
                background-color: ${theme.color("transparent")};
                &:active {
                  color: ${theme.color("violet", 700)};
                }
              `;
            case "blue":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("blue", 600)};
                }
                color: ${theme.color("blue", 600)};
                background-color: ${theme.color("transparent")};
                &:active {
                  color: ${theme.color("blue", 700)};
                }
              `;
            case "gray":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("gray", 600)};
                }
                color: ${theme.color("gray", 600)};
                background-color: ${theme.color("transparent")};
                &:active {
                  color: ${theme.color("gray", 700)};
                }
              `;
            case "black":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("black", 600)};
                }
                color: ${theme.color("black", 800)};
                background-color: ${theme.color("transparent")};
                &:active {
                  color: ${theme.color("black", 950)};
                }
              `;
          }
        } else if (variant === "text") {
          switch (color) {
            case "orange":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("orange", 600)};
                }
                color: ${theme.color("orange", 600)};
                background-color: ${theme.color("transparent")};
                &:hover {
                  background-color: ${Color(theme.color("orange", 800))
                    .alpha(0.2)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("orange", 800))
                    .alpha(0.3)
                    .toString()};
                }
              `;
            case "red":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("red", 600)};
                }
                color: ${theme.color("red", 600)};
                background-color: ${theme.color("transparent")};
                &:hover {
                  background-color: ${Color(theme.color("red", 800))
                    .alpha(0.2)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("red", 800))
                    .alpha(0.3)
                    .toString()};
                }
              `;
            case "yellow":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("yellow", 600)};
                }
                color: ${theme.color("yellow", 600)};
                background-color: ${theme.color("transparent")};
                &:hover {
                  background-color: ${Color(theme.color("yellow", 600))
                    .alpha(0.2)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("yellow", 600))
                    .alpha(0.3)
                    .toString()};
                }
              `;
            case "green":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("green", 600)};
                }
                color: ${theme.color("green", 600)};
                background-color: ${theme.color("transparent")};
                &:hover {
                  background-color: ${Color(theme.color("green", 800))
                    .alpha(0.2)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("green", 800))
                    .alpha(0.3)
                    .toString()};
                }
              `;
            case "violet":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("violet", 600)};
                }
                color: ${theme.color("violet", 600)};
                background-color: ${theme.color("transparent")};
                &:hover {
                  background-color: ${Color(theme.color("violet", 800))
                    .alpha(0.2)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("violet", 800))
                    .alpha(0.3)
                    .toString()};
                }
              `;
            case "blue":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("blue", 600)};
                }
                color: ${theme.color("blue", 600)};
                background-color: ${theme.color("transparent")};
                &:hover {
                  background-color: ${Color(theme.color("blue", 800))
                    .alpha(0.2)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("blue", 800))
                    .alpha(0.3)
                    .toString()};
                }
              `;
            case "gray":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("gray", 600)};
                }
                color: ${theme.color("gray", 600)};
                background-color: ${theme.color("transparent")};
                &:hover {
                  background-color: ${Color(theme.color("gray", 800))
                    .alpha(0.2)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("gray", 800))
                    .alpha(0.3)
                    .toString()};
                }
              `;
            case "black":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("black", 600)};
                }
                color: ${theme.color("black", 600)};
                background-color: ${theme.color("transparent")};
                &:hover {
                  background-color: ${Color(theme.color("black", 800))
                    .alpha(0.2)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("black", 800))
                    .alpha(0.3)
                    .toString()};
                }
              `;
          }
        } else if (variant === "transparent") {
          switch (color) {
            case "orange":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("orange", 600)};
                }
                color: ${theme.color("orange", 600)};
                background-color: ${Color(theme.color("orange", 800))
                  .alpha(0.15)
                  .toString()};
                &:hover {
                  background-color: ${Color(theme.color("orange", 800))
                    .alpha(0.3)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("orange", 800))
                    .alpha(0.4)
                    .toString()};
                }
              `;
            case "red":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("red", 600)};
                }
                color: ${theme.color("red", 600)};
                background-color: ${Color(theme.color("red", 800))
                  .alpha(0.15)
                  .toString()};
                &:hover {
                  background-color: ${Color(theme.color("red", 800))
                    .alpha(0.3)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("red", 800))
                    .alpha(0.4)
                    .toString()};
                }
              `;
            case "yellow":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("yellow", 600)};
                }
                color: ${theme.color("yellow", 600)};
                background-color: ${Color(theme.color("yellow", 800))
                  .alpha(0.15)
                  .toString()};
                &:hover {
                  background-color: ${Color(theme.color("yellow", 800))
                    .alpha(0.3)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("yellow", 800))
                    .alpha(0.4)
                    .toString()};
                }
              `;
            case "green":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("green", 600)};
                }
                color: ${theme.color("green", 600)};
                background-color: ${Color(theme.color("green", 800))
                  .alpha(0.15)
                  .toString()};
                &:hover {
                  background-color: ${Color(theme.color("green", 800))
                    .alpha(0.3)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("green", 800))
                    .alpha(0.4)
                    .toString()};
                }
              `;
            case "violet":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("violet", 600)};
                }
                color: ${theme.color("violet", 600)};
                background-color: ${Color(theme.color("violet", 800))
                  .alpha(0.15)
                  .toString()};
                &:hover {
                  background-color: ${Color(theme.color("violet", 800))
                    .alpha(0.3)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("violet", 800))
                    .alpha(0.4)
                    .toString()};
                }
              `;
            case "blue":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("blue", 600)};
                }
                color: ${theme.color("blue", 600)};
                background-color: ${Color(theme.color("blue", 800))
                  .alpha(0.15)
                  .toString()};
                &:hover {
                  background-color: ${Color(theme.color("blue", 800))
                    .alpha(0.3)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("blue", 800))
                    .alpha(0.4)
                    .toString()};
                }
              `;
            case "gray":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("gray", 600)};
                }
                color: ${theme.color("gray", 600)};
                background-color: ${Color(theme.color("gray", 800))
                  .alpha(0.15)
                  .toString()};
                &:hover {
                  background-color: ${Color(theme.color("gray", 800))
                    .alpha(0.3)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("gray", 800))
                    .alpha(0.4)
                    .toString()};
                }
              `;
            case "black":
              return css`
                ${LoadingIcon} {
                  border-color: ${theme.color("black", 600)};
                }
                color: ${theme.color("black", 600)};
                background-color: ${Color(theme.color("black", 800))
                  .alpha(0.15)
                  .toString()};
                &:hover {
                  background-color: ${Color(theme.color("black", 800))
                    .alpha(0.3)
                    .toString()};
                }
                &:active {
                  background-color: ${Color(theme.color("black", 800))
                    .alpha(0.4)
                    .toString()};
                }
              `;
          }
        } else {
          switch (color) {
            case "orange":
              return css`
                background-color: ${theme.color("orange", 500)};
                color: ${theme.color("white")};
                &:hover {
                  background-color: ${theme.color("orange", 600)};
                }
                &:active {
                  background-color: ${theme.color("orange", 700)};
                }
              `;
            case "red":
              return css`
                background-color: ${theme.color("red", 500)};
                color: ${theme.color("white")};
                &:hover {
                  background-color: ${theme.color("red", 600)};
                }
                &:active {
                  background-color: ${theme.color("red", 700)};
                }
              `;
            case "yellow":
              return css`
                background-color: ${theme.color("yellow", 500)};
                color: ${theme.color("white")};
                &:hover {
                  background-color: ${theme.color("yellow", 600)};
                }
                &:active {
                  background-color: ${theme.color("yellow", 700)};
                }
              `;
            case "green":
              return css`
                background-color: ${theme.color("green", 600)};
                color: ${theme.color("white")};
                &:hover {
                  background-color: ${theme.color("green", 700)};
                }
                &:active {
                  background-color: ${theme.color("green", 800)};
                }
              `;
            case "violet":
              return css`
                background-color: ${theme.color("violet", 500)};
                color: ${theme.color("white")};
                &:hover {
                  background-color: ${theme.color("violet", 600)};
                }
                &:active {
                  background-color: ${theme.color("violet", 700)};
                }
              `;
            case "blue":
              return css`
                background-color: ${theme.color("blue", 600)};
                color: ${theme.color("white")};
                &:hover {
                  background-color: ${theme.color("blue", 700)};
                }
                &:active {
                  background-color: ${theme.color("blue", 800)};
                }
              `;
            case "gray":
              return css`
                background-color: ${theme.color("gray", 600)};
                color: ${theme.color("white")};
                &:hover {
                  background-color: ${theme.color("gray", 700)};
                }
                &:active {
                  background-color: ${theme.color("gray", 800)};
                }
              `;
            case "black":
              return css`
                background-color: ${theme.color("black", 800)};
                color: ${theme.color("white")};
                &:hover {
                  background-color: ${theme.color("black", 900)};
                }
                &:active {
                  background-color: ${theme.color("black", 950)};
                }
              `;
          }
        }
      }}
    `,
    ...stylesOverrided,
  ];
});
