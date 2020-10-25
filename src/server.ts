import express from "express";
import bodyParser from "body-parser";

//Initiate express with body parser
let app = express();
app.use(bodyParser.json());

// Define some routes
const router = express.Router();
router.get(`/greetings`, function(req, res){
  res.status(200).send({name:`otpi`, message: `How are you!`});
});

// make express use the routes
app.use('/api', router);

// handle defaults
app.get(`*`, (req, res) => {
  res.status(404).send({result: "NOT FOUND"});
})

const port = process.env.port || 3000;

// listen on port
app.listen(port, () => {
  console.log(`Listening on Post: ${port}`)
})
