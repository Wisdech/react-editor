import { EditorConfig, OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
import Warning from '@editorjs/Warning';

export const defaultData: OutputData = {
  blocks: [
    { type: 'header', data: { text: '', level: 1 } },
    { type: 'paragraph', data: { text: '' } },
  ],
};

export const toolsConfig: EditorConfig['tools'] = {
  list: List,
  quote: Quote,
  table: Table,
  underline: Underline,
  header: {
    class: Header,
    config: { levels: [1, 2, 3, 4], placeholder: '输入标题' },
  },
  warning: {
    class: Warning,
    config: { titlePlaceholder: '提示标题', messagePlaceholder: '提示内容' },
  },
};
