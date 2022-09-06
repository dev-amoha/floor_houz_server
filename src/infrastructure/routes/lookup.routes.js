import { LookupController } from "../lookup.controller";

export class LookupRoutes {

    constructor(router) {
        const lookupController = new LookupController();
        router.get("/lookups", lookupController.getLookups);
    }

}