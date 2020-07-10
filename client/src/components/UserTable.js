import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

const useStyles = makeStyles((theme) => ({
  table: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(3),
    minWidth: 850,
  },
}));

const UserTable = () => {
  const [data, setData] = useState([]);
  const { currentCohortStudents } = useContext(AppContext);

  const classes = useStyles();

  return (
    <div className={classes.table}>
      <MaterialTable
        columns={[
          { title: "Name", field: "name" },
          { title: "Preferred Email", field: "preferred_email" },
          { title: "Google Email", field: "google_email" },
          { title: "GitHub Username", field: "github" },
        ]}
        data={currentCohortStudents}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                /* setData([...data, newData]); */

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
        title="C37 Roster"
        options={{ actionsColumnIndex: -1 }}
      />
    </div>
  );
};

export default UserTable;
