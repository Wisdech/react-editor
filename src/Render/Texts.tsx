import { Alert, Typography } from '@arco-design/web-react';
import React from 'react';
import { AlertContent, BlockProps, DefaultContent, HeaderContent, ListContent } from '../content-types';
import styles from '../editor.module.css';

export function TextRender({ block }: BlockProps<DefaultContent>) {
  return <div className={styles['default']} dangerouslySetInnerHTML={{ __html: block.data?.text ?? '' }} />;
}

export function HeaderRender({ block }: BlockProps<HeaderContent>) {
  const { level, text } = block.data;

  return (
    <div className="mx-auto my-4 max-w-3xl">
      <Typography.Title heading={level}>{text}</Typography.Title>
    </div>
  );
}

export function ListRender({ block }: BlockProps<ListContent>) {
  const { items, style } = block.data;

  return (
    <div className="mx-auto my-2 max-w-3xl">
      {style == 'ordered' && (
        <ol className={styles['ol']}>{items?.map((text, index) => <li key={index}>{text}</li>)}</ol>
      )}
      {style == 'unordered' && (
        <ul className={styles['ul']}>{items?.map((text, index) => <li key={index}>{text}</li>)}</ul>
      )}
    </div>
  );
}

export function AlertRender({ block }: BlockProps<AlertContent>) {
  const { title, message } = block.data;

  return (
    <div className={styles['alert']}>
      <Alert type="warning" title={title} content={message} />
    </div>
  );
}
