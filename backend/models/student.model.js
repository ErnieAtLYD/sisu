const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cohortId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cohort",
      required: true,
    },
    comments: [
      {
        posted: Date,
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        body: String,
      },
    ],
    status: {
      type: String,
      enum: ["ACTIVE", "COMPLETED", "INCOMPLETE"],
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
