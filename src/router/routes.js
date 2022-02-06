//import { Trans } from '@/plugins/Translation'

function load (component) {
    // '@' is aliased to src/components
    return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`)
}

// export default[
//     {
//       path: '/:lang',
//       component: {
//         template: '<router-view></router-view>'
//       },
//       beforeEnter: Trans.routeMiddleware,
//       name: '',
//       children: [
//         {
//           path: "",
//           name: "Home",
//           component: load("Home"),
//         },
//         {
//           path: "/about",
//           name: "About",
//           component: load("About"),
//         },
//       ]
//     },
// ];

export default[
  {
    path: "/",
    name: "Home",
    component: load("Home"),
  },
  {
    path: "/about",
    name: "About",
    component: load("About"),
  }, 
];