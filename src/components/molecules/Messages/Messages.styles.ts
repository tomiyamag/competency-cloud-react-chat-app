import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>
  createStyles({
    avatarWrapper: {},
    textWrapper: {
      width: "100%",
      backgroundColor: theme.palette.grey[200],
      borderRadius: 4,
      padding: 16,
    },
    textName: {
      color: theme.palette.grey[600],
    },
    textBody: {
      color: theme.palette.text["primary"],
    },
    date: {
      display: "flex",
      alignItems: "center",
      height: 30,
      marginBottom: 8,
    },
  })
);
