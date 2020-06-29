import { shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/app.vue';
import Vuetify from 'vuetify'
import Vue from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import Search from "@/components/Search.vue";
describe('In App Component', () => {
    let appWrapper;
    const router = new VueRouter({
        path: '/',
        name: 'Dashboard'
    });

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter);
        appWrapper = shallowMount(App, {
            Vue,
            router,
        });
    });

    afterEach(() => {
        appWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(appWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a <v-app> element', () => {
        expect(appWrapper.contains('v-app-stub')).toBe(true);
    });
    it('it should have a <v-content> element', () => {
        expect(appWrapper.contains('v-content-stub')).toBe(true);
    });
    it('it should have a <router-view> element', () => {
        expect(appWrapper.contains('router-view-stub')).toBe(true);
    });
    it('it should load the AppHeader', () => {
        expect(AppHeader).toBeTruthy();
    });
    it('it should load the AppFooter', () => {
        expect(AppFooter).toBeTruthy();
    });
    it('it should load the Search', () => {
        expect(Search).toBeTruthy();
    });

});