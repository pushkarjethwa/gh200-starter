const test = require("node:test");
const assert = require("node:assert/strict");
const { priorityFromSeverity } = require("../src/ticket-priority");

test("severity 9 is CRITICAL", () => {
  assert.equal(priorityFromSeverity(9), "CRITICAL");
});

test("severity 6 is HIGH", () => {
  assert.equal(priorityFromSeverity(6), "HIGH");
});

test("severity 4 is MEDIUM", () => {
  assert.equal(priorityFromSeverity(4), "MEDIUM");
});

test("severity 2 is LOW", () => {
  assert.equal(priorityFromSeverity(2), "LOW");
});
