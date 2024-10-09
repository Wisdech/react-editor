//@ts-nocheck
import { EditorConfig } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
import Warning from '@editorjs/Warning';
import { Config } from './index';

export function defaultConfig({ linkEndpoint, imageUrlEndpoint, imageFileEndpoint }: Config): EditorConfig {
  return {
    holder: 'editor-js',
    tools: {
      list: List,
      quote: Quote,
      table: Table,
      underline: Underline,
      header: {
        class: Header,
        config: {
          levels: [1, 2, 3, 4],
          placeholder: '输入标题',
        },
      },
      warning: {
        class: Warning,
        config: {
          titlePlaceholder: '提示标题',
          messagePlaceholder: '提示内容',
        },
      },
      linkTool: {
        class: LinkTool,
        config: { endpoint: linkEndpoint },
      },
      image: {
        class: ImageTool,
        config: { endpoints: { byFile: imageFileEndpoint, byUrl: imageUrlEndpoint } },
      },
    },
    onReady: () => {
      console.log('Editor.js is ready to work!');
    },
    onChange: (_api, event) => {
      console.log('Editor.js content changed!', event);
    },
    placeholder: '输入或添加内容...',
    data: {
      blocks: [
        {
          type: 'header',
          data: { text: '', level: 1 },
        },
        {
          type: 'paragraph',
          data: { text: '' },
        },
      ],
    },
  };
}
