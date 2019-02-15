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


