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
      path: "/Notavalla",
      name: "Notavalla",
      component: Notavalla,
      meta: {
        title: "Plats 2",
      },
    },
    {
      path: "/Ringvägen",
      name: "Ringvägen",
      component: Ringvägen,
      meta: {
        title: "Gräsplanen",
      },
    },
    {
      path: "/AsarumsIP",
      name: "AsarumsIP",
      component: AsarumsIP,
      meta: {
        title: "Asarums IP",
      },
    },
    {
      path: "/SödraLångasjön",
      name: "SödraLångasjön",
      component: SödraLångasjön,
      meta: {
        title: "Långasjön - Södra änden",
      },
    },
  ],
});
export default router;
