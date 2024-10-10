import { OutputData } from '@editorjs/editorjs';
import React from 'react';
import { AttacheRender, ImageRender } from './Media';
import { TableRender } from './Table';
import { AlertRender, HeaderRender, ListRender, TextRender } from './Texts';

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
          case 'list':
            return <ListRender block={block} key={block.id} />;
          case 'image':
            return <ImageRender block={block} key={block.id} />;
          case 'attaches':
            return <AttacheRender block={block} key={block.id} />;
          default:
            return <TextRender block={block} key={block.id} />;
        }
      })}
    </div>
  );
}
