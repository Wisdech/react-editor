import clsx from 'clsx';
import React from 'react';
import { BlockProps, ImageContent } from '../content-types';
import styles from '../editor.module.css';

export function ImageRender({ block }: BlockProps<ImageContent>) {
  const { withBorder, withBackground, stretched, caption, file } = block.data;

  return (
    <div
      className={clsx(
        'mx-auto my-4 flex flex-col',
        withBorder && 'border border-brand',
        withBackground && 'bg-zinc-950/5 py-4',
        stretched ? 'max-w-full' : 'max-w-3xl',
      )}
    >
      <img className="mx-auto" alt={caption} src={file?.url} />
      <div className={styles['image-caption']}>{caption}</div>
    </div>
  );
}
