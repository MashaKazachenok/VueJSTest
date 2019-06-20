<template>
  <div id="container">
    <span v-if="isEven" :style="helloStyle">Hello</span>
    <a href="#" @click="back()">Go Back</a>
    <button @click="onAddCard()" style="margin-left: 10px">Add card</button>
    <div style="display: flex">
      <div v-for="(column, index) in cardsToRender" :key="index">
        <div v-for="row in column" :key="row.id" style="padding: 5px;">
          <Card :card="row"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Card
  },
  data() {
    return {
      isEven: false,
      helloStyle: {
        margin: "15px",
        padding: "10px",
        backgroundColor: "#41FFE9"
      }
    };
  },
  name: "container",
  computed: {
    ...mapGetters(["cardsToRender", "allCards"])
  },
  watch: {
    allCards: function(val) {
      const count = val.length;
      this.isEven = count === parseFloat(count) ? !(count % 2) : void 0;
    }
  },
  created: () => {
    //console.log("component created");
  },
  mounted: () => {
    //console.log("component mounted");
  },
  destroyed: () => {
    //console.log("component destroyed");
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
      this.addCard({ id: lastId + 1, number: 23, title: "new" });
    },
    ...mapActions(["addCard"])
  }
};
</script>