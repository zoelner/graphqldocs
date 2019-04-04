import { combineReducers } from "redux";

import schema from "./schema";
import navigation from "./navigation";

export const reducers = combineReducers({
  schema,
  navigation
});
