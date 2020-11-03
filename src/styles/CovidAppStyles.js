import colors from "../constants/colors";


export default {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heading: {
    fontWeight: "500",
    color: (props) =>
      props.isDarkMode ? "rgb(245, 245, 245)" : colors.darkPurple,
    display: "inline-block",
    "& span": {
      fontWeight: "900",
      color: colors.purple,
      marginRight: "1rem",
    },

  },

  content: {
    backgroundColor: (props) => (props.isDarkMode ? colors.darkPurple : "#fff"),
    borderRadius: "2rem",
    marginTop: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  contentArea: {
    display: "flex",
  },

  mapArea: {
    flex: "1",
  },

  chartArea: {
    minWidth: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },

  tinyChartArea: {
    display: "flex",
    flexWrap: "wrap",
    padding: "2rem 2rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "5rem",
  },

  tinyChart: {
    width: "30%",
    margin: "2.5rem",
    "& h3": {
      textTransform: "capitalize",
      fontWeight: 500,

      textAlign: "center",
    }
  },

  tinych: {
    borderRadius: ".5rem",
    marginBottom: ".5rem",
    padding: "1rem",
  },

  loadingIcon: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};
