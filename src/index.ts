import express from "express";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

//allow application to listen on a port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Application is listening on ${PORT}`);
});
//route to check express applicaation
app.get("/health", async (req: Request, res: Response) => {
  res.send("I AM HEALTHY :)");
});
