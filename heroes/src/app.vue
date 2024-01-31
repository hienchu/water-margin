<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  },
  setup() {
    const scrollContainer = ref(null)
    return {
      scrollContainer,
    }
  },
  data() {
    return {
      columnWidth: 128,
      gap: 4,
      items: [] as number[],
      rtl: false,
      useScrollContainer: false,
      minColumns: 2,
      maxColumns: 8,
    }
  },
  mounted() {
    this.addItems()
  },
  methods: {
    randomHeight(): number {
      return Math.floor(Math.random() * (512 - 128 + 1)) + 128
    },
    addItem(item: any) { // Change the type to any
      this.items = [...this.items, item];
    },
    addItems() {
      // Generate an array of numbers from 1 to 100
      this.items = [
        ...this.items,
        ...Array.from({ length: 100 }, (v, i) => i + 1),
      ];
    },
    removeItem(index: number) {
      this.items.splice(index, 1);
      this.items = [...this.items];
    },
  },
})
</script>

<template>
  <div>
    <main
      ref="scrollContainer"
      :class="{ 'scroll-container': useScrollContainer }"
    >
      <MasonryWall
        :items="items"
        :column-width="columnWidth"
        :gap="gap"
        :rtl="rtl"
        :scroll-container="useScrollContainer ? scrollContainer : undefined"
        :min-columns="minColumns"
        :max-columns="maxColumns"
      >
        <template #default="{ item, column, row, index }">
          <div class="thumbnail">
            <img
              :src="`./imgs/${item}.jpg`"
              :alt="`Image ${item}`"
            />
          </div>
        </template>
      </MasonryWall>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

:root {
  --color-primary: #379c6f;
  --color-secondary: #34495e;
  --color-accent: #666666;
  --shadow-base: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.primary {
  background: var(--color-primary);
  color: white;
}

.secondary {
  background: var(--color-secondary);
  color: white;
}

.accent {
  background: var(--color-accent);
  color: white;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

p {
  margin-bottom: 1rem;
}

#app {
  margin: 0px;
  padding: 0px;
  min-width: 360px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

main > * + div {
  margin-top: 1rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -0.5rem;
}

.row > * {
  margin-left: 0.5rem;
  display: inline-block;
}

.row + .row {
  margin-top: 1rem;
}

a {
  transition: color 0.25s ease;
}

a:active,
a:link,
a:visited {
  color: white;
}

a:focus-visible,
a:hover {
  color: var(--color-primary);
}

button {
  border: none;
  border-radius: 4px;
  box-shadow: var(--shadow-base);
  cursor: pointer;
  padding: 0.5em 1em;
  transition: filter 0.25s ease;
}

button:focus-visible,
button:hover {
  filter: brightness(90%);
}

.item {
  border-radius: 4px;
  min-width: 128px;
  box-shadow: var(--shadow-base);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.item > * + * {
  margin-top: 0.25rem;
}

.item > p {
  margin-top: 0;
  margin-bottom: 0.25rem;
}

.scroll-container {
  overflow-y: auto;
}

.thumbnail {
    position: relative;
    min-height: 150px;
}

.thumbnail img {
  position: absolute;
  clip-path: inset(0 55% 0 0); /* Display the left half */
  /* Other styles (e.g., height, width) as needed */
  height: 100%;
  width: 100%;
}

</style>
