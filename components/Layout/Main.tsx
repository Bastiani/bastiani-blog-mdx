import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => (
  <Box p={1} m={3}>
    {children}
  </Box>
);

export default Main;
