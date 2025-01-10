<!-- Header.vue -->
<template>
    <header class="header">
      <div class="header-content">
        <h1 class="logo">{{ props.title }}</h1>
        <nav>
          <ul class="nav-list">
            <li v-for="item in props.navItems" 
                :key="item.label" 
                :class="['nav-item', { dropdown: item.dropdownItems }]">
              <a :href="item.href">{{ item.label }}</a>
              <ul v-if="item.dropdownItems" class="dropdown-menu">
                <li v-for="dropItem in item.dropdownItems" 
                    :key="dropItem.label">
                  <a :href="dropItem.href">{{ dropItem.label }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script lang="ts" setup>
  import './header.scss';
  import type { HeaderProps } from '@/types/header.types';
  
  const props = withDefaults(defineProps<HeaderProps>(), {
    title: 'My Website',
    navItems: () => ([
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
      { 
        label: 'More', 
        href: '#',
        dropdownItems: [
          { label: 'Option 1', href: '#' },
          { label: 'Option 2', href: '#' },
          { label: 'Option 3', href: '#' }
        ]
      }
    ])
  });
  </script>