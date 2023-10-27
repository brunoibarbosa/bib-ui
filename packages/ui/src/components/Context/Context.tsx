import { createContext } from "react";
import { UIConfigState } from "./Context.types";

export const UIConfigContext = createContext<UIConfigState>({});

export const UIConfigProvider = UIConfigContext.Provider;
