<template>
  <div class="text-center">
    <span class="loader relative pt-10">Loading</span>
  </div>
</template>

<style scoped>
.loader {
  font-size: 48px;
  color: black;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  position: relative;
}
.loader:after {
  content: '';
  height: 4px;
  width: 0%;
  display: block;
  background: #ff3d00;
  animation: 5s lineGrow linear infinite;
}

@keyframes lineGrow {
  to {
    width: 100%;
  }
}
</style>
