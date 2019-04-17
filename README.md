# GraphQL Documentation

> Scaffolding tool for GraphQL Documentation

## Installation

You can install the package from npm.

> Coming Soon

## Usage

```bash
git clone --dissociate https://github.com/zoelner/graphqldocs.git <your_doc_name>

# go folder

cd <your_doc_name>

# install dependencies
npm install

# start development version
npm run start
```

# How to use

To generate automatic documentation you need to change the variable of `REACT_APP_URL_GRAPHQL` environment for service GraphQL you want to document.

Environment variables are in the `.env` file

## How to Modify Main page

Insert markdown document with name `Main.md` inside the `src/pages/docs/` folder

## Describe features

To enter descriptions for queries and mutations, you must create a Markdown file in the `src/pages/docs/` folder with the same query name or mutation.

Example:

```js
Mutation
    * createUser (input: CreateUserInput!)
```

file: `src/pages/docs/createUser.md`

# How to deploy

To generate the static files you must run `npm run build`
