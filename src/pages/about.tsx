import { readFile } from 'node:fs/promises';
import { Link } from 'waku';
import { marked } from 'marked';
import { RenderMarkdown } from '../components/RenderMarkdown';

export default async function AboutPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <RenderMarkdown markdown={data.markdown} />
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const markdown = await readFile('src/content/about.md', 'utf-8');

  return {
    title: 'About',
    markdown,
  };
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
