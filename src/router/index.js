import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Feedback from "../views/FeedbackView.vue";
import Sun from "../views/SunView.vue";
import Mercury from "../views/MercuryView.vue";
import Venus from "../views/VenusView.vue";
import Earth from "../views/EarthView.vue";
import Mars from "../views/MarsView.vue";
import Jupiter from "../views/JupiterView.vue";
import Saturn from "../views/SaturnView.vue";
import Uranus from "../views/UranusView.vue";
import Neptune from "../views/NeptuneView.vue";
import Pluto from "../views/PlutoView.vue";

const router = createRouter({
  history: createWebHistory("/solar-system/"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Feedback",
      name: "Feedback",
      component: Feedback,
    },
    {
      path: "/Sun",
      name: "Sun",
      component: Sun,
    },
    {
      path: "/Mercury",
      name: "Mercury",
      component: Mercury,
    },
    {
      path: "/Venus",
      name: "Venus",
      component: Venus,
    },
    {
      path: "/Earth",
      name: "Earth",
      component: Earth,
    },
    {
      path: "/Mars",
      name: "Mars",
      component: Mars,
    },
    {
      path: "/Jupiter",
      name: "Jupiter",
      component: Jupiter,
    },
    {
      path: "/Saturn",
      name: "Saturn",
      component: Saturn,
    },
    {
      path: "/Uranus",
      name: "Uranus",
      component: Uranus,
    },
    {
      path: "/Neptune",
      name: "Neptune",
      component: Neptune,
    },
    {
      path: "/Pluto",
      name: "Pluto",
      component: Pluto,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
