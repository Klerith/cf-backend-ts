import { Router } from 'express';
import { ProductController } from './controller';




export class ProductRoutes {



  static get routes() {

    const routes = Router();
    const controller = new ProductController();

    routes.get('/', controller.findAll );


    return routes;
  }


}
