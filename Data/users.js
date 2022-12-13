import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin user',
    email: 'admin@proshop.com',
    password: bcrypt.hashSync('123456', 12),
    isAdmin: true,
  },
  {
    name: 'John user',
    email: 'john@proshop.com',
    password: bcrypt.hashSync('123456', 12),
  },
  {
    name: 'Doe user',
    email: 'doe@proshop.com',
    password: bcrypt.hashSync('123456', 12),
  },
];

export default users;
