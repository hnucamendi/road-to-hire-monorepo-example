# Road to Hire Monorepo

## COMMANDS

- `npx lerna bootstrap`
- `npx lerna build`
- `npx lerna run test --no-sort`

### BOOTSTRAPPING

Lerveraging Lerna we can 'bootstrap' all of the projects within the monorepo, essentially automating the process of going into each package and running `npm i` from the root

To bootstrap we want to run `npx lerna bootsrap` Lerna will take care of managing all the packages, and versioning in the monorepo

### BUILDING & RUNNING TESTS

We can also use Lerna to build or run tests in each the packages within the repo. and like the bootstap command Lerna will run through and build or run tests where applicable.

Build command: `npx lerna build`
testing command: `npx lerna run test --no-sort`
Note: to run test Lerna will look for test witin the package.json file and essentially run `npm run test`. meaning that if there is no test set up in the package Lerna will not run a test in that package
