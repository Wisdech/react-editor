import clsx from 'clsx';
import React from 'react';
import { Icon } from '../assets/icon';
import { AttacheContent, BlockProps, ImageContent } from '../content-types';
import { manSize } from '../utils';

import styles from '../editor.module.css';

export function ImageRender({ block }: BlockProps<ImageContent>) {
  const { withBorder, withBackground, stretched, caption, file } = block.data;

  return (
    <div
      className={clsx(
        'mx-auto my-4 flex flex-col',
        withBorder && 'border border-brand',
        withBackground && 'bg-zinc-950/5 py-4',
        stretched ? 'max-w-full' : 'max-w-2xl',
      )}
    >
      <img className="mx-auto" alt={caption} src={file?.url} />
      <div className={styles['image-caption']}>{caption}</div>
    </div>
  );
}

export function AttacheRender({ block }: BlockProps<AttacheContent>) {
  const { title, file } = block.data;

  return (
    <div className={clsx('mx-auto my-4 max-w-2xl')}>
      <div className={styles['attache']}>
        <Icon className={styles['attache-icon']} type={file?.type} />
        <div className={styles['attache-text']}>
          <div className={styles['attache-title']}>{title}</div>
          <div className={styles['attache-size']}>文件大小：{manSize(file?.size)}</div>
        </div>
        <a target="_blank" download={file?.name} href={file?.url} className={styles['attache-action']}>
          下载
        </a>
      </div>
    </div>
  );
}
