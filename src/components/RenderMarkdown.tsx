import { marked } from 'marked';

export const RenderMarkdown: React.FC<{ markdown: string }> = ({ markdown }) => {
  const contentHtml = marked.parse(markdown);

  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
};