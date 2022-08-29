import { UIAction } from "./ui-slice";
import { CartAction } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://react-http-b185e-default-rtdb.firebaseio.com/cart.json");

            if(!response.ok) {
                throw new Error("Something Went Wrong");
            }

            const responseData = await response.json();
            return responseData;
        }

        try {
            const cartData = await fetchData();

            dispatch(CartAction.replace({cartData: cartData || []}))

        } catch (error) {
            dispatch(UIAction.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending Cart Data Failed"
            }))
        }
    }
}

export const sendCartData = cart => {

    return async (dispatch) => {
        dispatch(UIAction.showNotification({
            status: "pending",
            title: "sending",
            message: "Sending Cart Data!"
        }))
        const sendRequest = async () => {
            const response = await fetch("https://react-http-b185e-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify(cart)
            })


            if (!response.ok) {
                throw new Error("Sending Cart Data Failed")
            }
        }

        try {
            await sendRequest();

            dispatch(UIAction.showNotification({
                status: "success",
                title: "Success!",
                message: "Sending Cart Data Success"
            }))

        } catch (error) {
            dispatch(UIAction.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending Cart Data Failed"
            }))
        }
    }
}