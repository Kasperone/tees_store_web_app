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
    tshirtPriceCover: [
      {
        name: 'front',
        id:'1',
        price: 10
      },
      {
        name: 'back',
        id:'2',
        price: 20
      },
      {
        name:'both',
        id:'3',
        price: 30
      }
    ],
    imageSrc: [
      {
        src: require('@/assets/images/check-icon.png'),
      },
    ],
    currentPageName: 'placeOfPrintingView',
    radioBtn: '',
    tshirtPrices: 60,
    inputPromoPrice: '',
    isPromoBtnActive: false,
    promoDiscount: 20,
  },
  getters: {
    getPathNumber: (state) => {
      const findElem = state.routerNames.filter((elem) => elem.PageName === state.currentPageName);
      return findElem.map((elem) => elem.id);
    },

    getImagePath: (state) => state.imageSrc.map((item) => item.src),

    getTshirtCoverPrice: (state) => {
      const getTshirtPrice = state.tshirtPriceCover.filter(elem=>elem.id === state.radioBtn)
      return  getTshirtPrice.map(elem=>elem.price)
    },

    getTshirtPrice: (state, getters) =>  {
      if(state.isPromoBtnActive === true){
        const persentage = (state.promoDiscount / 100) * (state.tshirtPrices + getters.getTshirtCoverPrice[0])
        return (state.tshirtPrices - persentage) + getters.getTshirtCoverPrice[0]
      }

      if(getters.getTshirtCoverPrice.length === 0){
        return 0
      }else{
        return state.tshirtPrices + getters.getTshirtCoverPrice[0] 
      }
    },

    getInputPromoPrice: (state) => state.inputPromoPrice.length,

    getIsPromoCodeActive: (state) => state.inputPromoPrice.length > 0 && state.isPromoBtnActive === true ? true : false,

  },
  mutations: {
    ROUTER_NAMES(state, payload) {
      state.currentPageName = payload;
    },
    ADD_RADIO_BTN(state, payload){
      state.radioBtn = payload
    },
    ADD_INPUT_PROMO_PRICE(state, payload){
      state.inputPromoPrice = payload
    },
    ADD_APPLY_PROMO_CODE(state, payload){
      state.isPromoBtnActive = payload
    }
  },
  actions: {
    routerName({ commit }, payload) {
      commit('ROUTER_NAMES', payload);
    },
    valueBtnFront({commit}, payload){
      console.log(payload , 'action')
      commit('ADD_RADIO_BTN', payload)
    },
    valueBtnBack({commit}, payload){
      commit('ADD_RADIO_BTN', payload)
    },
    valueBtnBoth({commit}, payload){
      commit('ADD_RADIO_BTN', payload)
    },
    handleInputPromoPrice({commit}, payload){
      commit('ADD_INPUT_PROMO_PRICE', payload)
    },
    applyPromoCode({commit}, payload){
      commit('ADD_APPLY_PROMO_CODE', payload)
    }
  },
  modules: {},
});
