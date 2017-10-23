
Vue.component('todo-list', {
    template: `
        <table class="table is-fullwidth">
            <tbody>
                <tr v-for="todo in todos">
                    <td> {{ todo }} </td>
                    <td>
                        <a  href="#" 
                            class="button is-pulled-right" 
                            @click.prevent="done(index)"> Done </a>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    methods: {
        done: function(index) {
            this.$emit('done', index)
        }
    }
})
