import { createContext, Dispatch, useState } from "react";

type ContextValues = {
  shrink: boolean;
  setShrink?: Dispatch<any>;
};

const defaultValues: ContextValues = {
  shrink: false,
  setShrink: () => {},
};

export const sidebarCtx = createContext(defaultValues);

interface Props {
  children: React.ReactNode;
}

export const SidebarCtxProvider = (props: Props) => {
  const [shrink, setShrink] = useState(false);

  return <sidebarCtx.Provider value={{ shrink, setShrink }} {...props} />;
};
