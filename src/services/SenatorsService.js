const axios = require('axios')
const API_BASE_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export default class SenatorsService {
	async getAllSenators(){
		try {
      let response = await axios.get(`${API_BASE_URL}/116/senate/members.json`, {
        headers: {
          'X-API-Key': API_KEY
        }
      })
			return response.data.results[0].members
		} catch(e) { console.log(e) }
  }
  async getSenator(id){
		try {
      let response = await axios.get(`${API_BASE_URL}/members/${id}.json`, {
        headers: {
          'X-API-Key': API_KEY
        }
      })
			return response.data.results[0]
		} catch(e) { console.log(e) }
	}
}