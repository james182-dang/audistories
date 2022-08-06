const { Schema, model } = require('mongoose');
const bandSchema = require('./Band');

const albumSchema = new Schema(
    {
        albumName: {
            type: String,
            required: 'Album Name'
        },
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review'
            }
        ],
        band: {
            type: Schema.Types.ObjectId,
            ref: 'Band'
        }
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

albumSchema.virtual('reviewCount').get(function () {
    return this.reviews.length;
});

const Album = model('Album', albumSchema);

module.exports = Album;