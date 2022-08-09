import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    Id: 0,
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
    photosIdContainer: [],
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
    },
    SET_ID(state, payload) {
      state.photosIdContainer.push(payload);
    },
  },
  actions: {
    routerName({ commit }, payload) {
      commit('ROUTER_NAMES', payload);
    },
    async loadImage({ commit }, payload) {
      let url = `https://picsum.photos/id/${payload.id}/600/250`;
      if (payload.blur) {
        url += `?blur=${payload.blur}`;
      }
      if (payload.grayscale) {
        url += payload.blur ? '&grayscale' : '?grayscale';
      }

      const data = await axios.get(url);

      commit('SET_ID', data.headers['picsum-id']);
      commit('SET_IMAGE', data.request.responseURL);
    },
  },
  modules: {},
});
