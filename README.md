# hack-assembler-in-ts

## Description

A Hack assembler written in TypeScript that translates programs written in Hack assembly language into Hack binary code.

## Usage

### Install

```
yarn
```

### Scripts

#### Build

```
yarn build
```

### Run

NOTE: Before running, the TypeScript code needs to be compiled to JavaScript using `yarn build` or `tsc`.

```
node <location of index.js> <location of ASM file>
```

#### Example

```
node lib/index.js test_programs/max/Max.asm  
```

## Testing

Testing is done with Mocha and Chai.

The following run scripts are available for testing:

- `yarn test` runs all the tests.
