class Node{
    constructor(data, left = null, right = null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class BTS {
    constructor(){
        this.root = null
    }

    add(data){
        const node = this.root
        if(!node){
            this.root = new Node(data)
        } 
        else{
            const searchTree = (node) => {
                if(data < node.data){
                    if(!node.left) return node.left = new Node(data)
                    else return searchTree(node.left)
                }
                else if (data > node.data){
                    if(!node.right) return node.right = new Node(data)
                    else return searchTree(node.right)
                }
                else{
                    return null
                }
            }
            return searchTree(node)
        }
    }
    findMin(){
        let current = this.root
        while(current.left !== null){
            current = current.left
        }
        return current.data
    }
    findMax(){
        let current = this.root
        while(current.right !== null){
            current = current.right
        }
        return current.data
    }

    inOrder(){
        if(this.root === null) return null
        else{
            let result = []
            function traverseInOrder(node){
                node.left && traverseInOrder(node.left)
                result.push(node.data)
                node.right && traverseInOrder(node.right)
            }
            traverseInOrder(this.root)
            return result
        }
    }

    remove(data){
        const removeNode = (node, data) => {
            if(node === null) return null
            if(data === node.data){
                //node has no children
                if(node.left === null && node.right === null){
                    return null
                }

                //node has no left child
                if(node.left === null){
                    return node.right
                }

                //node has no right child
                if(node.right === null){
                    return node.left
                }

                //node has two childs
                let tempNode = node.right
                while(tempNode.left !== null){
                    tempNode = tempNode.left
                }
                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data)
                return node
            }
            else if(data < node.data){
                node.left = removeNode(node.left, data)
                return node
            }
            else{
                node.right = removeNode(node.right, data)
                return node
            }
        }
        this.root = removeNode(this.root, data)
    }
}

// let myBTS = new BTS()
console.log(BTS)
// export default BTS