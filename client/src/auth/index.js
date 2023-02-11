import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

// THESE ARE ALL THE TYPES OF UPDATES TO OUR AUTH STATE THAT CAN BE PROCESSED
export const AuthActionType = {
    GET_LOGGED_IN: "GET_LOGGED_IN",
    SET_LOGGED_IN: "SET_LOGGED_IN",
    SET_ERROR: "SET_ERROR",
    REGISTER_USER: "REGISTER_USER"
}

function AuthContextProvider(props) {
    const [auth, setAuth] = useState({
        user: null,
        loggedIn: false,
        error: null
    });

    return (
        <AuthContext.Provider value={{
            auth
        }}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContext;
export { AuthContextProvider };