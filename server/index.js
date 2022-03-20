const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/v1/restaurants", require("./routes/restaurants"));

app.listen(process.env.PORT, () => {
	console.log("Listening on port 3005");
});
