const express = require("express");
const app = express();

// middleware for accepting json data
app.use(express.json());

let users = [];

// post means create
app.post("/create", (req, res) => {
  let body = req.body;
  users.push(body);
  res.send("user saved successfully!!");
});

//get means read
app.get("/", (req, res) => {
  res.send(users);
});

//delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  let userdata = users.filter((val) => val.id !== id);
  users = userdata;
  res.send(userdata);
});

//U for updata
app.put("/update/:id", (req, res) => {
  
  let { id } = req.params;
  let {name} = req.body;
  let updatedUser = users.map((val) =>
    val.id === id ? { ...val,name } : val,
  );
  res.send(updatedUser)
});

app.listen(3000, () => {
  console.log("server is running on port number 3000");
});
