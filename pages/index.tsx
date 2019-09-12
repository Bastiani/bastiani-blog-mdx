import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';

import ListPosts from '../components/ListPosts';

interface Post {
  listPosts: any;
}

interface PostCard {
  publishedAt: string;
  title: string;
  description: string;
}

const PostCard = ({ publishedAt, title, description }: PostCard) => (
  <>
    <time>{publishedAt}</time>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </>
);

const Home = ({ listPosts }: Post) => (
  <>
    <Head>
      <title>Rafael Campos de Bastiani - Blog</title>
    </Head>

    <ListPosts>
      {listPosts.map(({ url, publishedAt, title, description }, index) => (
        <Link key={index} href={url}>
          <a>
            <PostCard publishedAt={publishedAt} title={title} description={description} />
          </a>
        </Link>
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
