<template>
  <div class="switch-mode">
    <input type="checkbox" class="checkbox" id="checkbox" @change="handleChange">
    <label for="checkbox" class="checkbox-label">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6 fa-sun">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fa-moon">
        <path fill-rule="evenodd"
              d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
              clip-rule="evenodd"/>
      </svg>


      <span class="ball"></span>
    </label>
  </div>
</template>
<script setup lang="ts">
const handleChange = () => {
  let mode = localStorage.getItem("mode");
  const html = document.querySelector('html') as HTMLElement;
  if (mode == 'dark') {
    html.classList.remove('dark')
    localStorage.setItem("mode", "light")
  } else if (!mode || mode == 'light') {
    html.classList.add('dark')
    localStorage.setItem("mode", "dark")
  }
}
</script>

<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
}


.checkbox-label {
  background-color: #1A3247FF;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fa-moon, .fa-sun {
  color: #fff;
}

.checkbox-label .ball {
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.1s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}
</style>