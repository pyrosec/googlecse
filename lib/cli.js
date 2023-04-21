"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCLI = exports.runSearch = void 0;
const yargs_1 = __importDefault(require("yargs"));
require("setimmediate");
const logger_1 = require("./logger");
const googlecse_1 = require("./googlecse");
const logger = (0, logger_1.getLogger)();
async function runSearch(query, start) {
    const result = await (0, googlecse_1.search)({
        googleCseId: process.env.GOOGLE_CSE_ID,
        googleApiKey: process.env.GOOGLE_API_KEY,
        query,
        start
    });
    logger.info(result);
}
exports.runSearch = runSearch;
async function runCLI() {
    const [query] = yargs_1.default.argv._;
    const start = yargs_1.default.argv.start ? Number(yargs_1.default.argv.start) : 0;
    await runSearch(query, start);
}
exports.runCLI = runCLI;
//# sourceMappingURL=cli.js.map