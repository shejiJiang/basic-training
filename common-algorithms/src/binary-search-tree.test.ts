import BinarySearchTree from './binary-search-tree';

it('binary-search-tree', () => {
  const bst = new BinarySearchTree();
  bst.insert(8);
  bst.insert(3);
  expect(bst.exist(1)).toBe(false);
  expect(bst.exist(8)).toBe(true);
});
