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
			props: {
				status: {
					type: String,
					required: true,
					validator: function (isDone, isArchived) {
						return 'active'
					}
				}
			}
		},

		{
			path: '/archived',
			name: 'archivedTodos',
			component: TodoList,
            props: {
                status: {
                    type: String,
                    required: true,
                    validator: function () {
                    	return 'archived'
                    }
                }
            }
		},		
		{
			path: '/all',
			name: 'allTodos',
			component: TodoList,
            props: {
                status: {
                    type: String,
                    required: true,
                    validator: function () {
                    	return 'all'
                    }
                }
            }
		},
		{
			path: '*',
			redirect: '/'
		},

	]
})