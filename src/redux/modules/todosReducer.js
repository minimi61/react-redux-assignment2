const ADD_TODO = 'DATA_SAVE';

let nextId = 3

export const dataSave = (data) => (
	{ type: ADD_TODO,
		data: {
		id: nextId++,
		title: data.title,
		body: data.body,
		isDone: false
	}}
)


export const initialState = [
	{
		id: 1, // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: false
	}
	,
	{
		id: 2, // id는 모두 고유값이어야 합니다.
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: false
	}
]

//reducer
export default function todosReducer(state = initialState, action){
	switch (action.type) {
		case ADD_TODO:
			state = [...state, action.data]
			console.log(state)
			return 
    // case 'DELETE_BTN':
    //   return {
    //   }
    default:
      return state;
	}
}
