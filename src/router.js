import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Korpadalen from "./pages/Korpadalen";
import Notavalla from "./pages/Notavalla";
import Ringvägen from "./pages/Ringvägen";
import AsarumsIP from "./pages/AsarumsIP";
import SödraLångasjön from "./pages/SödraLångasjön";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Korpadalen",
      component: Korpadalen,
      meta: {
        title: "Korpadalen",
      },
    },
    {
      path: "/plats2",
      name: "Notavalla",
      component: Notavalla,
      meta: {
        title: "Plats 2",
      },
    },
    {
      path: "/plats3",
      name: "Ringvägen",
      component: Ringvägen,
      meta: {
        title: "Plats 3",
      },
    },
    {
      path: "/plats4",
      name: "AsarumsIP",
      component: AsarumsIP,
      meta: {
        title: "Plats 4",
      },
    },
    {
      path: "/plats5",
      name: "SödraLångasjön",
      component: SödraLångasjön,
      meta: {
        title: "Plats 5",
      },
    },
  ],
});
export default router;
