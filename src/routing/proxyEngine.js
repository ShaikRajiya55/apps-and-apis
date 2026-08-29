// Service Mesh Proxy & Discovery Engine v2.0
class ServiceMeshProxy {
  constructor() {
    this.nodes = new Map();
  }

  registerNode(serviceName, url) {
    if (!this.nodes.has(serviceName)) {
      this.nodes.set(serviceName, []);
    }
    this.nodes.get(serviceName).push({ url, status: 'HEALTHY', lastPing: Date.now() });
  }

  getHealthyNode(serviceName) {
    const list = this.nodes.get(serviceName) || [];
    const healthy = list.filter(n => n.status === 'HEALTHY');
    if (healthy.length === 0) return null;
    return healthy[Math.floor(Math.random() * healthy.length)];
  }
}
module.exports = { ServiceMeshProxy };