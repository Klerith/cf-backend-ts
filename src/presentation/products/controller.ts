import type { Request, Response } from 'express';



export class ProductController {

  constructor() {}


  findAll( req: Request, res: Response ) {

    res.json([
      { id: 1, name: 'Producto 1' },
      { id: 2, name: 'Producto 2' },
      { id: 3, name: 'Producto 3' },
      { id: 4, name: 'Producto 4' },
      { id: 5, name: 'Producto 5' },
      { id: 6, name: 'Producto 6' },
      { id: 7, name: 'Producto 7' },
    ])
    
  }



}