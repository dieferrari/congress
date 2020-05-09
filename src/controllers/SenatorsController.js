import SenatorsService from '../services/SenatorsService';
export default class SenatorsController {
	async getAllSenators(){
		try {
			const senatorsService = new SenatorsService()
			let senators = await senatorsService.getAllSenators()
			return senators
		} catch(e) { console.log(e) }
	}
	async getSenator(id){
		try {
			const senatorsService = new SenatorsService()
			let senator = await senatorsService.getSenator(id)
			return senator
		} catch(e) { console.log(e) }
	}
}
