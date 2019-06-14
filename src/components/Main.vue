<template>
  <div id="container">
    <a href="#" @click="back()">Go Back</a>
    <button v-on:click="onAddCard()" style="margin-left: 10px">Add card</button>
    <div style="display: flex">
      <div v-for="(column, index) in cardsToRender" v-bind:key="index">
        <div v-for="row in column" v-bind:key="row.id" style="padding: 5px;">
          <Card v-bind:card="row"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card";
import { mapGetters, mapMutations } from "vuex";
import store from "../store";

export default {
  components: {
    Card
  },
  name: "container",
  computed: {
    ...mapGetters(["cardsToRender", "allCards"])
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    onAddCard() {
      const lastId = this.allCards[this.allCards.length - 1].id;

      if (this.allCards.length >= 50) {
        confirm("I am sorry! You have reached the limit!");
        return;
      }
      store.commit("addCard", { id: lastId + 1, number: 23, title: "new" });
    },
    ...mapMutations(["addCard"])
  }
};
</script>