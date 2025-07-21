<template>
  <router-view/>
</template>

<style lang="scss">
@font-face {
  font-family: 'M PLUS 1 Code';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/public/M_PLUS_1_Code/static/MPLUS1Code-Regular.ttf') format('truetype');
}

body, html {
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
}

body, html, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-foreground);
}

a {
  color: var(--color-foreground);
}

:root {
  --white: #fff;
  --black: #000;
  --red: #c0392b;
  --green: #27ae60;

  --color-background: var(--black);
  --color-foreground: var(--white);
}

@media (max-width: 1600px) {
  .body, html, #app {
    height: auto;
    overflow: scroll;
  }
}
</style>
