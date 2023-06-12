import "reflect-metadata";
import { app } from "./routes";

const port  = 3000;
app.listen(port, function(){
  console.log(`Express server listening on port ${port} 🚀 🚀`);
});