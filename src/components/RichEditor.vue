<template>
  <div class="bg-white text-black">
    <span>{{title}}</span>
    <quill-editor class="ql-editor editor"
                  style="min-height:350px"
                  v-model:content="content"
                  :modules="modules"
                  toolbar="full"
                  content-type="html"/>
  </div>
</template>

<script lang="ts" setup>
import {ref, toRef, watch} from 'vue';
import BlotFormatter from 'quill-blot-formatter'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import {useField} from "vee-validate";

const content = ref('');
const props = defineProps<{
  modelValue: string,
  title?: string,
  name: string;
}>()
const emit = defineEmits(['update:modelValue'])

const name = toRef(props, 'name')


watch(content, (newValue) => {
  emit('update:modelValue', newValue);
})
watch(() => props.modelValue, (newValue) => {
  if (newValue !== content.value) {
    content.value = newValue;
  }
});
const modules = {
  name: 'blotFormatter',
  module: BlotFormatter,
  options: {/* options */}
}

</script>

<style scoped>
.editor {
  height: 40rem;
  overflow: hidden;
}

.output {
  width: 100%;
  height: 20rem;
  margin: 0;
  border: 1px solid #ccc;
  overflow-y: auto;
  resize: vertical;

}

.ql-snow {
  border-top: none;
  height: 24rem;
}
</style>