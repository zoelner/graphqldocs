import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import styles from "./styles";
import Search from "../../containers/documentation/Search";

const Header = ({
  classes,
  theme,
  query,
  mutation,
  navigationSetFirst,
  title
}) => {
  const [mobileOpen, handleDrawerToggle] = React.useState(false);
  const [queryOpen, queryToggle] = React.useState(false);
  const [mutationOpen, mutationToggle] = React.useState(false);

  const fields = type => {
    if (type.getFields) {
      const fieldMap = type.getFields();
      const fields = Object.keys(fieldMap)
        .sort()
        .map(name => fieldMap[name]);

      return (
        <List component="div" disablePadding>
          {fields
            .filter(field => !field.isDeprecated)
            .map(field => (
              <ListItem
                button
                className={classes.nested}
                key={field.name}
                to="/documentation"
                component={RouterLink}
                onClick={navigationSetFirst.bind(this, type, field)}
              >
                <ListItemText secondary={field.name} />
              </ListItem>
            ))}
        </List>
      );
    }
  };

  const menu = [
    {
      text: "Query",
      onClick: () => queryToggle(!queryOpen),
      variable: queryOpen,
      type: query
    },
    {
      text: "Mutation",
      onClick: () => mutationToggle(!mutationOpen),
      variable: mutationOpen,
      type: mutation
    }
  ];

  const drawer = (
    <div>
      <div className={classes.toolbarIe11}>
        <div className={classes.toolbar}>
          <div className={classes.drawerHeader}>
            <Link
              to="/"
              className={classes.drawerTitle}
              component={RouterLink}
              variant="h6"
              color="inherit"
            >
              GraphQL Docs
            </Link>
          </div>
        </div>
      </div>
      <Divider />
      <List>
        {menu.map(({ text, onClick, variable, type }) => (
          <React.Fragment key={text}>
            <ListItem button onClick={onClick}>
              <ListItemText primary={text} />
              {variable ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={variable} timeout="auto" unmountOnExit>
              {fields(type)}
            </Collapse>
          </React.Fragment>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <CssBaseline />
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => handleDrawerToggle(!mobileOpen)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            {title || "GraphQL Docs"}
          </Typography>
          <div style={{ flex: "1 1 auto" }} />

          <Search />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={() => handleDrawerToggle(!mobileOpen)}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(Header);
