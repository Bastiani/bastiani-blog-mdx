import React from 'react';
import { Box, Text, Link as LinkChakra } from '@chakra-ui/core';
import Link from 'next/link';

interface PostCard {
  publishedAt: string;
  title: string;
  description: string;
  image?: string;
  url: string;
}

const contentBox = ({
  p: 4,
  display: { md: 'flex' },
} as unknown) as React.CSSProperties;

const postBox = ({
  mt: { base: 4, md: 0 },
} as unknown) as React.CSSProperties;

const postLink = ({
  mt: 1,
  display: 'block',
  fontSize: 'lg',
  lineHeight: 'normal',
  fontWeight: 'semibold',
} as unknown) as React.CSSProperties;

const postTitle = ({
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: 'sm',
  letterSpacing: 'wide',
  color: 'teal.600',
} as unknown) as React.CSSProperties;

const postText = ({
  mt: 2,
  color: 'gray.500',
} as unknown) as React.CSSProperties;

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
