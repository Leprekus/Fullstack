export class TreeNode<T> {
    data: T | null;
    frequency: number;
    right: TreeNode<T> | null ;
    left: TreeNode<T>  | null ;

    constructor(data?: T, frequency?: number) {
        this.data = data ?? null;
        this.frequency = frequency ?? 0;
        this.right = null;
        this.left = null;
    }
    
}

