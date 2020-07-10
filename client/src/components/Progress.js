import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  progressCard: {
    margin: theme.spacing(1),
  },
}));

const Progress = () => {
  const classes = useStyles();
  const [weekNumber, setWeekNumber] = useState("week1");
  const [student, setStudent] = useState("");
  const [studentObj, setStudentObj] = useState({});
  const { currentCohortStudents } = useContext(AppContext);

  const handleChange = (event) => {
    setStudent(event.target.value);
    setStudentObj(
      currentCohortStudents.find((student) => student.id === event.target.value)
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(studentObj);
    console.log(event.target.elements.weekNumber.value);
    console.log(event.target.elements.progress.value);
    console.log({
      ...studentObj,
      [weekNumber]: event.target.elements.progress.value,
    });
    // const response = await axios.put(
    //   `${process.env.REACT_APP_SERVER_URL}/api/overall`
    // );
  };

  const handleWeekNumber = (event) => {
    setWeekNumber(event.target.value);
  };

  return (
    <Grid container alignItems="flex-start">
      <Grid item xs={6}>
        <form onSubmit={handleSubmit}>
          <FormControl
            className={classes.formControl}
            required
            variant="filled"
          >
            <InputLabel id="cohort-student-dd">Student</InputLabel>
            <Select
              labelId="cohort-student-dd"
              name="student"
              onChange={handleChange}
              value={student}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {currentCohortStudents &&
                currentCohortStudents.map((student) => (
                  <MenuItem key={student.id} value={student.id}>
                    {student.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl} variant="filled">
            <Select
              name="weekNumber"
              onChange={handleWeekNumber}
              value={weekNumber}
            >
              <MenuItem value="week1">Week 1</MenuItem>
              <MenuItem value="week2">Week 2</MenuItem>
              <MenuItem value="week3">Week 3</MenuItem>
              <MenuItem value="week4">Week 4</MenuItem>
              <MenuItem value="week5">Week 5</MenuItem>
              <MenuItem value="week6">Week 6</MenuItem>
              <MenuItem value="week7">Week 7</MenuItem>
              <MenuItem value="week8">Week 8</MenuItem>
              <MenuItem value="week9">Week 9</MenuItem>
              <MenuItem value="week10">Week 10</MenuItem>
            </Select>
          </FormControl>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={`${weekNumber} Progress`}
              multiline
              name="progress"
              required
              rows={4}
              variant="filled"
              defaultValue={student && studentObj[weekNumber]}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add to Progress Report
          </Button>
        </form>
      </Grid>
      <Grid item xs={6}>
        {student &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((weekNumber) => (
            <Card className={classes.progressCard} key={`week${weekNumber}`}>
              <CardContent>
                <Typography
                  variant="overline"
                  color="textSecondary"
                  gutterBottom
                >
                  Week {weekNumber}
                </Typography>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                  component="p"
                  variant="body2"
                >
                  {studentObj[`week${weekNumber}`]}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Grid>
    </Grid>
  );
};

export default Progress;
