function Library (name, creator) {
  this.name = name;
  this.creator = creator;

  this.playlists = [];
}

function Playlist (name) {
  this.name = name;

  this.tracks = [];

  overallRating(this.tracks) {
    // return sum of track ratings / num of tracks
  }
  totalDuration(this.tracks) {
    // return sum of track lengths
  }
}

function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;

}