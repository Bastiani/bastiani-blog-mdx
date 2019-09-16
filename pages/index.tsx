import React from 'react';
import Head from 'next/head';
import axios from 'axios';

import ListPosts from '../components/ListPosts';
import PostCard from '../components/PostCard';

interface Post {
  listPosts: any;
}

const Home = ({ listPosts }: Post) => (
  <>
    <Head>
      <title>Rafael Campos de Bastiani - Blog</title>
    </Head>

    <ListPosts>
      {listPosts.map(({ url, publishedAt, title, description }) => (
        <PostCard {...{ url, publishedAt, title, description }} key={url} />
      ))}
    </ListPosts>
  </>
);

Home.getInitialProps = async () => {
  if (!process.browser) {
    const listPosts = await axios(`https://www.rafaelbastiani.com/api/postlist`);

    return { listPosts: listPosts.data };
  }

  return { listPosts: [{}] };
};

export default Home;
