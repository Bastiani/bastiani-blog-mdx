import React from "react";
import Link from "next/link";
import {
  Flex,
  Heading,
  Link as LinkChakra,
  FlexProps,
  LinkProps,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const headerContainer = {
  flexDirection: "row",
  justify: "space-between",
  color: "gray.800",
  borderBottom: "1px",
  borderColor: "gray.200",
  p: 3,
  maxHeight: "58px",
} as FlexProps;

const postLink = {
  mt: 1,
  display: "block",
  fontSize: "lg",
  lineHeight: "normal",
  fontWeight: "semibold",
  color: "gray.800",
} as LinkProps;

const Header = () => (
  <Flex {...headerContainer}>
    <Heading as="h3" size="lg" m={1}>
      <Link href="/" passHref>
        <LinkChakra {...postLink}>Rafael Campos de Bastiani</LinkChakra>
      </Link>
    </Heading>
    <Heading as="h3" size="lg" m={1} display="flex" flexDirection="row">
      <LinkChakra
        {...postLink}
        href="https://www.linkedin.com/in/bastiani/"
        isExternal
        mr={2}
      >
        <FaLinkedin />
      </LinkChakra>
      <LinkChakra
        {...postLink}
        href="https://github.com/Bastiani"
        isExternal
        mr={2}
      >
        <FaGithub />
      </LinkChakra>
      <LinkChakra
        {...postLink}
        href="https://twitter.com/RBastiani"
        isExternal
        mr={2}
      >
        <FaTwitter />
      </LinkChakra>
    </Heading>
  </Flex>
);

export default Header;
