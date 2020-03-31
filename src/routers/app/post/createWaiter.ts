import { prisma } from '../../../../prisma/generated/prisma-client';

const createWaiter: any = async(req: any, res: any) => {
  console.log(req.body)
  const {waiter} = req.body;
  
  let newWaiter: any;
  try {
    newWaiter = await prisma.createWaiter(waiter);
  } catch (e) {
    console.log("error ql")
    console.log(e)
    res.status(500).send(e);
    return;
  }
  res.status(200).json(newWaiter);
};
export default createWaiter
