<template>
  <h1 id="head1">To-Do-List</h1>
  <table class="todolist" border="1">
    <tr>
      <td colspan="3">
        <input
          class="my_ipt"
          :value="inputValue"
          @change="handleInputChange"
          width="200"
        />
        <button @click="actionAddToDo">add toDo</button>
      </td>
    </tr>
    <tr v-for="(todo, index) in todos">
      <td class="first">
        <div>
          <input type="checkbox" :id="todo.key" @change="handleCheckbox" />
        </div>
      </td>
      <td class="second">
        <div class="second">{{ todo.content }}</div>
      </td>
      <td class="third"><button @click="del" :id="todo.key">delete</button></td>
    </tr>
  </table>
  <div id="head2"><h1>Finished:</h1></div>
  <table class="finish" border="1">
    <tr v-for="(item, index) in finish">
      <td>{{ item.content }}</td>
    </tr>
  </table>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      newToDo: "",
    };
  },
  computed: {
    ...mapGetters({
      todos: "getToDo",
      finish: "getFinish",
    }),
  },
  methods: {
    //"methods", not "method".
    handleInputChange(e) {
      this.$store.commit("setInputValue", e.target.value); //$store is okay.
    },
    handleCheckbox(e) {
      this.$store.commit("setDone", e.target.id);
    },
    actionAddToDo(e) {
      this.$store.commit("addition");
      this.newToDo = "";
      e.target.value = "";
    },
    del(e) {
      console.log("delete happened");
      this.$store.commit("deletion", e.target.id);
    },
  },
};
</script>
<style scoped>
header {
  line-height: 1.5;
}

.todolist {
  float: left;
}

.finish {
  clear: both;
}

.first {
  width: 5px;
}
.second {
  width: 150px;
}
.my_ipt {
  width: 160px;
}
#head2 {
  clear: both;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
