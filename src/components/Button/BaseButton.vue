<template>
  <button
      :class="[
        variantColor,
        stroke ? 'stroke' : '',
        size === 'sm' ? 'text-sm px-1 py-0': size === 'lg' ? 'text-lg px-6 py-3' : 'py-2 px-4'
    ]"
      :disabled="disabled || loading"
      class="btn"
      type="button"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import {computed} from 'vue'

const props = defineProps<{
  loading?: boolean
  stroke?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'light'
}>()

const variantColor = computed(() => (props.variant ? props.variant : 'primary'))
</script>

<style>
.btn {
  @apply text-white rounded-xl cursor-pointer  inline-flex gap-2 items-center justify-center;
}

.btn.success:not(.stroke) {
  @apply bg-[#00ab55];
  @apply hover:bg-[#008c45];
}

.btn.success.stroke {
  @apply border-[#00ab55] text-[#00ab55];
  @apply hover:bg-[#00ab55] hover:text-white;
}

.btn.light {
  @apply bg-[#fff] text-black;
  @apply hover:bg-gray-100
}

.btn.primary:not(.stroke) {
  @apply bg-[#105a85];
  @apply hover:bg-sky-900
}

.btn.stroke {
  @apply border-2;
  @apply hover:bg-transparent;
}

.btn.primary.stroke {
  @apply border-[#105a85] text-[#105a85];
  @apply hover:bg-[#105a85] hover:text-white;
}

.btn.danger:not(.stroke) {
  @apply bg-[#ff4d4f];
  @apply hover:bg-[#d9363e];
}

.btn.danger.stroke {
  @apply border-[#ff4d4f] text-[#ff4d4f];
  @apply hover:bg-[#ff4d4f] hover:text-white;
}

.btn.warning:not(.stroke) {
  @apply bg-[#faad14];
  @apply hover:bg-[#d48806];
}

.btn.warning.stroke {
  @apply border-[#faad14] text-[#faad14];
  @apply hover:bg-[#faad14] hover:text-white;
}

.btn[disabled] {
  @apply cursor-not-allowed;
  @apply disabled:bg-[#c4c4c4] opacity-80 hover:!bg-[#c4c4c4];
}
</style>