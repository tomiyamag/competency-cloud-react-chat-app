import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    postButton: {
      display: "flex",
      marginRight: 0,
      marginLeft: "auto",
    },
  })
);
