import {
    ADD_PRODUCTS,
    CHANGE_OLD_FIELD,
    CHANGE_PRODUCT,
    GET_PRODUCTS,
    SAVE_CHANGES_PRODUCT
} from './actions'

export const createAddProducts = (payload = '') => {
    return {
        type: ADD_PRODUCTS,
        payload,
    }
}
export const createChangeProduct = (payload) => {
    return {
        type: CHANGE_PRODUCT,
        payload,
    }
}

export const createSaveChangesProduct = (payload) => {
    return {
        type: SAVE_CHANGES_PRODUCT,
        payload,
    }
}

export const _createGetProducts = (payload) => {
    return {
        type: GET_PRODUCTS,
        payload,
    }
}

export const createChangeOldField = (payload) => {
    return {
        type: CHANGE_OLD_FIELD,
        payload,
    }
}

