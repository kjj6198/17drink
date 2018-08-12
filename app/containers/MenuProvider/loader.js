export default store => {
  if (!store) {
    throw new Error('can not get store.');
  }

  if (!store.registerModule) {
    throw new TypeError('store must have registerModule method.');
  }

  if (store.state.menus) {
    return Promise.resolve();
  }

  const importedModule = import(/* webpackMode: "eager" */ './module');

  return importedModule
    .then(module => store.registerModule('menus', module.default))
    .catch(console.warn);
};
