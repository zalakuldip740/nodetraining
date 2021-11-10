const mongoose = require("mongoose");
var mongoDB = "mongodb://localhost/demodb";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To MongoDB"));
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const employeeSchema = new mongoose.Schema({
  id: Number,
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Assignments: [
    {
      id: Number,
      AssignmentCategory: String,
      AssignmentName: String,
      AssignmentStatus: String,
    },
  ],
});

const EmployeeModel = mongoose.model("Empcollection", employeeSchema);

module.exports = EmployeeModel;
