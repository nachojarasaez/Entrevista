"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Transaction",
    embedded: false
  },
  {
    name: "Payment",
    embedded: false
  },
  {
    name: "Waiter",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://transactions-b00eac2ea2.herokuapp.com/toteat`
});
exports.prisma = new exports.Prisma();
