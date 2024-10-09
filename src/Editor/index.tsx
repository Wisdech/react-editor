import EditorJS, { EditorConfig } from '@editorjs/editorjs';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from '../editor.module.css';
import { defaultConfig } from './config';

export type Config = {
  linkEndpoint?: string;
  imageFileEndpoint?: string;
  imageUrlEndpoint?: string;
};

export function Editor({ config, editorConfig }: { config: Config; editorConfig?: EditorConfig }) {
  const [editor, setEditor] = useState<EditorJS | null>(null);

  useEffect(() => {
    setEditor(new EditorJS(Object.assign(defaultConfig(config), editorConfig)));

    return () => editor?.destroy();
  }, []);

  return <div id="editor-js" className={clsx('rounded-sm', styles['editor-js'])} />;
}
