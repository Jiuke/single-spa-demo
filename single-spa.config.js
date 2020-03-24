import { registerApplication, start } from 'single-spa'
/*
应用名称
加载功能（要加载的入口点）
活动功能（判断是否加载应用程序的逻辑）
*/
registerApplication(
  'vue',   
  () => import('./src/vue/vue.app.js'),
  () => location.pathname === "/react" ? false : true
);

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/vue"  ? false : true
);

start();