export function setForm(form) {

    return {
        type: 'SET_FORM',
        payload: form
    }

}

export function cleanFilter(form) {
    return {
        type: 'CLEAN_FILTER',
        payload: form
    }

}

