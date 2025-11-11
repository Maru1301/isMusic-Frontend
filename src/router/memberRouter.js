import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import MemberHome from "../views/member/views/memberHome.vue";
import MemberInfo from "../views/member/views/MemberInfo.vue";
import MemberSubscription from "../views/member/views/MemberSubscription.vue";
import MemberOrder from "../views/member/views/MemberOrder.vue";
import MusicLibrary from "../views/member/views/MusicLibrary.vue";
import MemberActivate from "../views/member/views/MemberActivate.vue"

const routes = [
  {
    path: "/",
    name: "member",
    component: MemberHome,
  },
  {
    path: "/memberInfo",
    name: "memberInfo",
    component: MemberInfo,
  },
  {
    path: "/memberSubscription",
    name: "memberSubscription",
    component: MemberSubscription,
  },
  {
    path: "/memberOrder",
    name: "memberOrder",
    component: MemberOrder,
  },
  {
    path: "/musicLibrary",
    name: "musicLibrary",
    component: MusicLibrary,
  },
  {
    path: "/memberActivate/:memberId/:confirmCode",
    name: "memberActivate",
    component: MemberActivate,
  },
];

const router = createRouter({
  history: createWebHashHistory(),

  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
