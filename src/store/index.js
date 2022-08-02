import { createStore } from 'vuex';
import axios from 'axios';

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
    image: '',
    imageSrc: [
      {
        // eslint-disable-next-line global-require
        src: require('@/assets/images/check-icon.png'),
      },
    ],
    currentPageName: 'placeOfPrintingView',
  },
  getters: {
    getPathNumber: (state) => {
      const findElem = state.routerNames.filter(
        (elem) => elem.PageName === state.currentPageName,
      );
      return findElem.map((elem) => elem.id);
    },
    getImagePath: (state) => state.imageSrc.map((item) => item.src),
    getImage: (state) => state.image,
  },
  mutations: {
    ROUTER_NAMES(state, payload) {
      state.currentPageName = payload;
    },
    SET_IMAGE(state, image) {
      state.image = image;
      console.log(image);
    },
  },
  actions: {
    routerName({ commit }, payload) {
      commit('ROUTER_NAMES', payload);
    },
    loadImage({ commit }) {
      axios
        .get('https://picsum.photos/v2/list', {})
        .then((response) => response.data)
        .then((items) => {
          const url = `https://picsum.photos/id/${items[0].id}/400/200`;
          commit('SET_IMAGE', url);
        });
    },
  },
  modules: {},
});
