// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

Vue.component('adding-bar', {
	template: `	
	<div class="container">
	    <div class="row">
	        <div class="col-sm-6 col-sm-offset-2">
	          <input class="form-control" type="text" placeholder="Ajouter tache" 
	          v-model="$parent.newTodo" 
	          @keyup.enter="$parent.addTodo">
	        </div>
	        <div class="col-md-4">
	          <button class="btn btn-primary" 
	          @click="$parent.addTodo">Ajouter</button>
	          </button>
	        </div>
	    </div>
	</div>
	`
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
