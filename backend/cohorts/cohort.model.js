// backend/cohort/cohort.model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cohortSchema = new Schema({
  programCode: {
    type: String,
    required: true,
    enum: ["C", "UXUI", "PT"],
  },
  shortName: {
    type: String,
    required: true,
  },
  startDate: Date,
  endDate: Date,
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const Cohort = mongoose.model("Cohort", cohortSchema);
module.exports = Cohort;
