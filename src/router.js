import Vue from 'vue'
import Router from 'vue-router'
import Encounter from './views/Encounter.vue'
import EncounterCreator from './views/EncounterCreator.vue'
import Mapper from './views/Mapper.vue'
import MapperTracker from './views/MapperTracker.vue'
import Party from './views/Party.vue'
import PartyCreator from './views/PartyCreator.vue'
import Tools from './views/Tools.vue'
import Tracker from './views/Tracker.vue'

Vue.use(Router);

export default new Router({
  base: '/~anruut/kasutajaliidesed/prax3/',
  routes: [
    {
      path: '/',
      name: 'party',
      component: Party
    },
    {
      path: '/party',
      redirect: '/'
    },
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '/encounter',
      name: 'encounter',
      component: Encounter
    },
    {
      path: '/encounterCreator',
      name: 'encounterCreator',
      component: EncounterCreator
    },
    {
      path: '/mapper',
      name: 'mapper',
      component: Mapper
    },
    {
      path: '/mapperTracker',
      name: 'mapperTracker',
      component: MapperTracker
    },
    {
      path: '/partyCreator',
      name: 'partyCreator',
      component: PartyCreator
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools
    },
    {
      path: '/tracker',
      name: 'tracker',
      component: Tracker
    }
  ]
})
