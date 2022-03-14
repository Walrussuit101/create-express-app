import { Request, Response, NextFunction } from 'express';
import { userService } from '../services';
import { userInterfaces } from '../utils/interfaces';

/**
 * Get a specific user by id from route params
 */
export const get = (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
        const userId = parseInt(req.params.id);

        const user = userService.getById(userId);

        if (user) return res.json(user);

        return res.status(404).send();
    } catch(e) {
        return next(e);
    }
}

/**
 * Get all users
 */
export const all = (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
        const users = userService.getAll();
        return res.json(users);
    } catch(e) {
        return next(e);
    }
}

/**
 * Remove a specific user by id
 */
export const deleteUser = (req: Request, res: Response, next: NextFunction): Response | void => {
    try{
        const userId = parseInt(req.params.id);
        userService.deleteById(userId);

        return res.status(200).send();
    } catch(e) {
        return next(e);
    }
}

/**
 * Update a user given an updated representation of said user
 */
export const update = (req: Request, res: Response, next: NextFunction): Response | void => {
    try{
        const newUserFields = req.body as userInterfaces.userFields;

        const updatedUser = userService.update(newUserFields);

        if (!updatedUser) {
            return res.status(404).send();
        }

        return res.json(updatedUser);
    } catch(e) {
        return next(e);
    }
}