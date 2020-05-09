import MembersService from '../services/MembersService';

export default class MembersController {
    async getAllMembers(req, res, next){
        try {
            const mermbersService = new MembersService()
            let members = await mermbersService.getAllMembers()
            console.log(members)
            //return members
        } catch(e) { console.log(e) }
    }
}
