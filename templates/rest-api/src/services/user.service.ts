const USERS: user[] = [
    {
        id: 1,
        firstName: "Test",
        lastName: "Testington",
        email: "test@test.com"
    },
    {
        id: 2,
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@test.com"
    },{
        id: 3,
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@test.com"
    }
];

/**
 * Get a user based on id
 * 
 * @param userId Id of user to get
 * @returns User | undefined
 */
export const getById = (userId: number): User | undefined => {
    const user = USERS.find(user => {
        return user.id === userId
    });

    return user;
}

/**
 * Get all users
 * 
 * @returns User[] | []
 */
export const getAll = (): User[] | [] => {
    return USERS;
}