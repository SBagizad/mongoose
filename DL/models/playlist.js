const mongoose = require('mongoose');
const playlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },

    title: {
        type: String,
        required: true
    },

    song_id: [{
        type: String,
    }]
})

// export const PLAYLIST_MODEL_NAME = "playlist"

const playlistModel = mongoose.model("playlist", playlistSchema);
module.exports = playlistModel
// { playlistSchema, PLAYLIST_MODEL_NAME }
// module.exports.userModel = userModel

