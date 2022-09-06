import { LookupModel } from "./lookup.model";
import { ProductModel } from "./product.model";

export function initModels(dbConnection) {
    new LookupModel(dbConnection);
    new ProductModel(dbConnection);
}