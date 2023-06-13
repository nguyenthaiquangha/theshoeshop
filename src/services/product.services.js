import axios from 'axios';
export const getProductByIdApi = async (id) => {

	try {
		const resp = await axios.get(
			`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
		);

		return resp;
	} catch (err) {

		throw new Error(err);
	}
};
