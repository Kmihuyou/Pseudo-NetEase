import Home from "@/views/home";
// import Mine from "@/views/mine";
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    component: ()=>import("@/views/login"),
  },
  {
    path: "/Playlists",
    component: ()=>import("@/views/Playlists"),
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/mine",
    name: "mine",
    component: ()=>import("@/views/mine"),
  },
  {
    path: "/Mv",
    // name: "mv",
    component: ()=>import("@/views/Mv"),
  },
  {
    path: "/Mvplay",
    // name: "mv",
    component: ()=>import("@/views/Mv/Mvplay"),
  },
  {
    path: "/my",
    name: "my",
    component: ()=>import("@/views/my"),
  },
  {
    path: "/bf",
    // name: "my",
    component: ()=>import("@/views/Mv/play"),
  },
  
];

export default routes;
