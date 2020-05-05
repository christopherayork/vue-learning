var app = new Vue({
  el: '#app',
  data: {
    message: 'HELLO VUE!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleDateString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn Vue' },
      { text: 'Learn Angular' },
      { text: 'Learn .NET' }
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
  el: '#app-7',
  data: {
    message: 'Blah blah',
    groceryList: [
      { id: 0, text: 'Veggies' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'SOME STUFF' }
    ]
  }
});

var watchExampleVM = new Vue({
  el: '#app-8',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...';
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if(this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark!';
        return;
      }
      this.answer = 'Thinking...';
      let vm = this;
      axios.get('https://yesno.wtf/api')
        .then(res => vm.answer = _.capitalize(res.data.answer))
        .catch(err => vm.answer = 'Error! Could not reach the API' + err);
    }
  }
});



var app9 = new Vue({
  el: '#app-9',
  data: {
    isAmazing: true
  }
});

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
});

var app10 = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      { id: 1, title: 'Do the dishes' },
      { id: 2, title: 'Take out the trash' },
      { id: 3, title: 'Mow the lawn' }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = ''
    }
  }
});
