import {createStore} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import rootReducer from '../reducers/rootReducer'

const makeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(rootReducer)
  } else {
    const { persistReducer, persistStore } = require("redux-persist")
    const storage = require("redux-persist/lib/storage").default

    const persistConfig = {
      key: 'nextjs',
      whitelist: ["ticker", "todos"],
      storage
    }

    const presistedReducer = persistReducer(persistConfig, rootReducer)

    const store = createStore(
      presistedReducer
    )

    store.__pesistor = persistStore(store)

    return store
  }
}

export const wrapper = createWrapper(makeStore, {debug: true});
