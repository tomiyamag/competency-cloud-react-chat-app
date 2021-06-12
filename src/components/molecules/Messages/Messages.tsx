import React from "react";
import { Box, Avatar, Typography } from "@material-ui/core";
import NewLineToBreak from "../../atoms/NewLineToBreak/NewLineToBreak";
import { useStyles } from "./Messages.styles";
import { formatRelative } from "date-fns";

interface MessagesProps {
  messages: any;
  user: any;
}

const Messages: React.FC<MessagesProps> = ({ messages, user }) => {
  const classes = useStyles();

  return (
    <>
      {messages.map((message: any) => {
        return (
          <React.Fragment key={message.id}>
            <Box
              display="flex"
              flexDirection={
                user.uid === message.uid ? "row-reverse" : "flex-row"
              }
            >
              <div className={classes.avatarWrapper}>
                <Avatar
                  src={message.photoURL || ""}
                  alt={message.displayName}
                  title={message.displayName}
                />
              </div>

              <div
                className={classes.textWrapper}
                style={{
                  marginLeft: user.uid === message.uid ? 0 : 16,
                  marginRight: user.uid === message.uid ? 16 : 0,
                }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.textName}
                >
                  @{message.displayName}
                </Typography>
                <Typography variant="body1" className={classes.textBody}>
                  <NewLineToBreak text={message.text} />
                </Typography>
              </div>
            </Box>

            <Typography
              variant="caption"
              color="textSecondary"
              className={classes.date}
              style={{
                justifyContent:
                  user.uid === message.uid ? "flex-end" : "flex-start",
                margin: user.uid === message.uid ? 0 : "0 0 0 auto",
              }}
            >
              {message.createdAt?.seconds ? (
                <>
                  {formatRelative(
                    new Date(message.createdAt.seconds * 1000),
                    new Date()
                  )}
                </>
              ) : (
                ""
              )}
            </Typography>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Messages;
