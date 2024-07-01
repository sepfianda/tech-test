
import { AboutController } from '@/controllers/about.controller';
import { verifyToken } from '@/lib/jwt';
import { uploader } from '@/lib/uploader';
import { Router } from 'express';

export class AboutRouter {
  private router: Router;
  private aboutController: AboutController;

  constructor() {
    this.aboutController = new AboutController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/',
      verifyToken,
      uploader('IMG', '/images').array('thumbnail', 1),
      this.aboutController.createAbout,
    );
    this.router.get('/:id', this.aboutController.getAboutController);
  }

  getRouter(): Router {
    return this.router;
  }
}