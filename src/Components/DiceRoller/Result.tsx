import { Typography } from "@mui/material";
import React, { memo, useEffect } from "react";

type resultProps = {
  result: number | undefined;
};
function Result({ result }: resultProps) {
  /*     useEffect(() => {
        console.log("result renderinf");
      }, []); */
  return <Typography variant="body2">{result}</Typography>;
}

export default memo(Result);
