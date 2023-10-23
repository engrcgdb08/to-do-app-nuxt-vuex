export const state = () => ({
	tasks: []
})

export const mutations = {
	ADD_TASK(state, task) {
		const newTask = { id: Date.now(), content: task, done: false , important: false};
		state.tasks = [newTask, ...state.tasks];
	},
	REMOVE_TASK(state, task) {
		state.tasks.splice(state.tasks.indexOf(task), 1);
	},
	TOGGLE_TASK(state, task) {
		const taskIndex = state.tasks.findIndex(t => t.id === task.id);
		state.tasks[taskIndex].done = !state.tasks[taskIndex].done;
	},
	TOGGLE_IMPORTANT(state, task) {
		const taskIndex = state.tasks.findIndex(t => t.id === task.id);
		state.tasks[taskIndex].important = !state.tasks[taskIndex].important;
	},

	SET_TASK_DONE(state, taskId) {
		const task = state.tasks.find(t => t.id === taskId);
		if (task) {
			task.done = true;
		}
	  },

	  SET_TASK_IMPORTANT(state, taskId) {
		const task = state.tasks.find(t => t.id === taskId);
		if (task) {
			task.important = true;
		}
	  },

	
}


export const actions = {

	markTaskDone({ commit }, taskId) {
	  commit('SET_TASK_DONE', taskId);
	},
	markTaskImportant ({ commit }, taskId) {
		commit('SET_TASK_IMPORTANT', taskId)
	  }
  }

  export const getters = {
	tasks: state => state.tasks,
  }