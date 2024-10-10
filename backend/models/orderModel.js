import mongoose, { mongo } from "mongoose"; 
// Note: 'mongo' is imported but not used, it can be safely removed to clean up the code.

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        require: true // should be 'required' instead of 'require' to avoid validation issues.
    },
    status: {
        type: String,
        default: "Food Processing" // Default status ensures every new order starts with 'Food Processing', useful for tracking order progress.
    },
    date: {
        type: Date,
        default: Date.now //se `Date.now` without parentheses to ensure it dynamically generates the current date when a new document is created.
    },
    payment: {
        type: Boolean,
        default: false // Default is false, marking new orders as unpaid until explicitly changed.
    }
});


const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
