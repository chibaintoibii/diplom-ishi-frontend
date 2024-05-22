<template>
  <div>
    <rich-text-editor @save-content="setContent" />
    {{savedContent}}
  </div>
</template>

<script>
import { ref } from 'vue';
import RichTextEditor from '@/components/RichEditor.vue';
import DisplayContent from '@/components/DisplayContent.vue';

export default {
  components: {
    RichTextEditor,
    DisplayContent
  },
  setup() {
    const savedContent = ref('<p>Your content will appear here</p>');

    const setContent = (content) => {
      savedContent.value = content;
    };

    return {
      savedContent,
      setContent
    };
  }
};
</script>

<style>
/* Add global styles if necessary */
</style>
