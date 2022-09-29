import OpaCompileResponseParser from "opa-compile-response-parser";

const parser = new OpaCompileResponseParser();
parser.parse({});

const result = parser.evaluate();
console.log(parser.evaluateAsHumanReadableString());
