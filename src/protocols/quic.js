// QUIC Transport Protocol Engine v2.0
class QUICTransport {
  constructor() {
    this.activeStreams = new Map();
  }

  openStream(streamId) {
    this.activeStreams.set(streamId, { bytesTransferred: 0, state: 'OPEN' });
    return true;
  }

  sendData(streamId, chunk) {
    const stream = this.activeStreams.get(streamId);
    if (stream && stream.state === 'OPEN') {
      stream.bytesTransferred += chunk.length;
      return true;
    }
    return false;
  }
}
module.exports = { QUICTransport };