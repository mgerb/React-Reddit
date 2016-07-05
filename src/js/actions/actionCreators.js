import {STORE_POST} from './constants';

export function storePost(index, data){
	return {
		type : STORE_POST,
		index,
		data
	}
}