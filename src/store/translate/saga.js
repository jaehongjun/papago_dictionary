import { call, takeEvery, put } from "redux-saga/effects";
import {
  TRANSLATE,
  TRANSLATE_REQUESTED,
  TRANSLATE_SUCCEEDED,
  TRANSLATE_FAILED
} from "./action";
import api from "../../api";

function* translate(action) {
  try {
    console.log("payload : ", action.payload);

    yield put({
      type: TRANSLATE_REQUESTED
    });
    const payload = yield call(api.transfer, action.payload);
    yield put({
      type: TRANSLATE_SUCCEEDED,
      payload
    });
  } catch (error) {
    yield put({
      type: TRANSLATE_FAILED,
      payload
    });
  }
}

export function* translateAll() {
  yield takeEvery(TRANSLATE, translate);
}
