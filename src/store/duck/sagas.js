import { all, put, call, takeLatest } from "redux-saga/effects";
import { Types as Schema } from "./schema";
import api from "../../services/api";

export function* fetchSchema() {
  try {
    const {
      data: { data }
    } = yield call(api);
    yield put({ type: Schema.SCHEMA_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: Schema.SCHEMA_REQUEST_FAILED, error });
  }
}

export function* watchFetchSchema() {
  yield takeLatest(Schema.SCHEMA_REQUEST, fetchSchema);
}

export default function* rootSaga() {
  yield all([watchFetchSchema()]);
}
