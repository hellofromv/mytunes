// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function() {
    this.fetch({reset: true});   
  },

  parse: function(response) {
    return response.results;
  }

});

// var Songs = Backbone.Collection.extend({

//   model: SongModel,

//   initialize: function() {
    
//     this.fetch({reset: true});
//   },

//   fetch: function() {
//     var context = this;
//     $.ajax({
//       url: 'https://api.parse.com/1/classes/songs/',
//       type: 'GET',
//       contentType: 'application/json',
//       //data: { order: '-createdAt'},
//       success: function(data) {
//         data.results.forEach(function(song) {
//           context.add(song);
//         });
//       },
//       error: function(data) {
//         console.error('chatterbox: Failed to fetch messages');
//       }
//     });
//   }

// });










