import { all, call, put, takeEvery } from "redux-saga/effects";
import Api from "../../utils/Api"

function fetchCatsApi() {
    return Api.get(`/images/search?limit=10&page=1&category_ids=1`).then(res => res.data)
        .catch((error) => { throw error })
}

function* fetchCats() {
    try {
        const response = yield call(fetchCatsApi);
        yield put({ type: "GET_CATS_SUCCESS", cats: response })
    }
    catch (e) {
        yield put({ type: "GET_CATS_FAILURE", message: e.message })
    }
}

function fetchCatsCategoriesApi() {
    return Api.get("/categories").then(res => res.data)
        .catch((error) => { throw error })
}

function* fetchCatsCategories() {
    try {
        const response = yield call(fetchCatsCategoriesApi);
        yield put({ type: "GET_CATS_CATEGORIES_SUCCESS", catsCategories: response })
    }
    catch (e) {
        yield put({ type: "GET_CATS_CATEGORIES_FAILURE", message: e.message })
    }
}

export default function* watchSagas() {
    yield all([
        takeEvery("GET_CATS_REQUEST", fetchCats),
        takeEvery("GET_CATS_CATEGORIES_REQUEST", fetchCatsCategories),
    ]);
}
