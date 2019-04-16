export const Types = {
  NAVIGATION_SET_FIRST: "@navigation/SET_FIRST",
  NAVIGATION_SET: "@navigation/SET",
  NAVIGATION_REMOVE: "@navigation/REMOVE",
  NAVIGATION_RESET: "@navigation/RESET"
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
  navigationReset: () => ({ type: Types.NAVIGATION_RESET }),
  navigationRemove: payload => ({ type: Types.NAVIGATION_REMOVE, payload })
};

const INITIAL_STATE = [];

export default function navigation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.NAVIGATION_SET_FIRST:
      return action.payload;
    case Types.NAVIGATION_SET:
      return [...state, action.payload];
    case Types.NAVIGATION_REMOVE:
      return state.slice(0, action.payload + 1);
    case Types.NAVIGATION_RESET:
      return [];
    default:
      return state;
  }
}
