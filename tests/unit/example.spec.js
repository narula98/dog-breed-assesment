import { mount, createLocalVue } from '@vue/test-utils'
import App from '../../src/App'

import VueRouter from 'vue-router'
const localVue = createLocalVue()
localVue.use(VueRouter);
const router = new VueRouter()

describe('HomePage.vue', () => {
  it('renders a div', () => {
    const msg = 'new message'
    const wrapper = mount(App,{localVue,router}) 
    expect(wrapper.find('div').exists()).toBe(true)
  })
  
})
