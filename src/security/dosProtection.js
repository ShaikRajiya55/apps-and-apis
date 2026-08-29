// Anti-DDoS Mitigation Engine v2.0
class DDoSProtection {
  constructor(maxRequestsPerSec = 50) {
    this.maxRequestsPerSec = maxRequestsPerSec;
    this.blacklist = new Set();
  }

  inspectRequest(ip, rps) {
    if (rps > this.maxRequestsPerSec) {
      this.blacklist.add(ip);
      console.error(`[FIREWALL] Banned malicious IP: ${ip}`);
      return false;
    }
    return !this.blacklist.has(ip);
  }
}
module.exports = { DDoSProtection };