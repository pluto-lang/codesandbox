const fs = require("fs");
const path = require("path");

const inputs = process.argv[2];
console.log("inputs: ", inputs);

const packages = JSON.parse(inputs);
console.log("packages: ", packages);

const tsPkgJsonPath = path.join(__dirname, "../typescript/package.json");
const pyPkgJsonPath = path.join(__dirname, "../python/package.json");

const tsPkgJson = require(tsPkgJsonPath);
const pyPkgJson = require(pyPkgJsonPath);

for (const package of packages) {
  const pkgName = package.name;
  const pkgVersion = package.version;
  if (tsPkgJson.dependencies[pkgName]) {
    tsPkgJson.dependencies[pkgName] = pkgVersion;
  }
  if (tsPkgJson.devDependencies[pkgName]) {
    tsPkgJson.devDependencies[pkgName] = pkgVersion;
  }
  if (pyPkgJson.dependencies[pkgName]) {
    pyPkgJson.dependencies[pkgName] = pkgVersion;
  }
  if (pyPkgJson.devDependencies[pkgName]) {
    pyPkgJson.devDependencies[pkgName] = pkgVersion;
  }
}

fs.writeFileSync(tsPkgJsonPath, JSON.stringify(tsPkgJson, null, 2) + "\n");
fs.writeFileSync(pyPkgJsonPath, JSON.stringify(pyPkgJson, null, 2) + "\n");
