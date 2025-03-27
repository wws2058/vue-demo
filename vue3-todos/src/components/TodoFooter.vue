<template>
    <div class="footer">
        <span><input type="checkbox" :checked="isAllFinished" @change="selectTodos(!isAllFinished)">已完成<b> {{
            countDoneTodos }} </b>/全部<b> {{ countTodos }} </b></span>
        <button @click="clearDoneTodos">清除完成项</button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';


export default {
    name: "TodoFooter",
    computed: {
        ...mapGetters(["countDoneTodos", "countTodos", "isAllFinished"]),
    },
    methods: {
        ...mapMutations(["selectTodos"]),
        clearDoneTodos() {
            this.selectAll = false;
            this.$store.commit("selectTodos", this.selectAll);
        }
    }
};
</script>
<style scoped>
button {
    background-color: red;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
}

.footer {
    display: flex;
    justify-content: space-between;
}
</style>