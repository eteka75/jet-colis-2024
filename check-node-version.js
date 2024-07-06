const semver = require('semver');
const { engines } = require('./package.json');
const version = process.version;

if (!semver.satisfies(version, engines.node)) {
  console.error(
    `Node.js version ${version} is not supported. Please use a version that satisfies ${engines.node}.`
  );
  process.exit(1);
}
