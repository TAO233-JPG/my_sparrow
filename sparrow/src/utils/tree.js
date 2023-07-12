export function descendants(root) {
  const nodes = [];
  const push = (d) => nodes.push(d);
  bfs(root, push);
  return nodes;
}

export function bfs(root, callback) {
  const queue = [root];
  while (queue.length) {
    const node = queue.pop();
    callback(node);
    if (Array.isArray(node.children)) queue.push(...node.children);
  }
}
