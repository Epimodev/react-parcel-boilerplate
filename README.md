# React app boilerplate

This project is a boilerplate to start react project with TypeScript.

### Installation

```sh
$ git clone git@github.com:Epimodev/react-parcel-boilerplate.git myProjectName # clone project

$ cd myProjectName
$ rm -rf .git # remove git folder
$ git init # init git for the project
$ yarn # install dependencies
```

### Available scripts

#### Start dev server
```sh
$ yarn start # will create dev server on port 1234
```

#### Check TypeScript types
```sh
$ yarn check-types --watch # --watch is optional
```

#### Run tests
```sh
$ yarn test
```

#### Create a git commit
```sh
# this command will format code with prettier and made tslint check
# then you'll have a commitizen prompt to generate the commit message
$ yarn commit
```

#### Build project for production
```sh
$ yarn build
```
