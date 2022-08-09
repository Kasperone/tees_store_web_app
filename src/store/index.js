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
    tshirtPriceCover: [
      {
        name: 'front',
        id: 1,
        price: 10,
      },
      {
        name: 'back',
        id: 2,
        price: 20,
      },
      {
        name: 'both',
        id: 3,
        price: 30,
      },
    ],
    imageSrc: [
      {
        src: require('@/assets/images/check-icon.png'),
      },
    ],
    currentPageName: 'placeOfPrintingView',
    photosIdContainer: [],

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
    radioBtn: null,
    tshirtPrices: 60,
    inputPromoCode: '',
    isPromoBtnActive: false,
    promoDiscount: 20,
  },
  getters: {
    getPathNumber: (state) => {
      const findElem = state.routerNames.filter(
        (elem) => elem.PageName === state.currentPageName,
      );
      return findElem.map((elem) => elem.id);
    },

    getImagePath: (state) => state.imageSrc.map((item) => item.src),

    getTshirtCoverPrice: (state) => {
      const getTshirtPrice = state.tshirtPriceCover.filter(
        (elem) => elem.id === state.radioBtn,
      );
      return getTshirtPrice.map((elem) => elem.price);
    },

    getTshirtPrice: (state, getters) => {
      if (state.isPromoBtnActive) {
        const persentage =
          (state.promoDiscount / 100) *
          (state.tshirtPrices + getters.getTshirtCoverPrice[0]);
        return state.tshirtPrices - persentage + getters.getTshirtCoverPrice[0];
      }

      if (getters.getTshirtCoverPrice.length === 0) {
        return 0;
      }
      return state.tshirtPrices + getters.getTshirtCoverPrice[0];
    },

    getInputPromoPrice: (state) => state.inputPromoCode.length,

    getIsPromoCodeActive: (state) =>
      state.inputPromoCode.length > 0 && state.isPromoBtnActive,
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
    INPUT_FULL_NAME(state, payload) {
      state.inputFullName = payload;
    },
    INPUT_ADDRESS(state, payload) {
      state.inputAddress = payload;
    },
    ADD_RADIO_BTN(state, payload) {
      state.radioBtn = payload;
    },
    ADD_INPUT_PROMO_PRICE(state, payload) {
      state.inputPromoCode = payload;
    },
    ADD_APPLY_PROMO_CODE(state, payload) {
      state.isPromoBtnActive = payload;
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
