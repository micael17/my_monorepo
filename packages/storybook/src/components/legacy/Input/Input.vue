// src/components/Input/Input.vue
<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="['input', { 'input--error': error }]"
      @input="handleInput"
    />
    <button 
      v-if="icon === 'clear' && value"
      class="input-icon input-clear"
      @click="handleClear"
      type="button"
    >
      ×
    </button>
    <span 
      v-if="icon === 'search'"
      class="input-icon input-search"
    >
      🔍
    </span>
    <span v-if="error" class="input-error">{{ error }}</span>
  </div>
</template>

<script lang="ts" setup>
import './input.scss';
import type { InputProps, InputEvents } from '@/types/input.types';

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  placeholder: '',
  disabled: false
});

const emit = defineEmits<InputEvents>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:value', target.value);
};

const handleClear = () => {
  emit('update:value', '');
  emit('clear');
};
</script>