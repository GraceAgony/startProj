export function setData(data) {

    return {
        type: 'SET_DATA',
        payload: data
    }

}


export function getData(details) {
    return{
        type: 'GET_DATA',
        details: details
    }
}