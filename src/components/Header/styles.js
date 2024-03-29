import { DRAWER_WIDTH } from "../../constants";

export default theme => ({
  appBar: {
    marginLeft: DRAWER_WIDTH,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    }
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center"
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    overflowX: "hidden"
  },
  drawerTitle: {
    color: theme.palette.text.secondary,
    paddingLeft: theme.spacing.unit,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecorationLine: "none",
      cursor: "pointer"
    }
  },

  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  toolbarIe11: {
    display: "flex"
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  }
});
