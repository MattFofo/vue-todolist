const app = new Vue({
    el: '#root',
    data: {
        newTodo: 
            {
                todoText: '',
                done: false

            },
        
        arrTodo: [
            {
                todoText: 'fare esercizio js',
                done: false
            },
            {
                todoText: 'fare spesa',
                done: false
            },
            {
                todoText: 'fare cose',
                done: false
            },
            {
                todoText: 'fare altre cose',
                done: false
            },
        ]
    },
    methods: {
        deleteTodo(indexTodo) {
            this.arrTodo.splice(indexTodo, 1)
        },
        addNewTodo() {
            if (this.newTodo.todoText != '') {
                
                this.newTodo = {
                    todoText: '',
                    done: false
                }
                this.arrTodo.unshift(this.newTodo);
            }
        } 
    }

})
