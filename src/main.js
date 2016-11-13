import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'

import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/time-entries',
        component: TimeEntries,
        children: [
          {path: 'log-time', component: LogTime}
        ]
      },
      {
        path: '/*',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({ routes })

let existingEntry = {
  user: {
    firstName: 'Ryan',
    lastName: 'Chenkie',
    image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250'
  },
  comment: 'First time entry',
  totalTime: 1.5,
  date: '2016-04-08'
}

const store = new Vuex.Store({
  state: {
    totalTime: 1.5,
    timeEntries: [existingEntry]
  },
  mutations: {
    addTimeEntry: function (state, newEntry) {
      state.totalTime += parseFloat(newEntry.totalTime)
      state.timeEntries.push(newEntry)
    },
    removeTimeEntry: function (state, existingEntry) {
      let index = state.timeEntries.indexOf(existingEntry)
      state.timeEntries.splice(index, 1)
      state.totalTime -= parseFloat(existingEntry.totalTime)
    }
  }
})

/* eslint-disable no-new */
window.app = new Vue({
  router,
  store
}).$mount('#app')
