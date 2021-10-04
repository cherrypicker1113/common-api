import './env';
import app from "./app";
import {createServer} from "http";

const port: number = Number(process.env.PORT) || 3000;

const server = createServer(app);

server.listen(port, () => {
  console.log(`Server started. http://localhost:${port}`);
});

export default server;