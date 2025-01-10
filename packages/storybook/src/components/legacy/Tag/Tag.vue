// src/components/Tag/Tag.vue
<template>
  <div 
    :class="[
      'tag',
      {
        'tag--active': active,
        'tag--clickable': clickable
      }
    ]"
    @click="handleClick"
  >
    <span class="tag-label">{{ label }}</span>
    <span v-if="count !== undefined" class="tag-count">{{ count }}</span>
  </div>
</template>

<script lang="ts" setup>
import './tag.scss';
import type { TagProps, TagEvents } from '@/types/tag.types';

const props = withDefaults(defineProps<TagProps>(), {
  active: false,
  clickable: true
});

const emit = defineEmits<TagEvents>();

const handleClick = () => {
  if (props.clickable) {
    emit('click', props.label);
  }
};
</script>