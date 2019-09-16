import React from 'react';
import { Box, Text, Link as LinkChakra } from '@chakra-ui/core';
import { BoxProps } from '@chakra-ui/core/dist/Box';
import { LinkProps } from '@chakra-ui/core/dist/Link';
import Link from 'next/link';

interface PostCard {
  publishedAt: string;
  title: string;
  description: string;
  image?: string;
  url: string;
}

const contentBox = {
  p: 4,
  display: { md: 'flex' },
} as BoxProps;

const postBox = {
  mt: { base: 4, md: 0 },
} as BoxProps;

const postLink = {
  mt: 1,
  display: 'block',
  fontSize: 'lg',
  lineHeight: 'normal',
  fontWeight: 'semibold',
} as LinkProps;

const postTitle = {
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: 'sm',
  letterSpacing: 'wide',
  color: 'teal.600',
} as BoxProps;

const postText = {
  mt: 2,
  color: 'gray.500',
} as BoxProps;

const PostCard = ({ publishedAt, title, description, url }: PostCard) => (
  <Box {...contentBox}>
    <Link href={url}>
      <LinkChakra {...postLink}>
        <Box {...postBox}>
          <Text {...postTitle}>
            <time>{publishedAt}</time> - {title}
          </Text>
          <Text {...postText}>{description}</Text>
        </Box>
      </LinkChakra>
    </Link>
  </Box>
);

export default PostCard;
