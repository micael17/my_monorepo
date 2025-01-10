<!-- Badge.vue -->
<template>
  <span :class="['badge', `${type}`]" :style="style">
      {{ label }}
  </span>
</template>

<script lang="ts" setup>
import './badge.scss';
import type { BadgeProps } from '@/types/badge.types';
import { computed } from 'vue';

const props = withDefaults(defineProps<BadgeProps>(), {
  type: 'primary'
});

const style = computed(() => ({
  color: props.color
}));
</script>