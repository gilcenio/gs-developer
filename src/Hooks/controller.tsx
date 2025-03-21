
import React, { createContext, ReactNode, useContext, useState } from "react";


interface ControllerProviderProps {
  children: ReactNode;
}

interface ControllerContextData {
  isFinishAnimated: boolean
  setIsFinishAnimated: React.Dispatch<React.SetStateAction<boolean>>
  route: string
  setRoute: React.Dispatch<React.SetStateAction<string>>
}

const ControllerContext = createContext({} as ControllerContextData);

const ControllerProvider = ({ children }: ControllerProviderProps) => {
  const [isFinishAnimated, setIsFinishAnimated] = useState(false)
  const [route, setRoute] = useState<string>("Home");


  return (
    <ControllerContext.Provider
      value={{
        isFinishAnimated,
        setIsFinishAnimated,
        route,
        setRoute
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
};

function useController() {
  const context = useContext(ControllerContext);
  if (!context) {
    throw new Error("useController must be used within an ControllerProvider");
  }
  return context;
}

export { ControllerProvider, useController };
