const express = require("express");
const mongoose = require("./dbconfig");
const config = require("config");

const app = express();
app.use(express.json({ extended: false }));

if (!config.get("jwtPrivateKey")) {
  console.error("Fatal error");
  process.exit(1);
}

//Server
app.get("/", (req, res) => {
  res.send("Hellow from server");
});
app.listen(8081, "127.0.0.1", () => {
  console.log("Listening at port 8081");
});

//Routes for Profile
app.use("/profile", require("../Routes/profilePost"));
app.use("/profileget", require("../Routes/profileGet"));
app.use("/profiledel", require("../Routes/profileDel"));
app.use("/profileupdate", require("../Routes/profileUpdate"));

//Authentication
app.use("/auth", require("../Routes/auth"));

//Routes For Vendors
app.use("/newvendor", require("../Routes/vendorpost"));
app.use("/vendorget", require("../Routes/vendorGet"));
app.use("/vendorupdate", require("../Routes/vendorUpdate"));
app.use("/vendordel", require("../Routes/vendorDel"));

//Route for Catagories
app.use("/newcat", require("../Routes/catPost"));
app.use("/catget", require("../Routes/catGet"));
app.use("/catupdate", require("../Routes/catUpdate"));
app.use("/catdel", require("../Routes/catDel"));

//Routes for Brands
app.use("/newbrand", require("../Routes/brandPost"));
app.use("/brandget", require("../Routes/brandGet"));
app.use("/brandupdate", require("../Routes/brandUpdate"));
app.use("/branddel", require("../Routes/brandDel"));

//Routes for Purchese
app.use("/newpurchese", require("../Routes/purchesePost"));
app.use("/purcheseget", require("../Routes/purcheseGet"));
app.use("/purcheseupdate", require("../Routes/purcheseUpdate"));
app.use("/purchesedel", require("../Routes/purcheseDel"));

module.exports = app;
