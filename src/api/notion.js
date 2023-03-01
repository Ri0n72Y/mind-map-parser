import axios from "axios";

/**
* 
* @param {string} auth
* @param {string} id 
* @returns Promise<ListBlockChildrenResponse>
*/
export const blocks = (auth, id) => axios.get(`https://api.notion.com/v1/blocks/${id}/children`, {
	headers: {
		Authorization: `Bearer ${auth}`,
	},
	params: {
		page_size: 100,
	},
})
