<template>
  <div id="container">
    <a href="#" @click="back()">Go Back</a>
    <button v-on:click="addCard()" style="margin-left: 10px">Add card</button>
    <div style="display: flex">
      <div v-for="(column, index) in dataToRender" v-bind:key="index">
        <div v-for="row in column" v-bind:key="row.id" style="padding: 5px;">
          <Card v-bind:card="row"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card";

export default {
  components: {
    Card
  },
  name: "container",

  data() {
    const cardData = [
      { id: 1, number: 23, title: "hello" },
      { id: 2, number: 12, title: "bye" },
      { id: 3, number: 49, title: "hru" },
      { id: 4, number: 32, title: "etc" },
      { id: 5, number: 33, title: "goodbye" }
    ];
    return {
      cardData,
      dataToRender: this.getDataToRender(cardData)
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    addCard() {
      const lastId = this.cardData[this.cardData.length - 1].id;

      if (this.cardData.length >= 50) {
        confirm("I am sorry! You have reached the limit!");
        return;
      }

      this.cardData.push({ id: lastId + 1, number: 23, title: "new" });
      this.dataToRender = this.getDataToRender(this.cardData);
    },
    getDataToRender(data) {
      const cardData = Array.from(data);
      let dataToRender = [];

      const columnSizes = Array.from(Array(7).keys()).filter(x => x > 2);
      let size;
      columnSizes.every(x => {
        const currentSize = cardData.length / x;
        size = x;
        return currentSize > 8;
      });

      while (cardData.length) {
        dataToRender.push(cardData.splice(0, size));
      }

      return dataToRender;
    }
  }
};
</script>