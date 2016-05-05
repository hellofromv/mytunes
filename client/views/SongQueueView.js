// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // this.render();
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    // this.subView = new SongQueueEntryView();
    // this.subView();
    // this.$el.find('tr').append(this.collection.map(function(song) {
    //   // return '<td>' + song.get('title') + '</td>';
    //   this.subView();
    // }));
    // var html = [
    //   '<td>',
    //     this.model.get('artist'),
    //     this.model.get('title'),
    //   '</td>'
    // ].join('');


    return this.$el;
  }

});
