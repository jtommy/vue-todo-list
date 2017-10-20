
Vue.component('todo-form', {
    template: `
        <form @submit.prevent="add">
            <div class="field is-grouped">
                <p class="control is-expanded">
                    <input  type="text"
                            class="input"
                            v-model="text"
                            placeholder="Add todo..."
                            required />
                </p>
                <p class="control">
                    <button type="submit" class="button is-primary"> Add </button>
                </p>
            </div>
        </form>
    `,
    data: function() {
        return {
            text: ''
        }
    },
    methods: {
        add: function() {
            this.$emit('add', this.text)
            this.text = ''
        }
    }
})