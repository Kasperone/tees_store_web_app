import { createRouter, createWebHistory } from 'vue-router';

import PlaceOfPrintingView from '../views/PlaceOfPrintingView.vue';
import HangeofImprintView from '../views/HangeofImprintView.vue';
import ShippingInformation from '../views/ShippingInformation.vue';
import SummaryView from '../views/SummaryView.vue';

const routes = [
  {
    path:'/',
    name: 'placeOfPrintingView',
    component: PlaceOfPrintingView
  },
  {
    path:'/hangeofImprintView',
    name: 'hangeofImprintView',
    component: HangeofImprintView
  },
  {
    path:'/shippingInformation',
    name: 'shippingInformation',
    component: ShippingInformation
  },
  {
    path:'/summaryView',
    name: 'summaryView',
    component: SummaryView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
