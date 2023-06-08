import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

// routes
import bankAuthRoute from "./routes/bank/authRoutes.js";
import bankDashboardRoute from "./routes/bank/dashboardRoutes.js";
import notFoundMiddleware from "./middlewares/not-found.js";
// import db from "./db.js";
// import { collection, addDoc } from "firebase/firestore";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/bank/auth", bankAuthRoute);
app.use("/api/bank/dashboard", bankDashboardRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFoundMiddleware);

// app.get("/db", async (req, res) => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     });
//     res.send(`Document written with ID: ${docRef.id}`);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Bank listening at http://localhost:${process.env.PORT}`);
});
