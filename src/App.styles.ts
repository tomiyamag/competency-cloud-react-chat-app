import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    loader: {
      display: "block",
      marginRight: "auto",
      marginLeft: "auto",
    },
    button: {
      display: "block",
      marginRight: "auto",
      marginLeft: "auto",
    },
  })
);
