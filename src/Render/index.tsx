import { Alert, Typography } from '@arco-design/web-react';
import { OutputData } from '@editorjs/editorjs';
import clsx from 'clsx';
import React from 'react';
import { AlertContent, BlockProps, DefaultContent, HeaderContent, ImageContent, TableContent } from '../content-types';

import styles from '../editor.module.css';

export function Render({ data }: { data?: OutputData }) {
  return (
    <div className={styles['editor-js']}>
      {data?.blocks.map((block) => {
        switch (block.type) {
          case 'warning':
            return <AlertRender block={block} key={block.id} />;
          case 'table':
            return <TableRender block={block} key={block.id} />;
          case 'header':
            return <HeaderRender block={block} key={block.id} />;
          case 'image':
            return <ImageRender block={block} key={block.id} />;
          default:
            return <DefaultRender block={block} key={block.id} />;
        }
      })}
    </div>
  );
}

function DefaultRender({ block }: BlockProps<DefaultContent>) {
  return <div className={styles['default']} dangerouslySetInnerHTML={{ __html: block.data?.text ?? '' }} />;
}

function HeaderRender({ block }: BlockProps<HeaderContent>) {
  return (
    <div className="mx-auto my-4 max-w-3xl">
      <Typography.Title heading={block.data?.level}>{block.data?.text}</Typography.Title>
    </div>
  );
}

function ImageRender({ block }: BlockProps<ImageContent>) {
  return (
    <div
      className={clsx(
        'mx-auto my-4 flex flex-col',
        block.data?.withBorder && 'border border-brand',
        block.data?.withBackground && 'bg-zinc-950/5 py-4',
        block.data?.stretched ? 'max-w-full' : 'max-w-3xl',
      )}
    >
      <img className="mx-auto" alt={block.data?.caption} src={block.data?.file?.url} />
      <div className={styles['image-caption']}>{block.data?.caption}</div>
    </div>
  );
}

function TableRender({ block }: BlockProps<TableContent>) {
  return (
    <div className={styles['table']}>
      {block.data?.withHeadings ? (
        <table className={styles['table-content']}>
          <thead className="bg-gray-100">
            <tr className="text-zinc-950">
              {block.data?.content?.[0]?.map((text, index) => (
                <th key={index} className={styles['table-title']}>
                  {text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.data?.content?.slice(1)?.map((row, index) => (
              <tr key={index} className="hover:bg-zinc-950/5">
                {row?.map((text, index) => (
                  <td key={index} className={styles['table-cell']}>
                    {text}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className={styles['table-content']}>
          <tbody className={styles['table-body']}>
            {block.data?.content?.map((row, index) => (
              <tr key={index} className="hover:bg-zinc-950/5">
                {row?.map((text, index) => (
                  <td key={index} className={styles['table-cell']}>
                    {text}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function AlertRender({ block }: BlockProps<AlertContent>) {
  return (
    <div className={styles['alert']}>
      <Alert type="warning" title={block.data?.title} content={block.data?.message} />
    </div>
  );
}
