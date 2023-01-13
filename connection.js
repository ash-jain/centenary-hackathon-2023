import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema ({
    id: Number,
    title: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    age: Number,
    branch: String,
    degree: String,
    admission_year: String,
    graduation_year: String,
    job_title: String,
    contact_number: String,
    city: String,
    country: String
});

// TODO:
const userSchema = new mongoose.Schema ({
});

const Member = mongoose.model('member', memberSchema);

export { Member };