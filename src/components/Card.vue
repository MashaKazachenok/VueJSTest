<template>
  <div v-bind:style="cardContainer">
    <div>Card ID: {{ card.id }}</div>
    <div>Card Number: {{ card.number }}</div>
    <div>Card Title: {{ card.title }}</div>
    <div>Multiplication: {{ multiplication }}</div>
  </div>
</template>
<script>
export default {
  props: {
    card: Object
  },
  data() {
    return {
      cardContainer: {
        width: "150px",
        margin: "10px",
        backgroundColor: "#F4E3E9"
      }
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    multiplication: function() {
      if (!this.card) {
        return 0;
      }
      return this.card.id * this.card.number;
    }
  }
};
</script>