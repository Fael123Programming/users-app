import mockUsers from './mock_data/users.json';

const MOCK_USERS = false;

const getUsers = async onDataRetrieved => {
    let users = [];
    if (MOCK_USERS) {
        users = mockUsers;
    } else {
        const rawUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonUsers = await rawUsers.json();
        users = jsonUsers;
    }
    onDataRetrieved(users);
};

export { getUsers };
