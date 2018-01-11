import Vue from 'vue'
import VueRouter from 'vue-router'
import ActiveList from '@/components/ActiveList'
import ArchivedList from '@/components/ArchivedList'
import CompleteList from '@/components/CompleteList'


Vue.use(VueRouter)

export default new VueRouter({
	mode: "history",
	routes: [
		{
			path: '/',
			name: 'activeTodos',
			component: ActiveList
		},

		{
			path: '/archived',
			name: 'archivedTodos',
			component: ArchivedList
		},		
		{
			path: '/all',
			name: 'allTodos',
			component: CompleteList
		},
		{
			path: '*',
			redirect: '/'
		},

	]
})