import  { useReducer,useCallback } from 'react';

const httpsReducer = (state, action) => {
    if(action.type === "SEND"){
        return {
            data: null,
            status: "Pending",
            error: null
        }
    }
    if(action.type === "ERROR"){
        return {
            data: null,
            status: "Completed",
            error: action.message
        }
    }
    if(action.type === "SUCCES"){
        return {
            data: action.responseData,
            status: "Completed",
            error: null
        }
    }
    return state;
}

export default function useHttps(requestFunction, startWithPending = false) {
    const [httpState, dispatch] = useReducer(httpsReducer, {
        status: startWithPending ? "pending" : null,
    })

    const sendRequest = useCallback(
      async  (requestData) => {
            dispatch({type: "SEND"})
            try {
                const responseData = await requestFunction(requestData);
                dispatch({type: 'SUCCES', responseData})
            } catch (error) {
                dispatch({type: "ERROR", message: error.message || "Somethng Went Wrong!"})
            }
        },
        [requestFunction],
    )


    return ({
        sendRequest,
        ...httpState,
    })
}
