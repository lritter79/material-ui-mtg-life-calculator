import { Typography } from "@mui/material";
import React from "react";

type resultProps = {
  result: number | undefined;
};
export default function ({ result }: resultProps) {
  return <Typography variant="body2">{result}</Typography>;
}
