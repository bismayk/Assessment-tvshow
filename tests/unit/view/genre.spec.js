import { shallowMount } from '@vue/test-utils'

import Vue from 'vue';
import vuex from 'vuex'
import VueRouter from 'vue-router';
import store from "../../../src/store/index";
import Genre from '@/views/Genre.vue'
import Vuetify from 'vuetify';


describe('Genre.vue', () => {
    let wrapper;
    let genreFilter = jest.fn()

    beforeEach(() => {
        Vue.use(vuex)
        Vue.use(Vuetify)
        Vue.use(VueRouter)
        Vue.config.ignoredElements = ['jw-pagination']
        wrapper = shallowMount(Genre, {
            Vue,
            data: () => ({
                pageOfItems: [{
                    image: { medium: "abcd" },
                    premiered: "abcd",
                    rating: { average: 8 },
                    genres: ["asd", "dfdf"]
                },
                {
                    image: { medium: "asdsdvbcd" },
                    premiered: "abcdfdfd",
                    rating: { average: 10 },
                    genres: ["avdvdsd", "dfddfvdvf"]
                }],
                filters: ["Drama", "Action", "Comedy", "Romance", "Horror", "Family"],
                genreSelected: "Drama",
            }),
            computed: {
                genreFilter: () => genreFilter
            },
            store,

        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('pagination', () => {
        const expected = [{
            image: { medium: "abcd" },
            premiered: "abcd",
            rating: { average: 8 },
            genres: ["Drama", "dfdf"]
        },
        {
            image: { medium: "asdsdvbcd" },
            premiered: "abcdfdfd",
            rating: { average: 10 },
            genres: ["Drama", "dfddfvdvf"]
        }]
        wrapper.vm.onChangePage(expected)
        expect(wrapper.vm.pageOfItems).toEqual(expected);
    });


})


