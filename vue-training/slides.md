---
# try also 'default' to start simple
theme: seriph
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for Vue training content

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# Getting To Know Vue

Tobias Bester | EPI-USE Labs | 2022 | vue-training.vercel.app

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: intro
---

# On the men(v)u(e)

- 🌍 Vue's Place in the World
- 📈 Vue's Past and Present
- 👨‍🏫 Vuetorial + Prac

---
layout: image-left
image: /public/what-is-vue.png
---

# What IS Vue 🤨?

<img src="/public/vue-logo.png" alt="Vue Logo" width="200" />

<h2>
  A <span class="text-lime-100">versatile</span> <span class="text-green-200">JavaScript framework</span> which
<span class="text-emerald-300">simplifies</span> building <span class="text-teal-400">performant</span> web user interfaces.
</h2>

---
layout: image-right
image: /public/oh-that-is-vue.png
---

# What IS Vue 🤨?

- <h3 class="text-lime-100"> Uses modern JavaScript features and has full TS support </h3>
- <h3 class="text-green-200"> Use it for media exhibits, ecommerce. and enterprise solutions </h3>
- <h3 class="text-emerald-300"> Builds on top of standard HTML, CSS, and JS with BTS magic </h3>
- <h3 class="text-teal-400"> Optimized rendering system and tooling for development and production </h3>

---
layout: image
---

# Companies using Vue

<img src="/public/logos.png" alt="Logos of companies using Vue" width="600" />

---

# Vue vs other JS frameworks

- ## [NPM](https://www.npmtrends.com/@angular/core-vs-react-vs-vue-vs-svelte)
- ## React:
  - Also VDOM-based, with reactive, composable components, and an adoptable ecosystem
  - JSX render functions vs template-based with JSX support
  - Wealth of support libraries vs recommended ecosystem
- ## Angular:
  - Template syntax similarities (`*ngFor vs v-for`)
  - All encompassing framework vs scale up if necessary
  - Steep vs easy learning curve

---

<div class="justify-center">
  <img src="/public/opinion.jpg" alt="Very funny" width="450" />
</div>

---

# History of Vue

<img src="https://cdn-media-1.freecodecamp.org/images/0*xkJgg-6HskYrQ3N7.jpeg" alt="Evan You headshot" width="400" />

## Evan You, formerly of Google

---

# History of Vue

<img src="/public/vue-history.png" alt="Vue History" width="600" />

---
layout: two-cols
---

# Vue 2

- ## v2.6: Biggest market share across versions
- ## Options API only
- ## Imperfect TS support
- ## Webpack for dev and prod
- ## Stable Ecosystem

::right::

# Vue 3

- ## Built from ground up using TS
- ## New Composition API
- ## Vite
- ## Recently quite volatile
- ## Ecosystem is still catching up

---
layout: two-cols
---

# Options API

```vue
<script>
  // import externalModule.js
  
  export default {
    data: () => ({
      count: 0
    }),
    computed: {
      double () {
        return this.count * 2
      }
    },
    methods: {
      increment () {
        this.count++
      },
      calculateSun () {
        externalModule.calculateSun(this.count)
      }
    }
  }
</script>

```

::right::

# Composition API

```vue
<script setup>
  import { reactive, computed } from 'vue'
  // import useCalculator from ...
  
  const data = reactive({
    count: 0
  })
  const double = computed(() => data.count * 2)
  const increment = () => {
    data.count++
  }
  const { calculateSun } = useCalculator()
</script>

```

---
layout: two-cols
---

# Composition API Setup function

```vue
<script>
  import { defineComponent, reactive, computed } from 'vue'
  // import useCalculator from ...  
  
  export default defineComponent({
    setup () {
      const data = reactive({
        count: 0
      })
      const double = computed(() => data.count * 2)
      const increment = () => {
        data.count++
      }
      const { calculateSun } = useCalculator()
      
      return { ...data, double, increment, calculateSun }
    }
  })
</script>

```

::right::

# Class Component Syntax

```vue
<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'
  
  @Component
  export default class Counter extends Vue {
    count: number = 0
    get double () {
      return this.count * 2
    }
    increment () {
      this.count++
    }
  }
</script>

```
---

# Vue Docs

<img src="/public/vue-docs.png" alt="Vue Docs" width="750" />

---

# Demo Time 😔

- ### Install NodeJS 12+
- ### Clone Repo:
  - `git clone https://github.com/TobiasBester/vue-training.git`
- ### Install dependencies
  - #### Go to project directory
  - #### `cd ./vue-training-app`
  - #### `npm install`
- ### `npm run dev`
- ### Open `localhost:3000`

---

# Project Structure

- ##### `index.html`: App entry point
- ##### `package.json` and config files
- #### `/public` - Served at web page root
  - Used for browser icons, robots.txt, etc.
- #### `/src` - Where the code at
  - `main.ts` - Where Vue is initialized and mounted. Also, plugins and libraries
  - `App.vue` - Root Vue component. Top level layout, styles, and logic
  - `/assets` - Static content, e.g. images and styles
  - `/views` - Page-level components - ideally one per route
  - `/components` - Used within views, composable, re-usable, simple/complex
  - `/router/index.ts` - Routing config
  - Other folders: `/composables`, `/store`, `/models`

---

# Single File Components

- ### Provide structure for component content
- ### File extension should be ".vue`

---
layout: two-cols
---

# Declarative Rendering and Reactivity

- #### Vue's template syntax allows us to extend HTML with JavaScript

```vue
<template>
  <h1>Count: {{ counter + 1 }}</h1>
</template>
```

- #### We can create **reactive data** and use it in our template
- #### Reactive data variables trigger updates upon change

```text {none|all}
 TODO: In HomeView.vue, add a `ref` named `numCorrect`
 with a value of 0. Replace the "0" text in the template
 under "Correct:" with `numCorrect`
```

::right::

### 2️⃣

```vue
<script>
  export default {
    data: () => ({
      counter: 0
    })
  }
</script>
```

### 3️⃣

```vue
<script setup>
  import { ref, reactive } from 'vue'
  
  const data = reactive({
    count: 0
  })
  console.log(data.count)     // 0
  // OR
  const counter = ref(0)
  console.log(counter.value)  // 0
</script>
```

---

asdas

