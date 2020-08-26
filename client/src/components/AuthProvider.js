import React, { useState } from 'react';

export const AuthContext = React.createContext();

function AuthProvider(props) {
  const userString = localStorage.getItem("user");
  const initialUser = userString && JSON.parse(userString);
  const [user, setUser] = useState(initialUser);
  const authValue = {
    
    user,
    setUser(user) {
      localStorage.setItem("user", user && (JSON.stringify(user)));
      setUser(user);
    }
  }
  //console.log("Initial User", authValue.user,(JSON.stringify(initialUser)));

  return (
    
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;