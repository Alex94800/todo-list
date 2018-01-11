import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/components/CompleteList'


Vue.use(VueRouter)

export default new VueRouter({
	mode: "history",
	routes: [
		{
			path: '/',
			name: 'activeTodos',
			component: TodoList,
			props: {active: true, archived: false}
		},

		{
			path: '/archived',
			name: 'archivedTodos',
			component: TodoList,
			props: {active: false, archived: true}
		},		
		{
			path: '/all',
			name: 'allTodos',
			component: TodoList,
			props: {active: true, archived: true}
		},
		{
			path: '*',
			redirect: '/'
		},

	]
})