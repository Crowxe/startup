class Actor{
  constructor(nombre, edad){
      this.name=nombre;
      this.age=edad;
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
  salute(){
    console.log("Hi i'm: "+this.name + " I'm " + this.age);
  }
}
