import { INITIAL_STATE as schema } from "./schema";

export const Types = {
  NAVIGATION_SET_FIRST: "@navigation/SET_FIRST",
  NAVIGATION_SET: "@navigation/SET",
  NAVIGATION_REMOVE: "@navigation/REMOVE"
};

export const Creators = {
  navigationSetFirst: (root, field) => ({
    type: Types.NAVIGATION_SET_FIRST,
    payload: [
      { name: root.name, def: root },
      {
        name: field.name,
        def: field
      }
    ]
  }),
  navigationSet: props => ({
    type: Types.NAVIGATION_SET,
    payload: {
      name: props.name,
      def: props
    }
  }),
  navigationRemove: payload => ({ type: Types.NAVIGATION_REMOVE, payload })
};

const query = schema.getQueryType();
const INITIAL_STATE = [
  {
    name: query.name,
    def: query
  }
];

export default function navigation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.NAVIGATION_SET_FIRST:
      return action.payload;
    case Types.NAVIGATION_SET:
      return [...state, action.payload];
    case Types.NAVIGATION_REMOVE:
      return state.slice(0, action.payload + 1);
    default:
      return state;
  }
}
