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
  navigationRemove: () => ({ type: Types.NAVIGATION_REMOVE })
};

const INITIAL_STATE = [];

export default function schema(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.NAVIGATION_SET_FIRST:
      return action.payload;
    case Types.NAVIGATION_SET:
      return [...state, action.payload];
    case Types.NAVIGATION_REMOVE:
      if (state.length === 2) {
        return [];
      } else {
        return state.slice(0, state.length - 1);
      }
    default:
      return state;
  }
}
