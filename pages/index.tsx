import React from 'react';
import Head from 'next/head';
// import axios from 'axios';

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

Home.getInitialProps = () => {
  if (!process.browser) {
    // const listPosts = await axios(`https://www.rafaelbastiani.com/api/postlist`);
    const listPosts = [
      {
        url: '/posts/schema-graphql-typescript',
        title: '[types and tricks] Como gerar um schema Graphql com Typescript',
        description: 'Nesse passo a passo vamos ver como gerar um schema usando relay e nele contendo tipagem.',
        active: true,
      },
    ];

    return { listPosts };
  }

  return { listPosts: [{}] };
};

export default Home;
