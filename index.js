const express = require("express")
const cors = require("cors");
const { runFunction } = require("./routes/testcase.routes");

const nodeApp = express();
nodeApp.use(cors());
nodeApp.use(express.json());

nodeApp.listen(3005, () => {
	console.log('=== Server is up on port: 3005 ===');
    runFunction();
})