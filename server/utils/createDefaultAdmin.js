const User = require('../models/User');

const createDefaultAdmin = async () => {
  try {
    // Check if any admin user exists
    const adminExists = await User.findOne({ role: 'admin' });
    
    if (!adminExists) {
      // Create default admin user
      await User.create({
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'admin123', // This will be hashed by the User model's pre-save hook
        role: 'admin'
      });
      console.log('Default admin user created successfully');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

module.exports = createDefaultAdmin; 