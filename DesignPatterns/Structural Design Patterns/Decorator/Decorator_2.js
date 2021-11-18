class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAws = true;
  server.awsInfo = function () {
    return server.url;
  };

  return server;
}

function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}
   
const s1 = aws(new Server("12.34.56.78", "3000"));
const s2 = azure(new Server("77.22.44.55", "3001"));
