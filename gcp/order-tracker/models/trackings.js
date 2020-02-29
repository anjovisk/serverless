const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tracking = new Schema ({
    trackingId: { 
        type: String, 
        required: true 
    },
    details: { 
        type: String,
        required: true 
    },
    date: { 
        type: Date,
        required: true 
    },
    movement: { 
        type: String, 
        required: true,
        enum: ['POSTED', 'MOVEMENT', 'OUT_FOR_DELIVERY', 'DELIVERY_FAILED', 'DELIVERED', 'RETURNED']
    }
});

module.exports = mongoose.model('Tracking', Tracking);