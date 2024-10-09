import EditorJS, { EditorConfig, OutputData } from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import LinkTool from '@editorjs/link';
import { defaultData, toolsConfig } from './config';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

import styles from '../editor.module.css';

export type EditorProps = {
  setInstance?: (instance: EditorJS | null) => void;
  data?: OutputData;
  config?: EditorConfig;
  endpoints?: {
    linkUrl?: string;
    imageUrl?: string;
    imageFile?: string;
  };
};

export function Editor({ data, endpoints, setInstance }: EditorProps) {
  const [editor, setEditor] = useState<EditorJS | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultConfig: EditorConfig = {
    placeholder: '输入或添加内容...',
    data: data ?? defaultData,
    tools: {
      ...toolsConfig,

      linkTool: {
        class: LinkTool,
        config: { endpoint: endpoints?.linkUrl },
      },

      image: {
        class: ImageTool,
        config: {
          endpoints: { byFile: endpoints?.imageFile, byUrl: endpoints?.imageUrl },
        },
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
