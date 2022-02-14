import express from 'express';
import { userController } from '../controllers';

const router = express.Router({mergeParams: true});

router.route('/:id').get(userController.get);
router.route('/').get(userController.all);

export default router;