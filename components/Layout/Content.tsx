import React from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Content = ({ children }: Props) => (
  <Flex direction="column" color="gray.800">
    {children}
  </Flex>
);

export default Content;
