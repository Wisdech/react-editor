import React from 'react';
import IconInfoCircle from '../assets/icon/icon-info-circle.svg';
import { AlertContent, BlockProps, DefaultContent, HeaderContent, ListContent } from '../content-types';
import styles from '../editor.module.css';

export function TextRender({ block }: BlockProps<DefaultContent>) {
  return <div className={styles['default']} dangerouslySetInnerHTML={{ __html: block.data?.text ?? '' }} />;
}

export function HeaderRender({ block }: BlockProps<HeaderContent>) {
  const { level, text } = block.data;

  return (
    <div className="mx-auto my-4 max-w-2xl">
      {level == 1 && <h1 className={styles['header-h1']}>{text}</h1>}
      {level == 2 && <h2 className={styles['header-h2']}>{text}</h2>}
      {level == 3 && <h3 className={styles['header-h3']}>{text}</h3>}
      {level == 4 && <h4 className={styles['header-h4']}>{text}</h4>}
    </div>
  );
}

export function ListRender({ block }: BlockProps<ListContent>) {
  const { items, style } = block.data;

  return (
    <div className="mx-auto my-2 max-w-2xl">
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
      <div className={styles['alert-content']}>
        <IconInfoCircle className={styles['alert-icon']} />
        <div className={styles['alert-text']}>
          <div className={styles['alert-title']}>{title}</div>
          <div className={styles['alert-message']}>{message}</div>
        </div>
      </div>
    </div>
  );
}
