const { required } = require("joi")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"]
    }
}, {timestamps: true})

adminSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
})

adminSchema.methods.comparePassword = async function(matchedPassword) {
    return await bcrypt.compare(matchedPassword, this.password)
}

const Admin = mongoose.model("Admin", adminSchema)

module.exports = Admin