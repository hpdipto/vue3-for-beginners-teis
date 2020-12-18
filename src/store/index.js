import { createStore } from "vuex";
import { UserModule } from "./User";

export default createStore({
  state: {},

  // mutations are functions that affect the state
  mutations: {},

  // actions are functions that you call throughout your application that call mutations
  actions: {},

  modules: {
    User: UserModule,
  },
});
