import React from "react";

interface NewLineToBreakProps {
  text?: string;
}

const NewLineToBreak: React.FC<NewLineToBreakProps> = ({ text }) => {
  return (
    <>
      {text &&
        text.split("\n").map(string => {
          return (
            <React.Fragment key={Math.random()}>
              {string}
              <br />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default NewLineToBreak;
