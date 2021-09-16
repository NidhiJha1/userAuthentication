import React, { useEffect, useCallback } from "react";
import { useState } from "react/cjs/react.development";

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn : false,
    login: (token) => {},
    logout: () => {}
});


const calculateRemainingTime = (expirationTime) => {

    const currentTime = new Date().getTime();
    const adjExprirationTime = new Date(expirationTime).getTime();

    const remainingDurationTime = adjExprirationTime - currentTime;

    return remainingDurationTime;
};

const retrieveStoredToken = () => {
    const stotedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    
    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if(remainingTime <= 3600){

        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        token : stotedToken,
        duration : remainingTime
    };

};


export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();
    let initialToken;

    if(tokenData){
        initialToken = tokenData.token;
    }

    const [token,setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        if(logoutTimer){
            clearInterval(logoutTimer);
        }
    },[]);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token',token);
        localStorage.setItem('expirationTime',expirationTime);
        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logoutHandler, remainingTime);
    };


    useEffect(() => {
       if(tokenData){
           console.log(tokenData.duration);
           logoutTimer = setTimeout(logoutHandler,tokenData.duration);
       }
    },[tokenData,logoutHandler]);


    const contextValue = {
        token: token,
        isLoggedIn:userIsLoggedIn,
        login: loginHandler,
        logout:logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;