import { ProductController } from '../product.controller';

export class ProductRoutes {
  constructor(router) {
    this.jobController = new ProductController();
    router.post('/products', this.save);
    router.get('/products', this.get);
  }

  save = async (req, res) => {
    try {
      const output = await this.jobController.save(req.body);
      res.status(200).send(output);
    } catch (ex) {
      res.status(500).send('Something went wrong');
    }
  };

  get = async (req, res) => {
    try {
      const output = await this.jobController.get();
      res.status(200).send(output);
    } catch (ex) {}
  };
}
