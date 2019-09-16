import React from 'react';
import Link from 'next/link';
import { Flex, Heading, Link as LinkChakra } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FlexProps } from '@chakra-ui/core/dist/Flex';
import { LinkProps } from '@chakra-ui/core/dist/Link';

const headerContainer = {
  flexDirection: 'row',
  justify: 'space-between',
  color: 'gray.800',
  borderBottom: '1px',
  borderColor: 'gray.200',
  p: 3,
} as FlexProps;

const postLink = {
  mt: 1,
  display: 'block',
  fontSize: 'lg',
  lineHeight: 'normal',
  fontWeight: 'semibold',
  color: 'gray.800',
} as LinkProps;

const Header = () => (
  <Flex {...headerContainer}>
    <Heading as="h3" size="lg" m={1}>
      <Link href="/">
        <LinkChakra {...postLink}>Rafael Campos de Bastiani</LinkChakra>
      </Link>
    </Heading>
    <Heading as="h3" size="lg" m={1} display="flex" flexDirection="row">
      {/*
      // @ts-ignore */}
      <LinkChakra {...postLink} href="https://www.linkedin.com/in/bastiani/" isExternal mr={2}>
        <FontAwesomeIcon icon={faLinkedin} />
      </LinkChakra>
      {/*
      // @ts-ignore */}
      <LinkChakra {...postLink} href="https://github.com/Bastiani" isExternal mr={2}>
        <FontAwesomeIcon icon={faGithub} />
      </LinkChakra>
      {/*
      // @ts-ignore */}
      <LinkChakra {...postLink} href="https://twitter.com/RBastiani" isExternal mr={2}>
        <FontAwesomeIcon icon={faTwitter} />
      </LinkChakra>
    </Heading>
  </Flex>
);

export default Header;
