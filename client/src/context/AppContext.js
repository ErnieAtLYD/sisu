import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentCohortStudents, setCurrentCohortStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/students?cohort=37`
        );
        let students = data.students.sort((a, b) =>
          a.first_name > b.first_name ? 1 : -1
        );
        console.log("gets here");
        setCurrentCohortStudents(students);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ currentCohortStudents }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
