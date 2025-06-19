
import express from "express";
import { Request, Response } from "express";
import { appDataSource } from "./datasource";
import actorRouter from "./routes/actorRoutes";


const app = express();

//define route paths
app.use(express.json());



app.use("/actors",actorRouter);

//allow application to listen on a port
const PORT = process.env.PORT || 3001;

//eshtablish data base connection
appDataSource.initialize().then(()=>{
    console.log("Data source has been intialized")
}).catch((err)=>{
    console.log("Error during data source intialization")
    console.log(err)
})

app.listen(PORT, () => {
  console.log(`Application is listening on ${PORT}`);
});

//route to check express applicaation
app.get("/health", async (req: Request, res: Response) => {
  res.send("I AM HEALTHY :)");
});
