import { Request, Response, NextFunction } from 'express';
import { userService } from '../services';

/**
 * Get a specific user by id from route params
 */
export const get = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
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
export const all = (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const users = userService.getAll();
        return res.json(users);
    } catch(e) {
        return next(e);
    }
}