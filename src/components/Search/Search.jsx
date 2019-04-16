import React from "react";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <TextField
        InputProps={{
          inputRef: node => {
            ref(node);
            inputRef(node);
          },
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          }
        }}
        {...other}
      />
    </div>
  );
}

function isMatch(sourceText, searchValue) {
  try {
    const escaped = searchValue.replace(/[^_0-9A-Za-z]/g, ch => "\\" + ch);
    return sourceText.search(new RegExp(escaped)) !== -1;
  } catch (e) {
    return sourceText.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  }
}

const styles = theme => ({
  root: {},
  container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    maxHeight: 250,
    overflowY: "auto"
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing.unit * 2
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

class Search extends React.Component {
  state = {
    single: "",
    suggestions: []
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = (event, { newValue, method }) => {
    this.setState({
      single: newValue
    });
  };

  getSuggestionValue = suggestion => {
    if (Array.isArray(suggestion)) {
      return suggestion[1];
    }
    return suggestion;
  };

  getSuggestions = value => {
    const inputValue = deburr(value.trim());
    const inputLength = inputValue.length;
    const withinType = this.props.navigation[this.props.navigation.length - 1];

    const typeMap = this.props.schema.getTypeMap();
    let typeNames = Object.keys(typeMap);

    const matchedWithin = [];
    const matchedTypes = [];
    let matchedFields = [];

    if (inputLength === 0) return [];
    for (const typeName of typeNames) {
      if (
        matchedWithin.length + matchedTypes.length + matchedFields.length >=
        100
      ) {
        break;
      }

      if (withinType) {
        typeNames = typeNames.filter(n => n !== withinType.name);
        typeNames.unshift(withinType.name);
      }

      if (isMatch(typeName, value)) {
        matchedTypes.push(typeName);
      }

      const type = typeMap[typeName];
      if (type.getFields) {
        const fields = type.getFields();
        Object.keys(fields).forEach(fieldName => {
          const field = fields[fieldName];
          let matchingArgs;

          if (!isMatch(fieldName, value)) {
            if (field.args && field.args.length) {
              matchingArgs = field.args.filter(arg => isMatch(arg.name, value));
              if (matchingArgs.length === 0) {
                return;
              }
            } else {
              return;
            }
          }

          const match = [typeName, fieldName];

          if (withinType === type) {
            matchedWithin.push(match);
          } else {
            matchedFields.push(match);
          }
        });
      }
    }
    return [...matchedTypes, ...matchedFields];
  };

  renderSuggestion = (suggestion, { isHighlighted, query }) => {
    let value;
    if (Array.isArray(suggestion)) {
      value = suggestion.join(".");
    } else {
      value = suggestion;
    }

    const matches = match(value, query);
    const parts = parse(value, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) =>
            part.highlight ? (
              <Typography key={String(index)} color="textPrimary" inline>
                {part.text}
              </Typography>
            ) : (
              <Typography key={String(index)} color="textSecondary" inline>
                {part.text}
              </Typography>
            )
          )}
        </div>
      </MenuItem>
    );
  };

  onSuggestionSelected = async (event, { suggestion }) => {
    if (Array.isArray(suggestion)) {
      this.props.navigationSet(
        this.props.schema.getType(suggestion[0]).getFields()[suggestion[1]]
      );
    } else {
      this.props.navigationSet(this.props.schema.getType(suggestion));
    }
  };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      onSuggestionSelected: this.onSuggestionSelected,
      renderSuggestion: this.renderSuggestion
    };

    return (
      <div className={classes.root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: "Search...",
            value: this.state.single,
            onChange: this.handleChange
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Search);
