import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import ListPosts from '../components/ListPosts';
import posts from './posts/index.json';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <ListPosts>
      {posts.map((post, index) => (
        <Link key={index} href={post.url}>
          <a>
            {post.publishedAt}
            {post.title}
            {post.description}
          </a>
        </Link>
      ))}
    </ListPosts>
  </>
);

export default Home;
