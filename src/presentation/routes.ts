import { Router } from 'express';
import { ProductRoutes } from './products/routes';




export class AppRoutes {



  static get routes() {

    const routes = Router();

    routes.use('/products', ProductRoutes.routes );

    return routes;
  }


}
