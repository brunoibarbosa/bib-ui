import styled from "styled-components";
import { rotate } from "../../theme";

export const LoadingIcon = styled.span`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border-width: 2px;
  border-color: ${({
    theme: {
      helpers: { getColor },
    },
  }) => getColor("white")};
  border-top-color: transparent !important;
  animation: ${rotate} 1s linear infinite;
`;
