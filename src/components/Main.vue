<template>
  <div>
    <a href="#" @click="back()">Go Back</a>

    <div>
      <span>Sample sample</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>