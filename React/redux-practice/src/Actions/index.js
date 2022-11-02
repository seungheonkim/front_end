export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';

export const increase = () => {
    return {
        type: INCREASE,
    }
}
export const decrease = () => {
    return {
        type: DECREASE,
    }
}
export const reset = (num) => {
    return {
        type: RESET,
        payload: num,
    }
}