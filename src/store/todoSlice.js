import {createSlice} from '@reduxjs/toolkit';
const todoSlice=createSlice({
    name:'todos',
    initialState:{
        todoList: [],
        filter: 'all'  // 筛选状态 all / undone / done
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todoList.push(action.payload);
        },
        deleteTodo:(state,action)=>{
            state.todoList=state.todoList.filter(todo=>todo.id!==action.payload);
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            // 空白内容直接不修改
            const text = newText.trim()
            if (!text) return
            const target = state.todoList.find(item => item.id === id);
            if (target) {
                target.text = text;
            }
        },
        toggleTodo: (state, action) => {
            const target = state.todoList.find(item => item.id === action.payload);
            if (target) {
                target.done = !target.done;
            }
        },
        clearDoneTodos: (state) => {
            state.todoList = state.todoList.filter(todo => !todo.done);
        },
        //切换筛选的action
        changeFilter(state, action) {
            state.filter = action.payload
        }

    }
});

export const { addTodo, deleteTodo, editTodo, toggleTodo, clearDoneTodos,changeFilter } = todoSlice.actions;
export default todoSlice.reducer;