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



Vue.component("task", {
    data: function() {
        return {
            numc: 0,
            todosc: [],
            v_namec: "",
            v_titlec: "",
            v_memoc: ""
        };
    },
    methods: {
        addTaskc: function() {
            this.numc++;

            this.todosc.push({
                no: this.numc,
                name: this.v_namec,
                title: this.v_titlec,
                memo: this.v_memoc
            });
        },
        removeTaskc: function(index) {
            console.log(index);
            this.todosc.splice(index, 1);
        }
    },
    template:
    // `\<div>
    // \<div class="row" v-for="(todoc, index) in todos" :key="todoc.no">
    //     \<li>{{todoc.no}}</li>
    //     \<li>{{todoc.name}}</li>
    //     \<li>{{todoc.title}}</li>
    //     \<li>{{todoc.memo}}</li>
    //     \<li><button @click="removeTaskc(index)">{{index}} 削除</button></li>
    // \</div>
    // \</div>
    // `
        `
        <div>
        hello
        </div>
    `
});
var app1 = new Vue({
    el: "#app1"
});