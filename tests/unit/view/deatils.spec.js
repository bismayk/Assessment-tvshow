import { shallowMount } from '@vue/test-utils'

import router from "../../../src/router";
import Vue from 'vue';
import vuex from 'vuex'
import VueRouter from 'vue-router';
import store from "../../../src/store/index";
import Details from '@/views/Details.vue'
import Vuetify from 'vuetify';


describe('Details.vue', () => {
    let wrapper;

    beforeEach(() => {
        Vue.use(vuex)
        Vue.use(Vuetify)
        Vue.use(VueRouter)
        wrapper = shallowMount(Details, {
            Vue,
            data: () => ({
                currentId: 169
            }),
            store,
            router
        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
})


