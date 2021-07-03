import * as type from '../actionTypes/index';

export const getCats = (cats) => ({
    type: type.GET_CATS_REQUEST,
    cats
})

export const getCatsCategories = (catsCategories) => ({
    type: type.GET_CATS_CATEGORIES_REQUEST,
    catsCategories
})