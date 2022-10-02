const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrackToPlaylist: function(playlistId, trackId) {
    this.playlists[playlistId].tracks.push(trackId);
    return;
  },
  printPlaylists: function() {

    let list = '';
    const playlistKeys = Object.keys(library.playlists);  //['p01','p02']
    for (let keys of playlistKeys) {
      let playlistValues = this.playlists[keys];
      list += `${playlistValues.id}: ${playlistValues.name} - ${playlistValues.tracks.length} tracks \n`;
    }
    return list;
  },
  printTracks: function() {
    let list = '';
    const tracksKeys = Object.keys(library.tracks);
    for (let keys of tracksKeys) {
      let trackValues = this.tracks[keys];
      list += `${trackValues.id}: ${trackValues.name} by ${trackValues.artist} (${trackValues.album})  \n`;
    }
    return list;
  },
  printPlaylist: function(playlistId) {
    let list = '';
    const tracksKeys = Object.keys(library.tracks);
    const playlistKeys = Object.keys(library.playlists);
    for (let keys of playlistKeys) {
      if (keys === playlistId) {
        let playlistValues = library.playlists[keys];
        list += `${playlistValues.id}: ${playlistValues.name} - ${playlistValues.tracks.length} tracks \n`;
        let tracksForPlaylist = playlistValues.tracks;
        for (let keys1 of tracksKeys) {
          for (let keys2 of tracksForPlaylist) {
            if (keys1 === keys2) {
              let trackValues = library.tracks[keys1];
              list += `${trackValues.id}: ${trackValues.name} by ${trackValues.artist} (${trackValues.album})  \n`;
            }

          }
        }
      }
    }
    return list;
  },
  addTrack: function(name, artist, album) {
    const uId = this.generateUid();
    this.tracks[uId] = {
      id: uId,
      name: name,
      artist: artist,
      album: album
    };
    return this.tracks;
  },
  addPlaylist: function(name) {
    const uId = this.generateUid();
    this.playlists[uId] = {
      id: uId,
      name: name,
      tracks: []
    };
    return this.playlists;
  }
};
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////



// const tracksKeys = Object.keys(library.tracks);       // ['t01','t02','t03']
// const tracksKeys = Object.keys(library.tracks);       // ['t01','t02','t03']
// const tracksKeys = Object.keys(library.tracks);       // ['t01','t02','t03']

// const printPlaylists = function(library) {

//   let list = '';
//   for (let keys of playlistKeys) {
//     let playlistValues = library.playlists[keys];
//     list += `${playlistValues.id}: ${playlistValues.name} - ${playlistValues.tracks.length} tracks \n`;

//   }
//   return list;
// };
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function (library) {
//        let list = '';
//        for (let keys of tracksKeys) {
//               let trackValues = library.tracks[keys];
//               list += `${trackValues.id}: ${trackValues.name} by ${trackValues.artist} (${trackValues.album})  \n`;

//        }
//        return list;
// };
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// const printPlaylist = function (playlistId) {
//        let list = '';
//        for (let keys of playlistKeys) {
//               if (keys === playlistId) {
//                      let playlistValues = library.playlists[keys];
//                      list += `${playlistValues.id}: ${playlistValues.name} - ${playlistValues.tracks.length} tracks \n`;
//                      let tracksForPlaylist = playlistValues.tracks;
//                      for (let keys1 of tracksKeys) {
//                             for (let keys2 of tracksForPlaylist) {
//                                    if (keys1 === keys2) {
//                                           let trackValues = library.tracks[keys1];
//                                           list += `${trackValues.id}: ${trackValues.name} by ${trackValues.artist} (${trackValues.album})  \n`;
//                                    }

//                             }
//                      }
//               }
//        }
//        return list;
// };
// // adds an existing track to an existing playlist
// const addTrackToPlaylist = function (playlistId, trackId) {
//        library.playlists[playlistId].tracks.push(trackId);
//        return;
// };

// generates a unique id
// // (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function () {
//        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// };

// // adds a track to the library
// const addTrack = function (name, artist, album) {
//        const uId = generateUid();
//        library.tracks[uId] = {
//               id: uId,
//               name: name,
//               artist: artist,
//               album: album
//        };
//        return library.tracks;
// };

// // adds a playlist to the library
// const addPlaylist = function (name) {
//        const uId = generateUid();
//        library.playlists[uId] = {
//               id: uId,
//               name: name,
//               tracks: []
//        };
//        return library.playlists;
// };
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function (query) {

// };