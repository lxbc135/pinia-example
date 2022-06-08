import { PiniaPluginContext } from 'pinia';

export function persistentStorage(context: any) {
  if (!context.options.persist) {
    return;
  }

  try {
    const persistedStore = localStorage.getItem(context.store.$id);

    if (persistedStore) {
      context.store.$patch(JSON.parse(persistedStore));
    }
  } catch (error) {
    console.error(
      'An error occured while reading store from localStorage.',
      error
    );
  }

  context.store.$subscribe((_: any, state: any) => {
    try {
      localStorage.setItem(context.store.$id, JSON.stringify(state));
    } catch (error) {
      console.error(
        "An error occured while saving the store's state to localStorage.",
        error
      );
    }
  });
}
