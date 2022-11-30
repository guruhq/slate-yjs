import { RemoteCursorDecoratedRange } from '@guruhq/slate-yjs-react';
import { BaseRange } from 'slate';
import { CursorData } from './types';

declare module 'slate-latest' {
  interface CustomTypes {
    Range: BaseRange | RemoteCursorDecoratedRange<CursorData>;
  }
}
