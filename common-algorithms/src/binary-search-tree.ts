
class BinarySearchTree {

  private root: BinaryTreeNode | null = null;
  private comparator: Function = (a: any, b: any) => a - b;

  insert(value: any) {
    if (!this.root) {
      this.root = new BinaryTreeNode(value);
    } else {
      let current = this.root;
      while (true) {
        const result = this.comparator(value, current.value);
        if (result == 0) return;
        if (result < 0) {
          if (!current.left) {
            current.left = new BinaryTreeNode(value);
            current.left.parent = current;
            return;
          } else {
            current = current.left;
          }
        }
        if (result > 0) {
          if (!current.right) {
            current.right = new BinaryTreeNode(value);
            current.right.parent = current;
            return;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value: any): BinaryTreeNode | null {
    if (!this.root) return null;
    let current = this.root;
    while(true) {
      const result = this.comparator(value, current.value);
      if (result == 0) return current;
      if (result < 0) {
        if (!current.left) return null;
        else current = current.left;
      }
      if (result > 0) {
        if (!current.right) return null;
        else current = current.right;
      }
    }
  }

  exist(value: any): boolean {
    const node = this.find(value);
    if (node) return true;
    return false;
  }


  remove(value: any) {
    const nodePosition = (node: BinaryTreeNode): 'left' | 'right' => {
      if (node.parent && node.parent.right == node) return 'right';
      else return 'left';
    }

    const node = this.find(value);
    if (!node) return;
    if (node.parent) {
      if (!node.left && !node.right) {
        // no children
        node.parent[nodePosition(node)] = null;
      } else if (node.left && node.right) {
        // two children
        let minNode = node.right;
        while (true) {
          if (minNode.left) minNode = minNode.left;
          else break;
        }
        if (node.parent) node.parent[nodePosition(node)] = minNode;
        minNode.parent = node.parent;
        minNode.left = node.left;
        if (node.right != minNode) minNode.right = node.right;
        node.left.parent = minNode;
      } else {
        // one child
        const child = node.left ? node.left : node.right as BinaryTreeNode;
        child.parent = node.parent;
        node.parent[nodePosition(node)] = child;
      }
    } else {
      this.root = null;
    }
  }

}

class BinaryTreeNode {
  public left: BinaryTreeNode | null = null;
  public right: BinaryTreeNode | null = null;
  public parent: BinaryTreeNode | null = null;
  public value: any;

  constructor(value: any) {
    this.value = value;
  }

}

export default BinarySearchTree;
