import { buildClientSchema } from "graphql";
import { data } from "../../__mock__/github_instrospection.json";
export const Types = {
  SCHEMA_REQUEST: "@schema/SCHEMA_REQUEST",
  SCHEMA_REQUEST_FAILED: "@schema/SCHEMA_REQUEST_FAILED",
  SCHEMA_REQUEST_SUCCESS: "@schema/SCHEMA_REQUEST_SUCCESS"
};

export const Creators = {
  schemaRequest: () => ({
    type: Types.SCHEMA_REQUEST
  }),
  schemaRequestFailed: () => ({}),
  schemaRequestSuccess: payload => ({
    type: Types.SCHEMA_REQUEST_SUCCESS,
    payload
  })
};

const INITIAL_STATE = {
  isLoading: true,
  error: false,
  data: buildClientSchema(data)
};

export default function schema(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SCHEMA_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case Types.SCHEMA_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: false
      });
    case Types.SCHEMA_REQUEST_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        error: true
      });

    default:
      return state;
  }
}
