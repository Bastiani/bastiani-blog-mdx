import fs from 'fs';
import path from 'path';

const getBlogPost = (slug: string) => {
  const DIR = path.join(process.cwd(), '/data/');
  const files = fs
    .readdirSync(DIR)
    .filter(file => (file.endsWith('.md') || file.endsWith('.mdx')) && file.startsWith(slug));
  return files.map(file => {
    const name = path.join(DIR, file);
    const contents = fs.readFileSync(name, 'utf-8');

    return contents;
  })[0];
};

export default getBlogPost;
