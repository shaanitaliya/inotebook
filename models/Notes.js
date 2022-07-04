const mongoose = require('mongoose');

import mongoose from 'mongoose';
const { Schema } = mongoose;

const notesSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    discription: {
        type: String,
        require: true
    },
    tag: {
        type: String
    },
    date: {
        type: String,
        default: date.now
    },

});
