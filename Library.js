function Library (name, creator) {
  this.name = name;
  this.creator = creator;

  this.playlists = [];

  this.addPL = function(newPL) {
    this.playlists.push(newPL)
  }
}

function Playlist (name) {
  this.name = name;

  this.tracks = [];

  this.addTr = function(newTr) {
    this.tracks.push(newTr);
  }
  // overallRating(this.tracks) {
  //   // return sum of track ratings / num of tracks
  // }
  // totalDuration(this.tracks) {
  //   // return sum of track lengths
  // }
}

function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const shmoosLibrary = new Library('dark80s', 'Shmoo');
const siouxsiePL = new Playlist('Siouxsie');
shmoosLibrary.addPL(siouxsiePL);
siouxsiePL.addTr(new Track('Melt', '5', '3:55'));
siouxsiePL.addTr(new Track('Swimming Horses', '5', '4:04'));
console.log(shmoosLibrary);
console.log(shmoosLibrary.playlists);
console.log(shmoosLibrary.playlists[0].tracks);



