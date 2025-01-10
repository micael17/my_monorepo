<template>
    <article class="card">
      <img v-if="props.image" :src="props.image" :alt="props.title" class="card-image">
      <div class="card-content">
        <h2 class="card-title">{{ props.title }}</h2>
        <time v-if="props.date" class="card-date">{{ props.date }}</time>
        <p v-if="props.description" class="card-description">{{ props.description }}</p>
        <div v-if="props.tags" class="card-tags">
          <Badge v-for="tag in props.tags" 
                 :key="tag" 
                 :label="tag" 
                 type="primary" />
        </div>
        <a v-if="props.link" :href="props.link" class="card-link">Read more</a>
      </div>
    </article>
  </template>
  
  <script lang="ts" setup>
  import type { CardProps } from '@/types/card.types';
  import Badge from '../Badge/Badge.vue';
  
  const props = defineProps<CardProps>();
  </script>