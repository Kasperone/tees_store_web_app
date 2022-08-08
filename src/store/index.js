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
    inputFullName: '',
    inputAddress: '',
    inputZipCode: '',
    inputEmail: '',
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
    INPUT_FULL_NAME(state, payload) {
      state.inputFullName = payload;
    },
    INPUT_ADDRESS(state, payload) {
      state.inputAddress = payload;
    },
    INPUT_ZIP_CODE(state, payload) {
      state.inputZipCode = payload;
    },
    INPUT_EMAIL(state, payload) {
      state.inputEmail = payload;
    },
  },
  actions: {
    routerName({ commit }, payload) {
      commit('ROUTER_NAMES', payload);
    },
  },
  modules: {},
});
