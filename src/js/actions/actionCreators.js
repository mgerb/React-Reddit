import {STORE_POST} from './constants';


function store_post(index, data){
	return {
		type : STORE_POST,
		index,
		data
	}
}