<template>
    <div>
        <h3>欢迎来到待办事项管理</h3>
        <div class="todo_div">
            <TodoHeader></TodoHeader>
            <TodoList></TodoList>
            <TodoFooter></TodoFooter>
        </div>
    </div>
</template>

<script setup>
import TodoHeader from '../components/TodoHeader.vue';
import TodoList from '../components/TodoList.vue';
import TodoFooter from '../components/TodoFooter.vue';
</script>

<script>
export default {
    name: 'TodoPage'
};
</script>

<style>
* {
    font-family: 'Open Sans', sans-serif;
}

.todo_div {
    width: 400px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid brown;
}
</style>