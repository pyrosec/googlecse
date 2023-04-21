import fetch from "cross-fetch";
import qs from "querystring";

export async function search({
  query,
  googleCseId,
  start,
  googleApiKey
}) {
  return (await fetch("https://www.googleapis.com/customsearch/v1?" + qs.stringify({ q: query, num: 10, start, cx: googleCseId, key: googleApiKey }), {
    method: "GET"
  })).json();
}
