import { Router } from 'express';
import { prisma } from '../../../prisma/generated/prisma-client';
import * as MW from '../../middleware/index';
import createWaiter from './post/createWaiter'



const appRouter: any = Router();


//Get Methods



//Post Methods


//appRouter.post('/createWaiter', createWaiter);


//Patch Methods



export default appRouter;
