<script setup lang="ts">
import { cn } from '@/lib/utils'
import { buttonVariants } from '.'

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
   <component
    :is="as"
    :class="cn(buttonVariants({ variant }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
