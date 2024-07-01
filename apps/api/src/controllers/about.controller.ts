import { createAboutService } from '@/services/about/create-about.service';
import { getAboutService } from '@/services/about/get-about';
import { NextFunction, Request, Response } from 'express';


export class AboutController {
  async createAbout(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];

      if (!files?.length) {
        throw new Error('no file uploaded');
      }

      const result = await createAboutService(req.body, files[0]);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getAboutController(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const result = await getAboutService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

}