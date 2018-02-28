//Not attached yet

const movie1 = new Movie('Interstellar', 2014 , 180);
const movie2 = new Movie('Pulp Fiction', 1994 , 180);


const actor1 = new Actor('Samuel Jackson', 50);
const actor2 = new Actor('Matthew McConaughey', 40);
const actor3 = new Actor('John Travolta', 45);
const actor4 = new Actor('Uma Thurman', 39);
const actor5 = new Actor('Michael Kayne', 74);
const actor6 = new Actor('Marion Cotillard', 28);

movie1.addCast(actor1);
movie1.addCast(actor2);
movie1.addCast(actor3);
movie1.addCast(actor4);

movie2.addCast(actor1);
movie2.addCast(actor2);
movie2.addCast(actor3);
movie2.addCast(actor4);
movie2.addCast(actor5);

movie1.play();
