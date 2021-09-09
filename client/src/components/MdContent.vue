<template>
  <div class="mdContent">
      <Markdown class="markdown" :source="content" />
  </div>
</template>

<script>
import Markdown from 'vue3-markdown-it';

export default {
  components : {
    Markdown
  },
  props : {
    content: String
  }
}
</script>

<style lang="scss" scoped>

.mdContent {
  .markdown {
    margin: 20px;
  }
  background: $selected-light;
  border: solid 1px $border-light;
  border-radius: 10px;
}

</style>