import { createContext } from "react";
import { BibUIState } from "./Context.types";

export const BibUIContext = createContext<BibUIState>({
  components: {
    Button: {
      defaultProps: {
        variant: "default",
        color: "orange",
        size: "default",
        shape: "default",
        asChild: false,
        asIcon: false,
        fullWidth: false,
        isLoading: false,
      },
    },
  },
});

export const BibUIProvider = BibUIContext.Provider;
