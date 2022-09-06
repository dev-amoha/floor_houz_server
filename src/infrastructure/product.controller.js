import { ProductModel } from "../product/models/product.model";

export class ProductController {

    constructor() { }

    async save(product) {
        return ProductModel.getModel().upsert(product);
    }

    async get() {
        return ProductModel.getModel().findAll();
    }

    async getById(id) {
        return ProductModel.getModel().get({
            where: {
                id
            }
        })
    }
}