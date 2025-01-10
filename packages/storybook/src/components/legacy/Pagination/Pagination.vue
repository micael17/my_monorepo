// src/components/Pagination/Pagination.vue
<template>
  <nav class="pagination">
    <ul class="pagination-list">
      <!-- Previous Button -->
      <li>
        <button 
          class="pagination-btn" 
          :disabled="currentPage === 1"
          @click="handlePageChange(currentPage - 1)"
        >
          이전
        </button>
      </li>
      
      <!-- First Page -->
      <li v-if="showEdges && startPage > 1">
        <button 
          class="pagination-btn" 
          @click="handlePageChange(1)"
        >
          1
        </button>
        <span v-if="startPage > 2" class="pagination-ellipsis">...</span>
      </li>

      <!-- Page Numbers -->
      <li v-for="page in visiblePages" :key="page">
        <button 
          class="pagination-btn"
          :class="{ 'pagination-btn--active': page === currentPage }"
          @click="handlePageChange(page)"
        >
          {{ page }}
        </button>
      </li>

      <!-- Last Page -->
      <li v-if="showEdges && endPage < totalPages">
        <span v-if="endPage < totalPages - 1" class="pagination-ellipsis">...</span>
        <button 
          class="pagination-btn" 
          @click="handlePageChange(totalPages)"
        >
          {{ totalPages }}
        </button>
      </li>

      <!-- Next Button -->
      <li>
        <button 
          class="pagination-btn" 
          :disabled="currentPage === totalPages"
          @click="handlePageChange(currentPage + 1)"
        >
          다음
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import './pagination.scss';
import { computed } from 'vue';
import type { PaginationProps, PaginationEvents } from '@/types/pagination.types';

const props = withDefaults(defineProps<PaginationProps>(), {
  maxVisible: 5,
  showEdges: true
});

const emit = defineEmits<PaginationEvents>();

// 표시할 페이지 범위 계산
const { startPage, endPage } = computed(() => {
  const half = Math.floor(props.maxVisible / 2);
  let start = props.currentPage - half;
  let end = props.currentPage + half;

  if (start < 1) {
    start = 1;
    end = Math.min(props.maxVisible, props.totalPages);
  }

  if (end > props.totalPages) {
    end = props.totalPages;
    start = Math.max(1, end - props.maxVisible + 1);
  }

  return {
    startPage: start,
    endPage: end
  };
}).value;

const visiblePages = computed(() => {
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
});

const handlePageChange = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:page', page);
  }
};
</script>