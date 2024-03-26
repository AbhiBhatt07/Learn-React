// this is basic setup for create context in react. it's change for diff.. requirments okay.

import React, { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    // in this value we also give more such things if we have.

    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
