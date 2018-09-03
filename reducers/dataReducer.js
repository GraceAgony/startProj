
const initialState = {
    step1Data: new Array(),
    step2Data: new Array(),
    step3Data: new Array(),
    step4Data: {},
    step5Data: new Array(),
    step6Data: new Array(),
    step7Data: new Array(),
    step8Data: new Array(),
    step9Data: new Array(),
    step10Data: new Array(),
    step11Data: new Array(),
    step12Data: new Array(),


};

export default function data(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return Object.assign(state,action.payload) ;

        default:
            return state;
    }
}
