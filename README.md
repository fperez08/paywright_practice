# Table of contents

-   [Introduction](#introduction)
-   [Installation](#installation)
-   [Getting started](#getting-started)
-   [Generate JSdoc documentation](#generate-jsdoc-documentation)

## Introduction

This repo is used to document my journey learning playwright.

## Installation

Open your terminal and at the root folder of the project execute the command:

```
yarn install

```

## Getting started

After the installation is complete run the example test by executing the following command to make sure
that everything is working

```
yarn playwright test --grep @example

```

To run more test using de command line take a look at the Playwright documentation: [Command line
](https://playwright.dev/docs/test-cli)

## Generate JSdoc documentation

To get JSdoc of the project run the following command:

```
yarn run jsdoc

```

Look for docs folder at the root folder of the project and open the index.html fine with your browser.
