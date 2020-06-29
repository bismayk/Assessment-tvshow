import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify'
import AppFooter from '@/components/AppFooter.vue';

describe('In AppFooter Component', () => {
    let appFooterWrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        appFooterWrapper = shallowMount(AppFooter, {
            Vue
        });
    });

    afterEach(() => {
        appFooterWrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(appFooterWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have <v-footer> element',()=>{
        expect(appFooterWrapper.contains('v-footer-stub')).toBe(true);
    });
    it('it should have a <strong> element', () => {
        expect(appFooterWrapper.contains('strong')).toBe(true);
    });
    it('Checks the Strong Value', () => {
        expect(appFooterWrapper.find('strong').text()).toMatch('Television is becoming a collage there are so many channels that you move through them making a collage yourself. In that way, everyone sees something a bit different.')
    })
});