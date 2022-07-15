import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Tarun Kumawat',
        email: 'tarun@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Mark Kumawat',
        email: 'mark@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
];


export default users;