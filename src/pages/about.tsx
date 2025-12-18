import { readFile } from 'node:fs/promises';
import { Link } from 'waku';
import { marked } from 'marked';

export default async function AboutPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const markdown = await readFile('src/content/about.md', 'utf-8');
  const contentHtml = await marked.parse(markdown);

  return {
    title: 'About',
    contentHtml,
  };
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
