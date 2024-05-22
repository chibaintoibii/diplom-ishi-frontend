<template>
  <div class="relative TextInput bg-transparent"
       :class="{ 'has-error': !!errorMessage}">
    <VueDatePicker
        :required="required"
        v-model="inputValue"
        :auto-apply="autoApply"
        :cancel-text="t('date_picker.close')"
        :dark="isDark"
        :esc-close="true"
        :max-date="maxDate"
        :model-type="modelType"
        :min-date="minDate"
        :format="format"
        :multi-calendars="!!range"
        :now-button-label="t('date_picker.now')"
        :placeholder="isFocused ? placeholder : ''"
        :range="range"
        :select-text="t('date_picker.select')"
        :week-picker="weekPicker"
        :readonly="readonly"
        @closed="isFocused = false"
        @open="isFocused = true"
    >
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData"/>
      </template>
    </VueDatePicker>

    <span
        v-if="placeholder"
        :class="{
        '-top-2.5 left-4 dark:text-white text-primary': floatingLabel,
        'top-3.5 left-8 dark:text-gray-300 text-gray-500': !floatingLabel
      }"
        class="absolute text-sm px-1 truncate text-ellipsis max-w-[calc(100%-20px)] dark:bg-dark-700 bg-white transition-all"
    >
    {{ placeholder }}
        <template v-if="required">
          <span class="text-red-500">*</span>
        </template>
    </span>
    <p class="help-message text-red-500">
      {{ errorMessage }}
    </p>
  </div>

</template>

<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import type {Ref} from 'vue'
import {computed, ref, toRef} from 'vue'
import {useI18n} from 'vue-i18n'
import {useDark} from '@vueuse/core'
import {useField} from "vee-validate";

const isDark = useDark() as Ref<boolean>

const actionRow = {
  showNow: true,
  showPreview: true
} as const

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    validator: (value: string) => ['date', 'week', 'range'].includes(value),
    default: 'date'
  },

  modelValue: {
    type: String,
    default: null
  },

  errorMessage: {
    type: String,
    required: false
  },

  modelType: {
    type: String,
    default: null
  },

  required: {
    type: Boolean,
    default: false
  },

  placeholder: {
    type: String,
    default: ''
  },

  label: {
    type: String,
    required: false
  },

  format: {},

  readonly: {
    type: Boolean,
    default: false
  },

  autoApply: {
    type: Boolean,
    default: false
  },
  minDate: {
    type: Date,
    default: null
  },
  maxDate: {
    type: Date,
    default: null
  }
})

const name = toRef(props, 'name')

const {
  value: inputValue,
  errorMessage,
} = useField(name, undefined, {
  initialValue: props.modelValue
})
const {t} = useI18n()


const weekPicker = computed(() => props.mode === 'week')
const range = computed(() => props.mode === 'range')

const isFocused = ref(false)
const floatingLabel = computed(() => isFocused.value || !!inputValue.value)
</script>

<style>
.dp__theme_dark {
  --dp-background-color: #334155;
  --dp-text-color: #fff;
  --dp-hover-color: rgb(119 83 248 / 0.25);
  --dp-hover-text-color: #fff;
  --dp-hover-icon-color: #fff;
  --dp-primary-color: rgb(119, 83, 248);
  --dp-primary-disabled-color: #61a8ea;
  --dp-primary-text-color: #fff;
  --dp-secondary-color: #a9a9a9;
  --dp-border-color: #dce0e4;
  --dp-menu-border-color: #dce0e4;
  --dp-border-color-hover: #dce0e4;
  --dp-disabled-color: #737373;
  --dp-disabled-color-text: #d0d0d0;
  --dp-scroll-bar-background: #212121;
  --dp-scroll-bar-color: #484848;
  --dp-success-color: #00701a;
  --dp-success-color-disabled: #428f59;
  --dp-icon-color: #fff;
  --dp-danger-color: #e53935;
  --dp-marker-color: #e53935;
  --dp-tooltip-color: #3e3e3e;
  --dp-highlight-color: rgb(0 92 178 / 20%);
  --dp-range-between-dates-background-color: var(--dp-hover-color, #484848);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #fff);
  --dp-range-between-border-color: var(--dp-hover-color, #fff);
}

.dp__theme_light {
  --dp-background-color: #fff;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-disabled-color: #6bacea;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-marker-color: #ff6f60;
  --dp-tooltip-color: #fafafa;
  --dp-disabled-color-text: #8e8e8e;
  --dp-highlight-color: rgb(25 118 210 / 10%);
  --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
  --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}

:root {
  /*General*/
  --dp-font-family: -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, oxygen, ubuntu, cantarell,
  'Open Sans', 'Helvetica Neue', sans-serif;
  --dp-border-radius: 0.5rem; /*Configurable border-radius*/
  --dp-cell-border-radius: 4px; /*Specific border radius for the calendar cell*/
  --dp-common-transition: all 0.1s ease-in; /*Generic transition applied on buttons and calendar cells*/

  /*Sizing*/
  --dp-button-height: 35px; /*Size for buttons in overlays*/
  --dp-month-year-row-height: 35px; /*Height of the month-year select row*/
  --dp-month-year-row-button-size: 35px; /*Specific height for the next/previous buttons*/
  --dp-button-icon-height: 20px; /*Icon sizing in buttons*/
  --dp-cell-size: 35px; /*Width and height of calendar cell*/
  --dp-cell-padding: 5px; /*Padding in the cell*/
  --dp-common-padding: 10px; /*Common padding used*/
  --dp-input-icon-padding: 35px; /*Padding on the left side of the input if icon is present*/
  --dp-input-padding: 11px 30px 11px 12px; /*Padding in the input*/
  --dp-menu-min-width: 260px; /*Adjust the min width of the menu*/
  --dp-action-buttons-padding: 2px 5px; /*Adjust padding for the action buttons in action row*/
  --dp-row-margin: 5px 0; /*Adjust the spacing between rows in the calendar*/
  --dp-calendar-header-cell-padding: 0.5rem; /*Adjust padding in calendar header cells*/
  --dp-two-calendars-spacing: 10px; /*Space between multiple calendars*/
  --dp-overlay-col-padding: 3px; /*Padding in the overlay column*/
  --dp-time-inc-dec-button-size: 32px; /*Sizing for arrow buttons in the time picker*/
  --dp-menu-padding: 6px 8px; /*Menu padding*/

  /*Font sizes*/
  --dp-font-size: 1rem; /*Default font-size*/
  --dp-preview-font-size: 0.8rem; /*Font size of the date preview in the action row*/
  --dp-time-font-size: 0.8rem; /*Font size in the time picker*/

  /*Transitions*/
  --dp-animation-duration: 0.1s; /*Transition duration*/
  --dp-menu-appear-transition-timing: cubic-bezier(
      0.4,
      0,
      1,
      1
  ); /*Timing on menu appear animation*/
  --dp-transition-timing: ease-out; /*Timing on slide animations*/
}
</style>
