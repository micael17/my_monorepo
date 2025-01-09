<template>
    <header class="header">
      <div class="header-content">
        <h1 class="logo">My Website</h1>
        <nav>
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#">Home</a>
            </li>
            <li class="nav-item">
              <a href="#">About</a>
            </li>
            <li class="nav-item">
              <a href="#">Contact</a>
            </li>
            <li class="nav-item dropdown">
              <a href="#">More</a>
              <ul class="dropdown-menu">
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
                <li><a href="#">Option 3</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const showDropdown = ref(false);
  </script>
  
  <style scoped lang="scss">
  @import './header.scss'; // 별도의 SCSS 파일을 임포트합니다.
  </style>
  