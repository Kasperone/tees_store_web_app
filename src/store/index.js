import { createStore } from 'vuex';

export default createStore({
  state: {
    routerNames: [
      {
        PageName: 'placeOfPrintingView',
        id: 1,
        name: 'Place Of Printing',
      },
      {
        PageName: 'hangeofImprintView',
        id: 2,
        name: 'Hange Of Imprint',
      },
      {
        PageName: 'shippingInformation',
        id: 3,
        name: 'Shipping Information',
      },
      {
        PageName: 'summaryView',
        id: 4,
        name: 'Summary',
      },
    ],
    imageSrc: [
      {
        src: require('@/assets/images/check-icon.png'),
      },
    ],
    currentPageName: 'placeOfPrintingView',

    selectItems: [
      {
        value: 1,
        label: 'DPD Courier',
      },
      {
        value: 2,
        label: 'UPS Courier',
      },
      {
        value: 3,
        label: 'DHL Courier',
      },
    ],
  },
  getters: {
    getPathNumber: (state) => {
      const findElem = state.routerNames.filter(
        (elem) => elem.PageName === state.currentPageName,
      );
      return findElem.map((elem) => elem.id);
    },
    getImagePath: (state) => state.imageSrc.map((item) => item.src),
  },
  mutations: {
    ROUTER_NAMES(state, payload) {
      state.currentPageName = payload;
    },
  },
  actions: {
    routerName({ commit }, payload) {
      commit('ROUTER_NAMES', payload);
    },
  },
  modules: {},
});
