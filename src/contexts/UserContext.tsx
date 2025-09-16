import React, { createContext, useContext, useState, type ReactNode } from "react";

interface UserContextType {
  name: string;
  role: string;
}

interface UserContextValue {
  user: UserContextType;
  setUser: React.Dispatch<React.SetStateAction<UserContextType>>;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserContextType>({
    name: "",
    role: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextValue => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
