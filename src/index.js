import config from './config';
import InfiniteLoading from './components/InfiniteLoading.vue';

function syncModeFromVue(app) {
  config.mode = (app.config && app.config.isCustomElement) ? 'development' : (process.env.NODE_ENV === 'production' ? 'production' : 'development');
}

Object.defineProperty(InfiniteLoading, 'install', {
  configurable: false,
  enumerable: false,
  value(app, options) {
    // override default props
    Object.assign(config.props, options && options.props);

    // override default slots
    Object.assign(config.slots, options && options.slots);

    // override default system settings
    Object.assign(config.system, options && options.system);

    // register component
    app.component('infinite-loading', InfiniteLoading);

    syncModeFromVue(app);
  },
});

// register component automatically if there has global Vue
/* istanbul ignore else */
if (typeof window !== 'undefined' && window.Vue && window.Vue.component) {
  window.Vue.component('infinite-loading', InfiniteLoading);
  syncModeFromVue(window.Vue);
}

export default InfiniteLoading;
