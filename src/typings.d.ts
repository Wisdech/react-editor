declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.ComponentProps<'svg'> & { title?: string }>;
  export default ReactComponent;
}
