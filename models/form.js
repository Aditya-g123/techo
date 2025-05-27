import mongoose, { Model, Schema } from "mongoose";

const formSchema = Schema({
    name: {type: String},
    phone: {type: Number},
    email: {type: String},
    message: {type: String},
    course: {type: String},
})

const Form = mongoose.model('form', formSchema);

export default Form;
