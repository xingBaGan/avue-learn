<template>
<div>
    <div id="test">
       {{text}}
    </div>
    <button class="primary" @click="trigger"> log</button>
</div>
  
</template>

<script>
export default {
  props:{
    text:{
      type:String,
      default:"please add the content to props"
    }
  },
  methods: {
    trigger() {
      this.$Print({
        id: "test",
        html: document.body.innerHTML,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
