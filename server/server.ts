import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors"; // to make reqs from client to server
import { config } from "dotenv";
import { userRoutes } from "./routes/users";

config(); // takes env put them where we want with process.env

const app = fastify();
app.register(cors, { origin: process.env.CLIENT_URL }); // client address
app.register(userRoutes);

app.listen({ port: parseInt(process.env.PORT!) });
