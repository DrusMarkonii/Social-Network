import React, { createContext, useContext } from 'react';

export type UserContextType = {
  userLogin: any;
  setUserLogin: (str: string) => void;
  isAuth: boolean;
  setIsAuth: (bool: boolean) => void;
};

export const UserContext = React.createContext<UserContextType>({
  userLogin: { },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserLogin: () => {},
  isAuth: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsAuth: () => {},
});
