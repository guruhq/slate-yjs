import { Node, RemoveNodeOperation } from 'slate-latest';
import * as Y from 'yjs';
import { getYTarget } from '../../utils/location';

export function removeNode(
  sharedRoot: Y.XmlText,
  slateRoot: Node,
  op: RemoveNodeOperation
): void {
  const { yParent: parent, textRange } = getYTarget(
    sharedRoot,
    slateRoot,
    op.path
  );
  parent.delete(textRange.start, textRange.end - textRange.start);
}
