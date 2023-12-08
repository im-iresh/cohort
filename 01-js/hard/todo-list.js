/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
class Todo {
  constructor(){
    this.lst=[];
  }
  add(todo){
    if(todo!=null)
      this.lst.push(todo);
  }
  remove(index){
    if(index>=0 && index<this.lst.length){
      this.lst.splice(index,1);
    }
  }
  update(index, newTodo){
    if(index>=0 && index<this.lst.length && newTodo!=null){
      this.lst[index]=newTodo;
    }
  }
  getAll(){
    return this.lst;
  }
  get(index){
    if(index>=0 && index<this.lst.length){
      return this.lst[index]
    }
    return null
  }
  clear(){
    this.lst=[]
  }
}


module.exports = Todo;
