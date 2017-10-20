
Vue.component('todo-app', {
    template: `
        <section class="section"> 
            <div class="content"> 
                <h1 class="has-text-centered"> Todo App </h1> 
            </div> 
            <todo-form @add="addTodo"></todo-form> 
            <hr /> 
            <todo-list :todos="todos" @done="deleteTodo"></todo-list> 
        </section>
    `,
    data: function() {
        return {
            todos: []
        }
    },
    methods: {
        addTodo: function(todo) {
            this.todos.push(todo)
        },
        deleteTodo: function(index) {
            this.todos.splice(index, 1)
        }
    }
})