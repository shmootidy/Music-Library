function convertToSeconds(string) {
  const splitNumStr = string.split(':');
  return (
    (Number(splitNumStr[0]) * 60) + Number(splitNumStr[1])
  );
}

function convertToMinSecStr(num) {
  let minutes = String(Math.floor(num / 60));
  let seconds = String(num % 60);
  return `${minutes}:${seconds}`;
}

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

  this.addTrs = function(newTrsArr) {
    newTrsArr.forEach(track => {
      this.addTr(new Track(track[0], track[1], track[2]));
    })
  }
  this.overallRating = function(PL) {
    let sumOfRatings = 0;
    PL.tracks.forEach(track => {
      sumOfRatings += track.rating;
    })
    return `The overall rating for the playlist '${PL.name}' is ${Math.round(sumOfRatings / PL.tracks.length * 100) / 100}.`;
  }
  this.totalDuration = function(PL) {
    let sumOfTrackLengths = 0;
    PL.tracks.forEach(track => {
      sumOfTrackLengths += convertToSeconds(track.length)
    })
    return `The total duration for the playlist '${PL.name}' is ${convertToMinSecStr(sumOfTrackLengths)}.`;
  }
}

function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const shmoosLibrary = new Library('dark80s', 'Shmoo');
const siouxsiePL = new Playlist('Siouxsie');
shmoosLibrary.addPL(siouxsiePL);
siouxsiePL.addTr(new Track('Melt', 5, '3:55'));
siouxsiePL.addTr(new Track('Swimming Horses', 5, '4:04'));
siouxsiePL.addTr(new Track('Hong Kong Garden', 2, '2:43'));
siouxsiePL.addTr(new Track('The Passenger', 4.5, '4:09'));
siouxsiePL.addTr(new Track('Arabian Knights', 4, '3:19'));

const newTracks = [['Staircase', 3.7, '3:01'], ['The Last Beat Of My Heart', 5, '4:34']];
siouxsiePL.addTrs(newTracks);

console.log(shmoosLibrary.playlists[0].overallRating(shmoosLibrary.playlists[0]))
console.log(shmoosLibrary.playlists[0].totalDuration(shmoosLibrary.playlists[0]))


