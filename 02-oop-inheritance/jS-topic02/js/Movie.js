class Movie extends EventEmitter{
  constructor(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];

  }

  play(){
    console.log("Playing: "+this.title);
  }

  pause(){
    console.log(this.title + " paused");
  }

  resume(){
    console.log("Resuming: "+this.title);
  }

  addCast(castedActors){
    for (let i=0; i<cast.length;i++){
            this.cast.push(castedActors[i])
          }
  }

  seeCast(){
    for(let i=0; i<this.cast.length; i++){
      console.log("Cast: " + this.cast[i]);
    }
  }
}
