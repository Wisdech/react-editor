import React from 'react';
import { BlockProps, TableContent } from '../content-types';
import styles from '../editor.module.css';

function THead({ data }: { data?: string[] }) {
  return (
    <thead className="bg-gray-100">
      <tr className="text-zinc-950">
        {data?.map((text, index) => (
          <th key={index} className={styles['table-title']}>
            {text}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TBody({ data }: { data?: string[][] }) {
  return (
    <tbody className={styles['table-body']}>
      {data?.map((row, index) => (
        <tr key={index} className="hover:bg-zinc-950/5">
          {row?.map((text, index) => (
            <td key={index} className={styles['table-cell']}>
              {text}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export function TableRender({ block }: BlockProps<TableContent>) {
  const { withHeadings, content } = block.data;

  return (
    <div className={styles['table']}>
      {withHeadings ? (
        <table className={styles['table-content']}>
          <THead data={content?.[0]} />
          <TBody data={content?.slice(1)} />
        </table>
      ) : (
        <table className={styles['table-content']}>
          <TBody data={content} />
        </table>
      )}
    </div>
  );
}
