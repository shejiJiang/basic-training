class Trie {
  private head: TrieNode = new TrieNode('*');

  addWord(word: string) {
    const characters = Array.from(word);
    let current = this.head;
    characters.forEach((character, idx) => {
      current = current.addChild(character, idx == characters.length - 1);
    });
  }

  wordExist(word: string): boolean {
    const characters = Array.from(word);
    let current = this.head;
    for (let i = 0; i < characters.length; i++) {
      current = current.getChild(characters[i]);
      if (!current) return false;
    }
    return true;
  }

}

class TrieNode {
  private character: string;
  private complete: boolean = false;
  private children: { [key: string]: TrieNode } = {};

  constructor(character: string) {
    this.character = character;
  }

  addChild(character: string, complete: boolean): TrieNode {
    if (!this.children[character]) {
      this.children[character] = new TrieNode(character);
    }
    const child = this.children[character];
    child.complete = child.complete || complete;
    return child;
  }

  getChild(character: string): TrieNode {
    return this.children[character];
  }
}

export default Trie;

