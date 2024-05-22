<template>
  <div>
    <div v-html="renderedContent" class="quill-content"></div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'DisplayContent',
  setup() {
    const renderedContent = ref('<p>Initial content</p>'); // Replace with actual content

    // Simulate receiving content
    // This could be a prop or fetched from a server
    setTimeout(() => {
      renderedContent.value = '<h1>Rendered Content</h1><p>This content is styled by Quill.</p>';
    }, 1000);

    return {
      renderedContent
    };
  }
};
</script>

<style scoped>
@import url('https://cdn.quilljs.com/1.3.6/quill.snow.css'); /* Import Quill Snow Theme */
.quill-content {
  /* Add any additional styles if necessary */
}
</style>
