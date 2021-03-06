import type from '../actions/type';

const initialState = {
	data: []
}

export default (state=initialState, action)=>{
		switch (action.type) {
			case type.GET_CREDITOS_FULFILLED:
					const {cast} = action.payload.data;
					return Object.assign({}, state, {
						data: cast
					})
			default:
					return state
		}
}
