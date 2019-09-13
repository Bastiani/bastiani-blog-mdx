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

const PostCard = ({ publishedAt, title, description, url }: PostCard) => (
  <Box p={4} display={{ md: 'flex' }}>
    <Link href={url}>
      <LinkChakra mt={1} display="block" fontSize="lg" lineHeight="normal" fontWeight="semibold">
        <Box mt={{ base: 4, md: 0 }}>
          <Text fontWeight="bold" textTransform="uppercase" fontSize="sm" letterSpacing="wide" color="teal.600">
            <time>{publishedAt}</time> - {title}
          </Text>
          <Text mt={2} color="gray.500">
            {description}
          </Text>
        </Box>
      </LinkChakra>
    </Link>
  </Box>
);

export default PostCard;
