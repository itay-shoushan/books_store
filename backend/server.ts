import express from "express";
import cors from "cors";
import config from "./utils/config";
import catchAll from "./middleware/catch-all";
import routeNotFound from "./middleware/route-not-found";
import controller from "./routes/controller";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/", controller);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(config.port, () =>
  console.log("Listening on http://localhost:" + config.port)
);
