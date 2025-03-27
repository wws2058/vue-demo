/*
任意组件通信的方法有事件总线、消息发布订阅、vuex, 这里使用vuex
*/

import { createStore } from "vuex";
import { nanoid } from "nanoid";

export default createStore({
  state: {
    todos: [
      { id: nanoid(), name: "睡觉", done: true, editable: false },
      { id: nanoid(), name: "吃饭", done: false, editable: true },
      { id: nanoid(), name: "学习", done: false, editable: false },
    ],
  },
  mutations: {
    addTodo(state, todoMsg) {
      let msg = todoMsg.trim();
      if (!msg) {
        alert("输入的待办事项为空, 检查后重新输入!!!");
        return;
      }
      state.todos.unshift({
        id: nanoid(),
        name: msg,
        editable: false,
        done: false,
      });
    },
    delTodo(state, id) {
      confirm("确认删除待办事项吗?") &&
        (state.todos = state.todos.filter((todo) => todo.id !== id));
    },
    editTodo(state, payload) {
      state.todos.forEach((todo) => {
        if (todo.id === payload[0]) {
          todo.editable = payload[1];
          if (payload[2]) {
            confirm("确认更新待办事项吗?") && (todo.name = payload[2]);
          }
        }
      });
    },
    selectTodos(state, done) {
      state.todos.forEach((todo) => {
        todo.done = done;
      });
    },
  },
  getters: {
    countDoneTodos(state) {
      return state.todos.filter((todo) => todo.done).length;
    },
    countTodos(state) {
      return state.todos.length;
    },
    isAllFinished(state) {
      return state.todos.every((todo) => todo.done);
    },
  },
});
