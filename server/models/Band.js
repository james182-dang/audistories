const { Schema, model } = require('mongoose');

const bandSchema = new Schema(
    {
        name: {
            type: String,
            required: 'Band Name'
        },
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

bandSchema.virtual('albumCount').get(function() {
    return this.albums.length;
});

const Band = model('Band', bandSchema);

module.exports = Band;