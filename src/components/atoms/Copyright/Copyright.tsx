import React from "react";
import { Link, Typography } from "@material-ui/core";

const Copyright: React.FC = () => {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ paddingBottom: 16 }}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Competency Cloud React Chat App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
