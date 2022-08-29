import React, { useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    LogIn: (token) => { },
    LogOut: () => { },
});

const calculateRemainingTime = expirationTime => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
}

// const retriveStoredToken = () => {
//     const storedToken = localStorage.getItem("token");
//     const storedTimer = localStorage.getItem("expirationTime");

//     const remainingTime = calculateRemainingTime(storedTimer);

//     if(remainingTime < 60000) {
//         localStorage.removeItem("token")
//         localStorage.removeItem("expirationTime")
//         return null;
//     }

//     return {
//         token: storedToken,
//         duration: storedTimer
//     }
// }

export const AuthContextProvider = (props) => {
    // const tokenData = retriveStoredToken();
    // let initialToken;
    // if(tokenData){
    //     initialToken = tokenData.token;
    // }
    let initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);

    const userIsLogged = !!token;


    const logOutHandler = () => {
        setToken(null);
        localStorage.removeItem("token")
        localStorage.removeItem("expirationTime")

        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    };

    const logInHandler = (token, expirationTime) => {
        console.log(token, expirationTime)
        setToken(token)
        localStorage.setItem("token", token);
        localStorage.setItem("expirationTime", expirationTime)

        const remainingTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logOutHandler, remainingTime);
    };

    // useEffect(() => {
    //    if(tokenData){
    //        console.log(tokenData)
    //     logoutTimer = setTimeout(logOutHandler, tokenData.duration);
    //    }
    // }, [tokenData])

    const contextValue = {
        token: token,
        isLoggedIn: userIsLogged,
        LogIn: logInHandler,
        LogOut: logOutHandler,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;