function priorityFromSeverity(severity) {
  if (severity >= 8) return "CRITICAL";
  if (severity >= 5) return "HIGH";
  if (severity >= 3) return "MEDIUM";
  return "LOW";
}

module.exports = { priorityFromSeverity };
