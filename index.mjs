import { get } from "https";
import { readFileSync, writeFileSync } from "fs";

const readJson = (f) => JSON.parse(readFileSync(f));
const writeJson = (f, d) => writeFileSync(f, JSON.stringify(d, null, 2));
const pkg = "package.json";

get("https://registry.npmjs.org/nacdn", (res) => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", (data) => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    const info = readJson(pkg);
    info.version = body["dist-tags"].latest;
    writeJson(pkg, info);
  });
});