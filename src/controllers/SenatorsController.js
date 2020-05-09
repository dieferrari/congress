import SenatorsService from '../services/SenatorsService';
import { paginateItems } from '../utils';
export default class SenatorsController {
    async getAllSenators(req, res, next){
        try {
            const senatorsService = new SenatorsService()
            let senators = await senatorsService.getAllSenators()
            let paginatedSenators = paginateItems(senators, 10)
            return paginatedSenators
        } catch(e) { console.log(e) }
    }
}
