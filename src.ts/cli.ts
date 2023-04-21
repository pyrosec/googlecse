import yargs from "yargs";
import { camelCase } from "change-case";
import fs from "fs-extra";
import util from "util";
import "setimmediate";
import path from "path";
import { getLogger } from "./logger";
import { search } from "./googlecse";

const logger = getLogger();

export async function runSearch(query: string, start: number) {
  const result = await search({
    googleCseId: process.env.GOOGLE_CSE_ID,
    googleApiKey: process.env.GOOGLE_API_KEY,
    query,
    start
  });
  logger.info(result);
}
  

export async function runCLI() {
  const [query] = yargs.argv._;
  const start = yargs.argv.start ? Number(yargs.argv.start) : 0;
  await runSearch(query, start);
}
