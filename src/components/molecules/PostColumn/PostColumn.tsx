import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { useStyles } from "./PostColumn.styles";

interface PostColumnProps {
  onSubmit: any;
  onChange: any;
  value: string;
}

const PostColumn: React.FC<PostColumnProps> = ({
  onSubmit,
  onChange,
  value,
}) => {
  const classes = useStyles();

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <Box mb={2}>
          <TextField
            multiline
            rows={3}
            variant="outlined"
            value={value}
            onChange={onChange}
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
              if (event.key === "Enter" && event.shiftKey) {
                onSubmit(event);
                event.preventDefault();
              }
            }}
            fullWidth
            placeholder="メッセージを入力 (Shift + Enter でも書き込めます)"
          />
        </Box>

        <Button
          className={classes.postButton}
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
          disabled={!value}
        >
          書き込む
        </Button>
      </form>
    </div>
  );
};

export default PostColumn;
