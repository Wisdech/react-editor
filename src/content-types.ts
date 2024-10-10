import { IconProps } from './assets/icon';

export type BlockProps<T> = {
  block: { data: T };
};

export type AlertContent = {
  title?: string;
  message?: string;
};

export type TableContent = {
  withHeadings?: boolean;
  content?: string[][];
};

export type HeaderContent = {
  level?: 1 | 2 | 3 | 4;
  text?: string;
};

export type ListContent = {
  style?: 'ordered' | 'unordered';
  items?: string[];
};

export type ImageContent = {
  stretched?: boolean;
  withBackground?: boolean;
  withBorder?: boolean;
  caption?: string;
  file?: Record<string, string> & {
    url?: string;
  };
};

export type AttacheContent = {
  title?: string;
  file?: Record<string, string> & {
    url?: string;
    hash?: string;
    name?: string;
    size?: number;
    type?: IconProps['type'];
    extension?: string;
  };
};

export type DefaultContent = {
  text: string;
};
