
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

    if(this.head == null || this.head.next == null) {
      return;
    }

    var current, next, nextnext;

    var current = this.head;

     while (current) {

      console.log("Current = " + current.element);

      next = current;

      nextnext = next.next;

         while (nextnext) {

          console.log("Nextnext = " + nextnext.element);

           if (nextnext.element === current.element) {
             console.log("Duplicate found");
             next.next = nextnext.next; //delete orignial nextnext, which was a duplicate
             this.length--;
           }
           else {
             next = nextnext;
           }
           nextnext = nextnext.next;
         }

         current = current.next;
     }

 }
