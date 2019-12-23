import Trie from './trie';

it('trie', () => {
  const trie = new Trie();
  trie.addWord('hello');
  trie.addWord('world');
  expect(trie.wordExist('aa')).toBe(false);
  expect(trie.wordExist('hello')).toBe(true);
});
