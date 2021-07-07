/* eslint-disable @next/next/link-passhref */
import React from "react";
import {
  Box,
  Text,
  Link as LinkChakra,
  BoxProps,
  LinkProps,
} from "@chakra-ui/react";
import Link from "next/link";

interface PostCard {
  title: string;
  description: string;
  image?: string;
  slug: string;
}

const contentBox = {
  p: 4,
  display: { md: "flex" },
} as BoxProps;

const postBox = {
  mt: { base: 4, md: 0 },
} as BoxProps;

const postLink = {
  mt: 1,
  display: "block",
  fontSize: "lg",
  lineHeight: "normal",
  fontWeight: "semibold",
} as LinkProps;

const postTitle = {
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: "sm",
  letterSpacing: "wide",
  color: "teal.600",
} as BoxProps;

const postText = {
  mt: 2,
  color: "gray.500",
} as BoxProps;

const PostCard = ({ title, description, slug }: PostCard) => (
  <Box {...contentBox}>
    <Link href={`/posts/${slug}`}>
      <LinkChakra {...postLink}>
        <Box {...postBox}>
          <Text {...postTitle}>{title}</Text>
          <Text {...postText}>{description}</Text>
        </Box>
      </LinkChakra>
    </Link>
  </Box>
);

export default PostCard;
