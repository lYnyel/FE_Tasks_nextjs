// /utils/store.ts
import { createStoreon } from 'storeon';

interface State {
  userId: number | null;
}

const store = createStoreon<State>([
  (store) => {
    store.on('@init', () => ({ userId: null }));
    store.on('setUser', (state, userId: number) => ({ userId }));
  },
]);

export default store;
