
class Node { 
     constructor(element) 
     { 
         this.element = element; 
         this.next = null
     } 
 }

 class LinkedList { 
   constructor() 
   { 
       this.head = null;
       this.length = 0;
   } 

   push (element) { 
     var node = new Node(element);
     var current; 

     if (this.head === null) 
         this.head = node;

     else { 
         current = this.head;
         while (current.next != null) {
           current = current.next;
         }
         current.next = node;
     }
     this.length++;
   }

   removeDuplicates (element) {
  
     var current = this.head; 
     var previous = null; 

     while (current != null) { 
       
         while (current.next) {
           let nodeToCheck = current.next
           if (current.element === nodeToCheck.element) {
             this.length--;
           }
           current = current.next;
         }

         previous = current; 
         current = current.next; 
     } 
 }

 }