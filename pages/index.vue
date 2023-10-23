<template>
  <main>
    <h1> TO DO APP </h1>

   <div class="create-new">
      <input 
        type="text" 
        v-model="newTask" 
        placeholder="What's your plan for today?" 
        @keypress.enter="addTask" />
      <button @click="addTask">

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>

      </button>
    </div>



    <div class="tasks">
      <div class="task-status">
   <span class="task-status-style">{{ $store.state.tasks.length }} All</span> 
<span class="task-status-style">{{ $store.state.tasks.filter(task => task.done).length }} Done</span> 
<span class="task-status-style">{{ $store.state.tasks.filter(task => task.important).length }} Important</span> 

      </div>
      <Task
        v-for="(task, i) in $store.state.tasks"
        :key="i"
        :task="task" 
        @toggle-done="toggleDone(task)"
        @toggle-important="toggleImportant(task)"
        />
    </div>

  

  </main>
</template>

<script>
export default {
  props: ['task'],
  data (){
    return {
      newTask: '',
    }
  },
  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    },

    toggleImportant(task) {
			this.$store.commit('TOGGLE_IMPORTANT',task);
		},

   	toggleDone(task) {
			this.$store.commit('TOGGLE_TASK',task);
		},
  }
}
</script>