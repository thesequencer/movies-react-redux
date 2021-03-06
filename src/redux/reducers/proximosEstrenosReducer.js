import type from '../actions/type';

const initialState = {
	data: []
}

export default (state=initialState, action)=>{
		switch (action.type) {
			case type.GET_PROXIMOS_ESTRENOS_FULFILLED:
					const {results} = action.payload.data;
					return Object.assign({}, state, {
						data: results
					})
			default:
					return state
		}
}
