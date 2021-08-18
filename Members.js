import mongoose  from 'mongoose'

const Member = new mongoose.Schema({
    member: {type: String, required: true},
    title: {type: String, required: true},
    income: {type: Number, required: true},
    photo: {type: String}
})

export default mongoose.model('Member', Member)