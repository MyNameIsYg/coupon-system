export const deleteFromStore = (id) => {
    return {
        type: "DELETE_FROM_STORE",
        payload: id
    }
}

export const addToStore = (coupon) => {
    return {
        type: "ADD_TO_STORE",
        payload: coupon
    }
}