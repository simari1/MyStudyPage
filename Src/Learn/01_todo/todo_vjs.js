var app = new Vue({
    el: "#app",
    data: {
        num: 0,
        todos: [],
        v_name: "",
        v_title: "",
        v_memo: ""
    },
    methods: {
        addTask: function() {
            this.num++;

            this.todos.push({
                no: this.num,
                name: this.v_name,
                title: this.v_title,
                memo: this.v_memo
            });
        },
        removeTask: function(index) {
            console.log(index);
            this.todos.splice(index, 1);
        }
    }
});