import express, { Request, Response } from "express";
import calculatorRoutes from "./routes/calculator-routes";
import cors from "cors";
import serverless from "serverless-http";

const application = express();
application.use(express.json());

const allowedOrigins = ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const PORT = 1337;
application.use(cors(corsOptions));

application.use("/calculate", calculatorRoutes);

// application.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

module.exports.handler = serverless(application);
