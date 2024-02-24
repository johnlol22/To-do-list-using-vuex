import { createStore } from 'vuex'

export default createStore({
  state: {
    list:[
      {key: 0, content: "Reading", done: true},
      {key: 1, content: "Cleaning the room", done: false},
      {key: 2, content: "Doing execise", done: false},
      {key: 3, content: "Meeting", done: false},
    ],
    inputValue: '',
  },
  getters: {
    getToDo (state){
      return state.list.filter(x => !x.done);
    },
    getFinish (state){
      return state.list.filter(x => x.done);
    }
  },
  mutations: {
    addition (state) {
      state.list.push({
        key: state.list.length ,
        content: state.inputValue.trim(),
        done: false
      });
    },
    deletion (state, index){
      state.list.splice(index, 1);
      state.list.forEach((ele, idx) => ele.key = idx);
    },
    setInputValue (state, val){
      state.inputValue = val
    },
    setDone (state, index){
      state.list[index].done = true;
    },
  },
  actions: {
    addToDo : ({ commit }, newToDo) =>{
      commit(addition, newToDo)
    },
    deleteToDo : ({ commit }, index) => {
      commit(deletion, index)
    },
  },
  modules: {
  }
})
