import { all } from "redux-saga/effects";
import watchSagas from "./fetchData"

export default function* rootSaga() {
    yield all([
        watchSagas()
    ])
}