

const initialState = {
    children: [0,1,2,3,4],
    childrenCount: 0,
};

export default function children(state = initialState, action) {
    switch (action.type) {
        case 'SET_CHILDREN':
            Object.assign(state, action.payload);
            return  state ;

        default:
            return state;
    }
}
