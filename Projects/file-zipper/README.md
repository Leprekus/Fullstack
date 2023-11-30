# File Zipper

1. Create a leaf node for each symbol and add it to the priority queue.
2. While there is more than one node in the queue:
   - Remove the two nodes of highest priority (lowest probability) from the queue
   - Create a new internal node with these two nodes as children and with probability equal to the sum of the two nodes' probabilities.
   - Add the new node to the queue.
3. The remaining node is the root node and the tree is complete.

Since efficient priority queue data structures require O(log n) time per insertion, and a tree with n leaves has 2n−1 nodes, this algorithm operates in O(n log n) time, where n is the number of symbols.
