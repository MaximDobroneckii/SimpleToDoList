


Vue.createApp({
    data(){
        return{
			title: 'To Do List',
			new_task: {
				title: '',
				desc: '',
			  },
			  tasks : [
				{
				  title: 'Изучить основы vue.js',
				  desc: 'описание',
				},
				{
				  title: 'Прочитать книгу "Vue.js"',
				  desc: 'описание',
				}
			  ]

        };
    },

	methods:{
		addTask() {
			this.tasks.push({
				title: this.new_task.title,
         		 desc: this.new_task.desc,
        		done: false
			});
			this.new_task.title='';
        	this.new_task.desc='';
		},
		removeTask(task) {
			const index = this.tasks.indexOf(task);
			this.tasks.splice(index,1);
		},
		removeAllTasks(tasks) {
			this.tasks.splice(this.length)
		}
	}
}).mount('#app');