export const usersData = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 22, email: 'charlie@example.com' },
    { id: 4, name: 'Diana', age: 28, email: 'diana@example.com' }
];

// extracting single Type;

export type userTypes = typeof usersData[number]