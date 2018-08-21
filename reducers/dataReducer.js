
const initialState = {
    step1Data: new Array(),
    step2Data: new Array(),
    step3Data: new Array(),

};

export default function data(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return Object.assign(state,action.payload) ;

        default:
            return state;
    }
}
