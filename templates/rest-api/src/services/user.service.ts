import { userInterfaces } from '../utils/interfaces';

let USERS: userInterfaces.userFields[] = [
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
    },
    {
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
 * @returns userFields | undefined
 */
export const getById = (userId: number): userInterfaces.userFields | undefined => {
    const user = USERS.find(user => {
        return user.id === userId
    });

    return user;
}

/**
 * Get all users
 * 
 * @returns userFields[] | []
 */
export const getAll = (): userInterfaces.userFields[] | [] => {
    return USERS;
}

/**
 * Remove user by id
 * 
 * @param userId number
 */
export const deleteById = (userId: number): void => {
    USERS = USERS.filter(user => {
        return user.id !== userId
    });
}

/**
 * Update a user
 * 
 * @param updatedUser Updated user object
 * @returns userFields | undefined
 */
export const update = (updatedUser: userInterfaces.userFields): userInterfaces.userFields | undefined => {
    const userIndex = USERS.findIndex(user => {
        return user.id === updatedUser.id
    });

    if (userIndex === -1) return undefined

    USERS[userIndex] = updatedUser;
    return USERS[userIndex];
}

    
