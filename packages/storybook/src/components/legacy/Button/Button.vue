<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }} </button>
</template>

<script lang="ts" setup>
import './button.scss';
import { computed } from 'vue';
import type { ButtonProps, ButtonEvents } from '@/types/button.types'

const props = withDefaults(defineProps<ButtonProps>(), { type: 'primary' });

const emit = defineEmits<ButtonEvents>();

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