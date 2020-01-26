import { all } from "redux-saga/effects";
import { translateAll } from "./translate/saga";

export default function* rootSaga() {
  yield all([translateAll()]);
}
