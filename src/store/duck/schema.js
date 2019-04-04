import { data } from "../../__mock__/instrospection";
import { buildClientSchema } from "graphql";

const INITIAL_STATE = buildClientSchema(data);

export default function schema(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
