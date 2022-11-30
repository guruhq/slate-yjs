/** @jsx jsx */
import { Editor } from 'slate-latest';
import { jsx } from '../../../../../support/jsx';

export const input = (
  <editor>
    <unstyled>
      Hello world!
      <cursor />
    </unstyled>
  </editor>
);

export const expected = (
  <editor>
    <unstyled>
      Hello world!
      <cursor />
    </unstyled>
  </editor>
);

export function run(editor: Editor) {
  editor.insertText('');
}
