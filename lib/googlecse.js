"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const querystring_1 = __importDefault(require("querystring"));
async function search({ query, googleCseId, start, googleApiKey }) {
    return (await (0, cross_fetch_1.default)("https://www.googleapis.com/customsearch/v1?" + querystring_1.default.stringify({ q: query, num: 10, start, cx: googleCseId, key: googleApiKey }), {
        method: "GET"
    })).json();
}
exports.search = search;
//# sourceMappingURL=googlecse.js.map