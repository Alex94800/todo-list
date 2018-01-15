import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/components/CompleteList'
import AddTask from '@/components/AddTask'
import ModifyTask from '@/components/ModifyTask'

Vue.use(VueRouter)

export default new VueRouter({
	mode: "history",
	routes: [
        {
            path: '/add',
            name: 'addTask',
            component: AddTask,
        },
        {
            path: '/modify/:id',
            name: 'modifyTask',
            component: ModifyTask,
        },
		{
			path: '/',
			name: 'activeTodos',
			component: TodoList,
			props: {
				status: 'active'
			}
		},

		{
			path: '/archived',
			name: 'archivedTodos',
			component: TodoList,
            props: {
                status: 'archived'
            }
		},		
		{
			path: '/all',
			name: 'allTodos',
			component: TodoList,
            props: {
                status: 'all'
            }
		},
		{
			path: '*',
			redirect: '/'
		},

	]
})