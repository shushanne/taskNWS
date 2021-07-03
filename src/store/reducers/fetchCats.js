import * as type from "../actionTypes/index";

const initialState = {
    cats: [],
    catsCategories: [],
    loading: false,
    error: null,
}

export default function Cats(state = initialState, action) {
    switch (action.type) {
        case type.GET_CATS_REQUEST: {
            return { ...state, loading: true }
        }
        case type.GET_CATS_SUCCESS: {
            return { ...state, loading: false, cats: action.cats}
        }
        case type.GET_CATS_FAILURE: {
            return { ...state, loading: false, error: action.message }
        }
        case type.GET_CATS_CATEGORIES_REQUEST: {
            return { ...state, loading: true }
        }
        case type.GET_CATS_CATEGORIES_SUCCESS: {
            return { ...state, loading: false, catsCategories: action.catsCategories}
        }
        case type.GET_CATS_CATEGORIES_FAILURE: {
            return { ...state, loading: false, error: action.message }
        }
        default:
            return state
    }
}