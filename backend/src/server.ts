import express, { Request, Response } from "express";
import calculatorRoutes from "./routes/calculator-routes";
import cors from "cors";
import serverless from "serverless-http";

const application = express();
application.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://swzhydlta.github.io",
  "https://web.postman.co",
];

const corsOptions = {
  origin: function (origin, callback) {
    const normalizedOrigin = origin.endsWith("/")
      ? origin.slice(0, -1)
      : origin;
    if (allowedOrigins.includes(normalizedOrigin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const PORT = 1337;
application.use(cors(corsOptions));

application.use("/calculate", calculatorRoutes);
application.get("/hello", (req, res) => {
  res.status(200).send("hello");
});

application.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// module.exports.handler = serverless(application);
