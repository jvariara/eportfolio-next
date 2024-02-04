"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.router = void 0;
var server_1 = require("@trpc/server");
// serve the purpose of giving router that lets us define api endpoints on backend
var t = server_1.initTRPC.context().create();
exports.router = t.router;
// so anyone can call these endpoints
exports.publicProcedure = t.procedure;
