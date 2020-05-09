import SenatorsService from '../services/SenatorsService';

export default class SenatorsController {
    async getAllSenators(req, res, next){
        try {
            const senatorsService = new SenatorsService()
            let senators = await senatorsService.getAllSenators()
            return senators
        } catch(e) { console.log(e) }
    }
}
