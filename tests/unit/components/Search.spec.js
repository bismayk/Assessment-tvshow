import { shallowMount } from '@vue/test-utils'

import Vue from 'vue';
import vuex from 'vuex';
import store from "../../../src/store/index";

import search from '@/components/Search.vue'
import Vuetify from 'vuetify';

describe('search.vue', () => {
  let searchWrapper;
  let getResult = jest.fn()
  
  beforeEach(() => {
    Vue.use(vuex)
    Vue.use(Vuetify)
    searchWrapper = shallowMount(search, {
      Vue,
      data: () => ({ tvShowName: '' }),
      store
    });
  });
  
  afterEach(() => {
    searchWrapper.destroy();
  });
 
  it('is a Vue instance', () => {
    expect(searchWrapper.isVueInstance).toBeTruthy();
  });

  it('should text input for search', () => {
    expect(searchWrapper.html()).toContain('<div>');
  });
  it("it should have a text-field", () => {
    expect(searchWrapper.contains("v-text-field-stub")).toBe(true);
  });

  it("should not load v-list by default", ()=>{
    expect(searchWrapper.contains("v-list-stub")).toBe(false);
  });

  it('should text input for search', () => {
    searchWrapper.vm.goToDetailPage = jest.fn();
    searchWrapper.vm.goToDetailPage();
    expect(searchWrapper.vm.goToDetailPage).toHaveBeenCalled()
  });

  it('should text input for search', () => {
    searchWrapper.vm.getResults = jest.fn();
    searchWrapper.vm.getResults();
    expect(searchWrapper.vm.getResults).toHaveBeenCalled()
  });
})
