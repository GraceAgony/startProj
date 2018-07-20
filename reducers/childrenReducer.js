const initialState = {
    children: new Array(),
    childrenCount: 0,
};

export default function children(state = initialState, action) {
    switch (action.type) {
        case 'SET_CHILDREN':
            return  action.payload ;

        default:
            return state;
    }
}
