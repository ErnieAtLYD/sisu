import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import Grid from "@material-ui/core/Grid";

import TrelloColumn from "./TrelloColumn";

const Trello = () => {
  const { currentCohortStudents } = useContext(AppContext);

  const obj = [
    { key: "struggling", label: "Struggling" },
    { key: "belowpar", label: "Below Par" },
    { key: "par", label: "Par" },
    { key: "abovepar", label: "Above Par" },
    { key: "excelling", label: "Excelling" },
  ];

  return (
    <Grid container spacing={2}>
      {obj.map((column) => (
        <TrelloColumn
          {...column}
          students={currentCohortStudents.filter((student) => {
            return student.overall === column.key;
          })}
        />
      ))}
    </Grid>
  );
};

export default Trello;
