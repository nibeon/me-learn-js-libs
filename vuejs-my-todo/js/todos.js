// ViewModel
var Todos = Vue.extend({
	name: 'todos'
});

var vm = new Todos({
	el: '#todos',
	data: {
		title: 'Мой список дел',
		tasks: [
			{
				done: true,
				content: 'Learn Java Script'
			},
			{
				done: true,
				content: 'Learn Less.js'
			},
			{
				done: false,
				content: 'Learn Vue.js'
			},
			{
				done: false,
				content: 'Learn Riot.js'
			},
			{
				done: false,
				content: 'Learn Typescript or another language-compiler to JS'
			}
		],
		newTask: '',
		editTask: null,
	},
	/* filtres: {
		openTasks: function() {
			return this.tasks.filter(function(item) {
				return item.done;
			});
		}
	},*/	
	methods: {
		addTask : function(e) {
			e.preventDefault();
			this.tasks.push({ content : this.newTask, done : false});
			this.newTask = '';
		},
		removeTask : function(index) {
			this.tasks.splice(index, 1);
		}
	},
	
	ready : function() {
		console.log('VueModel ready!')
	}
});

vm.$mount('#todos');