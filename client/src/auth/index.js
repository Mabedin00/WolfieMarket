import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from '../api';

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

    const navigate = useNavigate();

    const authReducer = (action) => {
        const { type, payload } = action;
        switch (type) {
            case AuthActionType.GET_LOGGED_IN: {
                return setAuth({
                    user: payload.user,
                    loggedIn: payload.loggedIn,
                    error: null
                });
            }
            case AuthActionType.SET_LOGGED_IN: {
                return setAuth({
                    user: payload.user,
                    loggedIn: payload.loggedIn,
                    error: null

                });
            }

            case AuthActionType.SET_ERROR: {
                return setAuth({
                    user: null,
                    loggedIn: false,
                    error: payload.error,
                })
            }
            case AuthActionType.REGISTER_USER: {
                return setAuth({
                    user: payload.user,
                    loggedIn: true,
                    error: null
                })
            }
            default:
                return auth;
        }
    }

    auth.registerUser = async function(userData, store) {
        await api.registerUser(userData)
        .then(response => {
            console.log(response)
            if (response.status === 200) {     
            authReducer({
                type: AuthActionType.REGISTER_USER,
                payload: {
                    user: response.data.user
                }
            })
                navigate('/login');
            }
        }
        ).catch(err => { 
            let errorMsg = err.response.data.errorMessage;
            authReducer({
                type: AuthActionType.SET_ERROR,
                payload: {
                    error: errorMsg
                }
            })

        });      
            
    }

    auth.getLoggedIn = async function () {
        try {
            const response = await api.getLoggedIn();
            if (response.status === 200) {
                authReducer({
                    type: AuthActionType.GET_LOGGED_IN,
                    payload: {
                        loggedIn: response.data.loggedIn,
                        user: response.data.user
                    }
                });
            }
        }
        catch (err) {
            console.log(err);
        }
    }
     // Logs user in and sets the state
     auth.loginUser = async function(userData, store) {
        await api.loginUser(userData).then(response => {
            if (response.status === 200) {
                authReducer({
                    type: AuthActionType.SET_LOGGED_IN,
                    payload: {
                        loggedIn: true,
                        user: response.data.user
                    }
                })
                    // history.push("/home");
                }
            }).catch(err => {
                console.log(err);
                let errorMsg = err.response.data.errorMessage;
                console.log(errorMsg);
                authReducer({
                    type: AuthActionType.SET_ERROR,
                    payload: {
                        error: errorMsg
                    }
                })
            });
        
    }
    auth.setError = (error) => {
        authReducer({
            type: AuthActionType.SET_ERROR,
            payload: {
                error: error
            }
        })
    }

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