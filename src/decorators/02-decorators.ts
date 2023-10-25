function Controller(name: string) {
  
  return function <T extends {new (...args:any[]): {}}>(constructor: T ) {
    // console.log('MyFirstDecorator', constructor);
    return class extends constructor {
      urlName: string = `/${name}`;
    };
  }
}





@Controller('product')
export class ProductController {

}



@Controller('order')
export class OrderController {

}


