const SidekickDebugger = require("@runsidekick/sidekick-agent-nodejs");

const myRandomId = "rnd" + Math.random();
console.log("Random ID:", myRandomId);
setInterval(() => {
  console.log("Random ID:", myRandomId);
}, 60 * 1000);

SidekickDebugger.start({
  apiKey: "aaaa-bbbb-cccc-dddd",
  //  logLevel: "debug",
  brokerHost: "ws://localhost",
  brokerPort: 7777,
  applicationName: "sidekick-broker-app",
  applicationStage: "dev",
  applicationVersion: "1.0.0",
  applicationTag: {
    namespace: "ns",
    random: myRandomId,
  },
})
  .then((manager) => {})
  .catch((e) => {
    console.error("Sidekick init fail...", e);
  })
  .finally(() => {
    const express = require("express");
    const app = express();
    const port = 3131 + Math.round(Math.random() * 10);

    app.get("/", (req, res) => {
      res.send("Hello World!" + req.query.x);
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  });

/////////////////////////////////////////////////////////
