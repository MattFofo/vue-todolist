const app = new Vue({
    el: '#root',
    data: {
        newTodo: '',
        arrToDo: [
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
            this.arrToDo.splice(indexTodo, 1)
        } 
    }

})  