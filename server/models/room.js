const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const roomSchema = new Schema({
  roomName: { type: String, unique: true, uppercase: true },
});


// roomSchema.pre('create', function()=>{
//     const storage = this.props.rooms;
//     storage.push(enteredRoom);
//     this.props.setState({
//         rooms : storage
//     });
// })

roomSchema.methods.compareRoomName = function(candidateRoomName) {
    for(let i =0;i<this.props.rooms.length;i++){
        if (candidateRoomName == this.props.rooms[i]){
            return candidateRoomName;
        }
    }
}

// Create the model class
const ModelClass = mongoose.model('roomName', roomSchema);

// Export the model
module.exports = ModelClass;