import clsx from 'clsx';
import React from 'react';
import AudioIcon from './icon/icon-audio.svg';
import ImageIcon from './icon/icon-image.svg';
import PDFIcon from './icon/icon-pdf.svg';
import SheetIcon from './icon/icon-sheet.svg';
import SlideIcon from './icon/icon-slide.svg';
import TXTIcon from './icon/icon-txt.svg';
import Default from './icon/icon-unknown.svg';
import VideoIcon from './icon/icon-video.svg';
import WordIcon from './icon/icon-word.svg';
import ZIPIcon from './icon/icon-zip.svg';

export type IconProps = React.ComponentPropsWithoutRef<'svg'> & {
  type?: 'PDF' | 'WORD' | 'ZIP' | 'AUDIO' | 'SHEET' | 'SLIDE' | 'UNKNOWN' | 'VIDEO' | 'TXT' | 'IMAGE';
};

export function Icon({ type = 'UNKNOWN', className, ...props }: IconProps) {
  switch (type) {
    case 'PDF':
      return <PDFIcon className={clsx(className)} {...props} />;
    case 'ZIP':
      return <ZIPIcon className={clsx(className)} {...props} />;
    case 'TXT':
      return <TXTIcon className={clsx(className)} {...props} />;
    case 'WORD':
      return <WordIcon className={clsx(className)} {...props} />;
    case 'SHEET':
      return <SheetIcon className={clsx(className)} {...props} />;
    case 'SLIDE':
      return <SlideIcon className={clsx(className)} {...props} />;
    case 'AUDIO':
      return <AudioIcon className={clsx(className)} {...props} />;
    case 'VIDEO':
      return <VideoIcon className={clsx(className)} {...props} />;
    case 'IMAGE':
      return <ImageIcon className={clsx(className)} {...props} />;
    case 'UNKNOWN':
    default:
      return <Default className={clsx(className)} {...props} />;
  }
}
