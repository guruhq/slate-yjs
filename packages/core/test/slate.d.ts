import { BaseElement, BaseText } from 'slate-latest';

declare module 'slate-latest' {
  interface CustomTypes {
    Element: BaseElement & Record<string, unknown>;
    Text: BaseText & Record<string, unknown>;
  }
}
