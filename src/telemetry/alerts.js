// Telemetry Alerting & Anomaly Engine v2.0
class AlertEngine {
  constructor(thresholdMs = 500) {
    this.thresholdMs = thresholdMs;
    this.alertsTriggered = 0;
  }

  evaluateLatency(service, latency) {
    if (latency > this.thresholdMs) {
      this.alertsTriggered++;
      console.warn(`[ALERT] High latency detected on ${service}: ${latency}ms`);
      return { status: 'WARNING', latency };
    }
    return { status: 'NORMAL', latency };
  }
}
module.exports = { AlertEngine };