import { LookupRoutes } from './lookup.routes';
import { ProductRoutes } from './product.routes';

export function initRoutes(app, router) {
  new LookupRoutes(router);
  new ProductRoutes(router);
  app.use('/api', router);
}

export function handleImageUpload(req, res) {}
