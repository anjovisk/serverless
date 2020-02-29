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

const Order = new Schema ({
    orderNumber: { 
        type: String, 
        required: true 
    },
    trackingNumber: { 
        type: String, 
        required: true 
    },
    registrationDate: { 
        type: Date,
        required: true 
    },
    lastUpdate: { 
        type: Date,
        required: false 
    },
    status: { 
        type: String, 
        required: true,
        enum: ['POSTED', 'ON_ROUTE', 'OUT_FOR_DELIVERY', 'DELIVERY_FAILED', 'DELIVERED', 'RETURNING', 'RETURNED'],
        default: 'POSTED'
    }, 
    movements: {
        type: [Tracking],
        default: undefined
    }
});

module.exports = mongoose.model('Order', Order);