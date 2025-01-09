<template>
    <span :class="['badge', `${type}`]" :style="style">
      {{ label }}
    </span>
  </template>
  
<script lang="ts" setup>
import './badge.scss';
import { defineProps, computed } from 'vue';

const props = defineProps<{
label: string;
type: 'primary' | 'success' | 'warning' | 'error';
color?: string;
}>();

const label = props.label ?? 'Badge';
const type = props.type ?? 'primary';
const style = computed(() => ({
  color: props.color
}));

</script>