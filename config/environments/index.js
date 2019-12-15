require("dotenv").config();

const PORDUCTION = require("./production");
const DEVELOPMENT = require("./development");
const QA = require("./qa");
const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if(NODE_ENV === "production"){
    currentEnv = PORDUCTION;
} else if(NODE_ENV === "qa"){
    currentEnv == QA;
}

module.exports = currentEnv;