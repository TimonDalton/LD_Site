import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import SignupDateSubmitted from "./pages/SignupDateSubmitted.vue";
import EditDateSignup from "./pages/EditDateSignup.vue";
import axios from "axios";
import SignupDate from "./pages/SignupDate.vue";
import Dates from "./pages/Dates.vue";
import Signup from "./pages/Signup.vue";
import Login from "./pages/Login.vue";
import AllComponentsPage from "./pages/AllComponents.vue";
import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/all-components",
    name: "AllComponents",
    component: AllComponentsPage,
  },
  {
    path: "/signup-date-submitted/:location/:date",
    name: "SignupDateSubmitted",
    component: SignupDateSubmitted,
  },
  {
    path: "/signup-date/:location/:date/:date_id",
    name: "SignupDate",
    component: SignupDate,
  },
  {
    path: "/dates/:location?",
    name: "Dates",
    component: Dates,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "defualt-test-page",
    component: AllComponentsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title
      ? toRoute?.meta?.title
      : "Lifting-Dreams-Site";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");
// router.push({path:'Signup'});

export default router;
