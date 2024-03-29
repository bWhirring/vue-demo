import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './Home'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

Vue.use(VueRouter)
Vue.use(ElementUI);

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
