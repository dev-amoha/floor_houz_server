import { LookupModel } from "../product/models/lookup.model";

export class LookupController{

    constructor(){

    }

    async getLookups(req,res){
        const output = await LookupModel.getModel().findAll();
        return res.send(output);
    }
}