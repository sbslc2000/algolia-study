const algoliasearch = require('algoliasearch');
const {APPLICATION_ID, WRITE_API_KEY} = require("./key");

const client = algoliasearch(APPLICATION_ID, WRITE_API_KEY);
const index = client.initIndex("example-index");

module.exports = { client, index };