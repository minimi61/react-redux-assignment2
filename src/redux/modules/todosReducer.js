import { v4 as uuidv4 } from "uuid";

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// let nextId = 3

export const addTodo = (data) => (
	{ type: ADD_TODO,
		data: {
		id:  uuidv4(),
		title: data.title,
		body: data.body,
		isDone: false
	}}
)

export const deleteTodo = (id) => (
	{ type: DELETE_TODO,
		id
	}
)

export const toggleTodo = (id, isDone) => (
	{ type: TOGGLE_TODO,
		id,
		isDone
	}
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
		isDone: true
	}
]

//reducer
export default function todosReducer(state = initialState, action){
	switch (action.type) {

		case ADD_TODO:
			state = [...state, action.data]
			return state
		
		case DELETE_TODO:
			state = [...state].filter(todo => todo.id !== action.id)
			return state
		
		case TOGGLE_TODO:
			state = [...state].map((todo) => 
				todo.id === action.id ?
					{...todo, isDone: !todo.isDone} : todo
			)
			return state
		
    default:
      return state;
	}
}
