import { TreeNode } from './node';

export class BinaryTree<T> {
    root: null | TreeNode<T>;

    constructor(root?: TreeNode<T>) {
        this.root = root ?? null;
    }


    public addRecursive(current:TreeNode<T>, node: TreeNode<T>): TreeNode<T> {

        if(current === null) return node;
        
        if(node.frequency < current.frequency) {
            current.left = this.addRecursive(current.left!, node)
        } else if(node.frequency > current.frequency) {
            current.right = this.addRecursive(current.right!, node)
        } else return current //value already exists

        return current;
        
    }

    private traverse(current: TreeNode<T> | null, cb: (item: TreeNode<T>) => void) {
        if(current === null) return;
        cb(current)
        this.traverse(current.left, cb)
        this.traverse(current.right, cb)
    }

    public toString(): void {
        let stringified = `{`
        this.traverse(this.root!, (node: TreeNode<T>) =>{

            if(node.left === null && node.right === null && node.data || node.data)
                stringified += ` \n[ data: ${ node.data }, freq: ${ node.frequency } ]\n `
        }
        )
        stringified += '}'
        console.log(stringified)
        
    }
}
