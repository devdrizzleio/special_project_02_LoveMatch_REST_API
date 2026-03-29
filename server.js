import express from "express";
import cors from "cors";
import morgan from "morgan";

import { loadEnvVariables } from "./src/config/env.config.js";
import { connectDatabase } from "./src/config/db.config.js";

import userRoutes from "./src/routes/user.routes.js";
import profileRoutes from "./src/routes/profile.routes.js";
import discoveryRoutes from "./src/routes/discovery.routes.js";
import swipeRoutes from "./src/routes/swipe.routes.js";
import matchRoutes from "./src/routes/match.routes.js";
import messageRoutes from "./src/routes/message.routes.js";

import { swaggerDocs } from "./docs/swagger.js";
import { errorHandler } from "./src/middlewares/error.middleware.js";

loadEnvVariables();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${process.env.APP_NAME} API is healthy & lively`
  });
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/profiles", profileRoutes);
app.use("/api/v1/discovery", discoveryRoutes);
app.use("/api/v1/swipes", swipeRoutes);
app.use("/api/v1/matches", matchRoutes);
app.use("/api/v1/messages", messageRoutes);

swaggerDocs(app);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Swagger available at /api-docs`);
    });
  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
};

startServer();