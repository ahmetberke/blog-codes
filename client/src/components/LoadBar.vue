<template>
  <div>
    <div class="loadbar fixedReading">
      <div :style="{width:`${percent}%`}" class="size"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percent:0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods : {
    onScroll() {
      let scrollTop = window.scrollY;
      let scrollHeight = window.scrollHeight;
      console.log(scrollHeight)
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let percent = (scrollTop / (docHeight - winHeight)) * 100;
      if (percent > 100) {
        percent = 100
      }
      this.percent = percent
    }
  }
}
</script>

<style lang="scss" scoped>
.loadbar {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 6px;
  .size {
    height: 4px;
    width: 100%;
    background: $yellow;
  }
}
</style>