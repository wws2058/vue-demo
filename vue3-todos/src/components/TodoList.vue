<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <template v-if="todo.editable">
                <input type="text" v-model="todo.name" :class="animationCss">
                <span :class="animationCss">
                    <button @click="editTodo([todo.id, false, todo.name])">确认</button>
                    <button @click="editTodo([todo.id, false])">取消</button>
                </span>
            </template>
            <template v-else>
                <span :class="animationCss">
                    <input type="checkbox" :id="todo.id" v-model="todo.done">
                    <label :for="todo.id">{{ todo.name }}</label>
                </span>
                <span :class="animationCss">
                    <button @click="delTodo(todo.id)">删除</button>
                    <button @click="editTodo([todo.id, true])">编辑</button>
                </span>
            </template>
        </li>
    </ul>
</template>
<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: "TodoList",
    computed: {
        ...mapState(["todos"]),
        animationCss() {
            let classes = ["animate__animated", "animate__fadeIn"];
            return classes.join(' ');
        }
    },
    methods: {
        ...mapMutations(["editTodo"]),
        delTodo(id) {
            // vuex commit触发mutation
            this.$store.commit("delTodo", id);
        },
    },
};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
}

li {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
}

button {
    border: none;
    opacity: 0.5;
    background-color: beige;
    padding: 0 5px;
}
</style>