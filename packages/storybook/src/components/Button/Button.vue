<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }} </button>
</template>

<script lang="ts" setup>
import './button.scss';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  label: string,
  type?: string,
  disabled?: boolean,
  backgroundColor?: string,
}>(), { type: 'primary' });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  [`button--${props.type}`]: true,
  'button--disabled': props.disabled
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}));

const onClick = () => {
  emit("click", 1)
};

</script>