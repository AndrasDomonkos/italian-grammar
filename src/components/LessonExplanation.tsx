import type { LessonExplanation as LessonExplanationType } from '@/content/types';

interface Props {
  explanation: LessonExplanationType;
}

export function LessonExplanation({ explanation }: Props) {
  const paragraphs = explanation.text.split('\n\n');

  return (
    <div className="space-y-4">
      <div className="prose prose-sm max-w-none dark:prose-invert space-y-3">
        {paragraphs.map((para, i) => {
          if (para.startsWith('## ')) {
            return (
              <h2 key={i} className="text-xl font-bold mt-6 mb-2">
                {para.slice(3)}
              </h2>
            );
          }
          if (para.startsWith('### ')) {
            return (
              <h3 key={i} className="text-base font-semibold mt-4 mb-1 text-primary">
                {para.slice(4)}
              </h3>
            );
          }
          if (para.startsWith('---')) {
            return <hr key={i} className="border-border my-4" />;
          }
          // Render list-like paragraphs
          if (para.includes('\n- ')) {
            const [intro, ...items] = para.split('\n- ');
            return (
              <div key={i}>
                {intro && <p className="mb-1" dangerouslySetInnerHTML={{ __html: renderInline(intro) }} />}
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {items.map((item, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
                  ))}
                </ul>
              </div>
            );
          }
          if (para.startsWith('- ')) {
            const items = para.split('\n- ').map((s) => s.replace(/^- /, ''));
            return (
              <ul key={i} className="list-disc list-inside space-y-1 text-sm">
                {items.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
                ))}
              </ul>
            );
          }
          return (
            <p
              key={i}
              className="text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderInline(para) }}
            />
          );
        })}
      </div>

      {explanation.tables?.map((table, ti) => (
        <div key={ti} className="overflow-x-auto mt-4">
          {table.caption && (
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              {table.caption}
            </p>
          )}
          <table className="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-muted">
                {table.headers.map((h, hi) => (
                  <th key={hi} className="border border-border px-3 py-2 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, ri) => (
                <tr key={ri} className="even:bg-muted/30">
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-border px-3 py-2">
                      <span dangerouslySetInnerHTML={{ __html: renderInline(cell) }} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

/** Convert **bold**, *italic*, and `code` markers to HTML. */
function renderInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-muted px-1 rounded text-xs">$1</code>');
}
