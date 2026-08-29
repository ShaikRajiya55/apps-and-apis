// Sliding Window Rate Limiter Engine v2.0
class RateLimiter {
  constructor(limit = 100, windowMs = 60000) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.hits = new Map();
  }

  isAllowed(clientIp) {
    const now = Date.now();
    const timestamps = this.hits.get(clientIp) || [];
    const validTimestamps = timestamps.filter(t => now - t < this.windowMs);
    
    if (validTimestamps.length >= this.limit) {
      return false;
    }
    
    validTimestamps.push(now);
    this.hits.set(clientIp, validTimestamps);
    return true;
  }
}
module.exports = { RateLimiter };