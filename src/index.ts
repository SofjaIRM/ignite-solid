import express from "express";
import swaggerUid from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUid.serve, swaggerUid.setup(swaggerFile));

app.use("/users", usersRoutes);

export { app };
