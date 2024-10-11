import AttachesTool from '@editorjs/attaches';
import EditorJS, { EditorConfig, OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
import Warning from '@editorjs/warning';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

import styles from '../editor.module.css';
import i18n from './locales/zh.json';

export type EditorProps = {
  setInstance?: (instance: EditorJS | null) => void;
  data?: OutputData;
  config?: EditorConfig;
  endpoints?: {
    uploadFile?: string;
    uploadUrl?: string;
  };
};

export function Editor({ data, endpoints, setInstance }: EditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<EditorJS | null>(null);

  const csrfHeader = {
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
  };

  const defaultConfig: EditorConfig = {
    placeholder: '输入或添加内容...',
    data: data ?? {
      blocks: [
        { type: 'header', data: { text: '', level: 1 } },
        { type: 'paragraph', data: { text: '' } },
      ],
    },
    i18n: { messages: i18n },
    tools: {
      header: {
        class: Header,
        config: { levels: [1, 2, 3, 4], placeholder: '输入标题' },
      },
      list: List,
      image: {
        class: ImageTool,
        config: {
          endpoints: { byFile: endpoints?.uploadFile, byUrl: endpoints?.uploadUrl },
          additionalRequestHeaders: csrfHeader,
        },
      },
      attaches: {
        class: AttachesTool,
        config: {
          buttonText: '点击上传文件',
          endpoint: endpoints?.uploadFile,
          additionalRequestHeaders: csrfHeader,
          errorMessage: '文件上传失败',
        },
      },
      table: Table,
      warning: {
        class: Warning,
        config: { titlePlaceholder: '提示标题', messagePlaceholder: '提示内容' },
      },
      //quote: Quote,
      //linkTool: {
      //  class: LinkTool,
      //  config: { endpoint: endpoints?.linkUrl },
      //},

      underline: {
        class: Underline,
        shortcut: 'CMD+U',
      },
    },
  };

  useEffect(() => {
    if (containerRef.current) {
      const editorInstance = new EditorJS({
        holder: containerRef.current,
        ...defaultConfig,
      });
      setEditor(editorInstance);
      setInstance?.(editorInstance);
    }

    return () => {
      editor?.destroy();
    };
  }, []);

  return <div ref={containerRef} className={clsx('rounded-sm', styles['editor-js'])} />;
}
