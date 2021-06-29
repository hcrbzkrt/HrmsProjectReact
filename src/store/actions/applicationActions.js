export const ADD_TO_APPLİCATİON ="ADD_TO_APPLİCATİON"
export const REMOVE_FROM_APPLİCATİON ="REMOVE_FROM_APPLİCATİON"


export function addToApplication(application) {
    return{
        type : "ADD_TO_APPLİCATİON",
        payload : application
    }
}

export function removeFromApplication(application) {
    return{
        type : "ADD_TO_APPLİCATİON",
        payload : application
    }
}