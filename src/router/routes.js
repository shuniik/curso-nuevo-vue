const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "HolaMundo", component: () => import("pages/HolaMundo.vue") },
      {
        path: "EstilosPage",
        component: () => import("pages/EstiloyClases.vue"),
      },

      {
        path: "ArreglosPage",
        component: () => import("pages/ArreglosPage.vue"),
      },
      {
        path: "ifshow",
        component: () => import("pages/IfShow.vue"),
      },
      {
        path: "EventosVue",
        component: () => import("pages/EventosVue.vue"),
      },
      {
        path: "CicloVida",
        component: () => import("pages/CicloVida.vue"),
      },
      {
        path: "WatcherVue",
        component: () => import("pages/WatcherVue.vue"),
      },
      // {
      //   path: "ComponentePadre",
      //   component: () => import("pages/ComponeNtePadre.vue"),
      // },
      {
        path: "GridDiseno",
        component: () => import("pages/GridDiseno.vue"),
      },
      {
        path: "SelectPage",
        component: () => import("pages/SelectPage.vue"),
      },
      {
        path: "StoragePage",
        component: () => import("pages/StoragePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
