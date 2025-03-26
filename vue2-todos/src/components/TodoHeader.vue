<template>
    <input type="text" placeholder="请输入待办事项" v-model.lazy="todoMsg" @keyup.enter="addTodo">
</template>
<script>

export default {
    name: "TodoHeader",
    data() {
        return {
            todoMsg: ""
        };
    },
    // 此处要给todos添加待办事项, 不能直接在本组件操作props传过来的todos, 遵循单向数据流
    // props: {
    //     "todos": Array,
    //     "addTodo": Function
    // },
    methods: {
        addTodo() {
            this.$store.commit("addTodo", this.todoMsg);
            this.todoMsg = "";
        }
    }
};
</script>
<style scoped>
input {
    box-sizing: border-box;
    width: 100%;
    padding: 0;
}
</style>