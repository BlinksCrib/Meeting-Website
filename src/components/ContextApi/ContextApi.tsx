import React, { createContext, useContext, useReducer, useState } from "react";

interface MyContextType {
  callType?: String;
  setCallType?: (value: string) => void;
}

const initialState: MyContextType = {
  callType: "call", // Assuming "call" is a valid default state
  // setCallType is omitted because it doesn't make sense to provide a string as a function placeholder
};

const ContextApi = createContext<MyContextType | null>(null);

const ContextProvider: React.FC<any> = ({ children }) => {
  const [state] = useReducer((state) => state, initialState);

  const [callType, setCallType] = useState<string>("audio");

  return (
    <div>
      <ContextApi.Provider
        value={{
          ...state,
          callType,
          setCallType,
        }}
      >
        {children}
      </ContextApi.Provider>
    </div>
  );
};

const useAppContext = () => {
  const context = useContext(ContextApi);
  if (context === null) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return useContext(ContextApi);
};

export { ContextProvider, initialState, useAppContext };
