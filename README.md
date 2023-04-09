This project involves creating a Balanced Binary Search Tree or BST for short. These data structures allow for fast operations involving lookup, insertion and deltion of data items.

A BST is essentially a branching sequence of nodes that house data and have pointers to their left and right. A balanced BST requires a sorted array which is why I have included my merge-sort algorithm from a previous project. Albeit this one is modified to check for duplication of elements. During the merge process it will skip an iteration for one of the arrays if a comparison is equal. This is to ensure the BST has no duplicates in it's build phase. I have also adjusted methods such as insertion to follow this protocol and ignore adding anything that is already stored inside the data strucutre. The reason is that duplicate values increase complexity in keeping a BST balanced.

A balanced tree is a tree where the differential in height between the left and right subtrees of any node in the structure are <= 1.

There is a drive script attached that when run with node in the cl, This will output a multi-step process that is outlined in the files comments.

Prettyprint is borrowed code from The Odin Project that visualizes a BST in the console. It is not necessary for the driver script or the BST as a whole.

I also created a simple js file that contains a generateArray module with two methods. They both generate an array of 10 random numbers that can be duplicates. One generates under 100 and one over.

As a whole, this project helped me improve my understanding and implenation of recursive algorithms. It also made me appreciate and reflect upon the time and space complexity of my algorithms. As with a linked list, a BST can insert data to the front of the tree (root), at Ω(1). Obviously this is the same with an array which manipulates it's end or tail with the pop and push functions. However in general insertion and deletion for an array has an average time complexity or θ(n). This is linear as you iterate through the structure in search of the correct index. A BST on the other hand has an average case or θ(log(n)). Every time data or input doubles we might only increase the number of operations by 1. This is because of the nature of a branching structure. Just like in a binary search, we can check two values at once in our search and eliminate half of the remaining data items each time. How cool is that!
