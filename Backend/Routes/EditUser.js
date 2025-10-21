const Route = require('express').Router();
const userModel = require('../DataBase/UserSchema');
const verify = require('../Middlewares/Verify');
const storageEngine = require('../Middlewares/Multer');
const fs = require('fs').promises;
const path = require('path');

Route.post('/', verify, storageEngine.single('profilePic'), async (req, res) => {
  try {

    // Extract data from req.body
    const { id, Name, Number, Email, Address, Designation, Role, Features, Note } = req.body;

    // Validate required fields
    if (!id) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Prepare update object
    const updateData = {
      Name,
      Number,
      Email,
      Address,
      Designation,
      Role,
      Features: Features ? JSON.parse(Features) : [], // Parse Features JSON string to array
      Note,
    };

    // Handle profile picture if uploaded
    if (req.file) {
      updateData.Image = `${process.env.SERVER_URL}/upload/${req.file.filename}`;
    }

    // Find and update user
    const oldDetails = await userModel.findById(id);
    if (!oldDetails) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user in database
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true } // Return updated document, apply schema validators
    );

    // Delete old profile picture if it exists and a new one was uploaded
    if (req.file && oldDetails.Image) {
      const oldPic = oldDetails.Image.split('/');
      const filename = oldPic[oldPic.length - 1];
      const oldPath = path.join(__dirname, '../Uploads', filename);
      try {
        await fs.access(oldPath); // Check if file exists
        await fs.unlink(oldPath); // Delete old file
        console.log(`Deleted old profile picture: ${oldPath}`);
      } catch (err) {
        console.warn(`Failed to delete old profile picture: ${oldPath}`, err);
        // Continue execution even if deletion fails
      }
    }

    // Send success response with updated user data
    res.status(200).json({
      message: 'Profile edited successfully',
      user: updatedUser,
    });
  } catch (err) {
    console.error('Error editing user:', err);
    res.status(500).json({ message: 'Server error, try again later' });
  }
});

module.exports = Route;