const assert = require("node:assert/strict");

const {
  healthPayload,
  versionPayload
} = require("./server");

// Test health response
assert.deepEqual(
  healthPayload(),
  {
    status: "ok",
    version: "v1"
  }
);

// Test version response
assert.deepEqual(
  versionPayload(),
  {
    version: "v1"
  }
);

console.log("All tests passed.");