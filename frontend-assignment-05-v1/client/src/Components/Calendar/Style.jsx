import { makeStyles } from "@material-ui/core/styles";
//@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');

export const useStyles = makeStyles((theme) => ({
  root: {
    //display: 'flex',
    //flexWrap: 'wrap',
    //justifyContent: 'space-around',
    overflow: "hidden"
    //font-family: 'Roboto', sans-serif;
  },
  calendarCtr: {
    backgroundColor: "#11cdef",
    height: "10rem"
  },
  calendar: {
    //display: 'flex',
    flexWrap: "nowrap",
    justifyContent: "",
    //backgroundColor: 'none',
    width: "90vw",
    margin: "auto",
    marginTop: "-4rem",
    backgroundColor: "#FFF",
    paddingTop: "4rem",
    borderRadius: ".5rem",
    color: "#8898aa"
  },
  ctrButton: {
    margin: ".2rem",
    color: "#8898aa",
    backgroundColor: "#FFF",
    padding: ".2rem",
    borderRadius: ".5rem"
  },
  gridList: {
    //width: 500,
    //height: 450,
  }
}));
