// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // this.render();
    this.collection.on('add remove', this.render, this);
  },

  render: function() {

    console.log(this.$el);
    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
