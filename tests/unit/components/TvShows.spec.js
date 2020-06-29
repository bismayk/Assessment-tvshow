import { shallowMount , createLocalVue } from '@vue/test-utils'

import Vue from 'vue';
import vuex from 'vuex'
import vuetify from 'vuetify'
import TvShows from '@/components/TvShows.vue'

describe('tvshows.vue', () => {
  let tvShowWrapper;
  
  beforeEach(() => {
    Vue.use(vuex)
    Vue.use(vuetify)
    tvShowWrapper = shallowMount(TvShows, {
      Vue,
      propsData: {
        tvShow:{
          image: {medium:"abcd"},
          premiered:"abcd",
          rating:{average:8},
          genres:["asd", "dfdf"]
        }
      } 
    });
  });
  
  afterEach(() => {
    tvShowWrapper.destroy();
  });
 
  it('is a Vue instance', () => {
    expect(tvShowWrapper.isVueInstance).toBeTruthy();
  });
  it('should text input for search', () => {
    expect(tvShowWrapper.html()).toContain('<v-card-stub loaderheight="4" tag="div" maxheight="530" maxwidth="390" minheight="530" class="mx-auto my-12">');
  });

})