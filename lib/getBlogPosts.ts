/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), '/pages/posts/');
const META = /export\s+const\s+meta\s+=\s+(\{(\r\n|\n|.)*?(\r\n|\n)\})/;
console.log('============getBlogPosts', process.browser);

const files = fs.readdirSync(DIR).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

export default () =>
  files
    .map((file, index) => {
      const name = path.join(DIR, file);
      const contents = fs.readFileSync(name, 'utf-8');
      const match = META.exec(contents);

      if (!match || typeof match[1] !== 'string') {
        throw new Error(`${name} needs to export const meta = {}`);
      }

      const meta = eval('(' + match[1] + ')');

      return {
        ...meta,
        path: '/posts/' + file.replace(/\.mdx?$/, ''),
        index,
      };
    })
    .filter(meta => meta.published);
// .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
