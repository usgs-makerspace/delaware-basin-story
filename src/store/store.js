import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        usgsHeaderRendered: false,
        introSectionRendered: false,
        isUserAtEndOfMonitoringSection: false,
        isUserAtEndOfSankeySection: false,
        windowWidth: 0,
        windowHeight: 0,
        uswdsBannerHeight: 0,
        warningHeight: 0
    },
    mutations: {
        changeBooleanStateWhenUSGSHeaderRendered(state) {
            state.usgsHeaderRendered = true;
        },
        changeBooleanStateWhenIntroSectionRendered(state) {
            state.introSectionRendered = true;
        },
        changeBooleanStateForEndOfMonitoringSection(state, payload) {
            state.isUserAtEndOfMonitoringSection = payload;
        },
        changeBooleanStateForIsUserAtEndOfSankeySection(state, payload) {
            state.isUserAtEndOfSankeySection = payload;
        },
        recordWindowWidth(state, payload) {
            state.windowWidth = payload;
        },
        recordWindowHeight(state, payload) {
            state.windowHeight = payload;
        },
        recordUSWDSBannerHeight(state, payload) {
            state.uswdsBannerHeight = payload;
        },
        recordWarningHeight(state, payload) {
            state.warningHeight = payload;
        }
    }
});
