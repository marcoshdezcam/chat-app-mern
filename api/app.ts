import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

app.get("/data", (req: Request, res: Response) => {
  res.status(200).json({ data: "success" });
});

// To avoid the server starting when running tests
// Jest by default sets NODE_ENV to 'test'
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
