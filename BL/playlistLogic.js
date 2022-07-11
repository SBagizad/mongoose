const playlistController = require("../DL/controller/playlistController")
// const playlistLogic = require('../BL/playlistLogic')

exports.creatPlaylist = async (data) => {
    const createPL = await playlistController.create(data);
    console.log("createPL ");
    const userToUpdate = await userController.readOne({ _id: "62c7057ee2b6aa01a138af02" });
    const elmtToPush = { _id: createPL._id };
    userToUpdate.PL.push(elmtToPush);
    console.log('userToUpdate', userToUpdate);
    userToUpdate.save();
}
