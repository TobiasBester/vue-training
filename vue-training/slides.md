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

Tobias Bester | EPI-USE Labs | 2022 | vue-training-silk.vercel.app

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
image: /what-is-vue.png
---

# What IS Vue 🤨?

<img src="/vue-logo.png" alt="Vue Logo" width="200" />

<h2>
  A <span class="text-lime-100">versatile</span> <span class="text-green-200">JavaScript framework</span> which
<span class="text-emerald-300">simplifies</span> building <span class="text-teal-400">performant</span> web user interfaces.
</h2>

---
layout: image-right
image: /oh-that-is-vue.png
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

<img src="/logos.png" alt="Logos of companies using Vue" width="600" />

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
  <img src="/opinion.jpg" alt="Very funny" width="450" />
</div>

---

# History of Vue

<img src="https://cdn-media-1.freecodecamp.org/images/0*xkJgg-6HskYrQ3N7.jpeg" alt="Evan You headshot" width="400" />

## Evan You, formerly of Google

---

# History of Vue

<img src="/vue-history.png" alt="Vue History" width="600" />

---
layout: two-cols
---

# Vue 2

- ## v2.6: Biggest market share across versions + default
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

<img src="/vue-docs.png" alt="Vue Docs" width="750" />

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
TODO: In HomeView.vue, add a `ref` named `numIncorrect`
with a value of 0. Replace the "0" text in the template
under "Incorrect:" with `numIncorrect`'s value
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
layout: two-cols
---

# Attribute Bindings

- #### Like with text interpolation, we can bind attributes to reactive data

```html
  <div v-bind:id="dynamicId">
    Content of element {{ dynamicId }}
  </div>
```

- #### The `v-bind` directive can be replaced with the shorthand:

```html
  <div :id="dynamicId">
  Content of element {{ dynamicId }}
  </div>
```

::right::

- #### Data can be bound for any element's attributes, props, class, and style

```html
<div
  :class="hasError ? 'form-error' : 'form-ok'"
/>
```

---
layout: two-cols
---

# Methods and Event Listeners

- #### Functions can be defined in the script block and used within it

### 2️⃣

```vue
<script>
  export default {
    data: () => ({ counter: 0 }),
    methods: {
      increment () {
        this.counter += 1 // Notice use of "this"
      },
      doubleInput (num) {
        return num * 2
      }
    }
  }
</script>
```

::right::

### 3️⃣

```vue
<script setup>
  import { ref } from 'vue'

  const counter = ref(0)

  const increment = () => {
    counter.value += 1
  }
  const doubleInput = (num) => num * 2
</script>
```

- #### Functions can be bound to event listeners

```html
  <button v-on:click="increment">
    Increase me
  </button>

  <input @input="recordKeystroke" />
```

```text {none|all}
TODO: Create method `incCorrect` which increases
numCorrect by one. Bind the method to the button
with text "CLICK ME"
```

---

## Checkout branch `/1-Reactive-data-in-template`

---
layout: two-cols
---

# Form Bindings

- #### Combine `v-bind` and `v-on` to create two-way bindings with inputs

```vue
<template>
  <input :value="text" @input="onInput" />
</template>

<script setup>
  const text = ref('')
  const onInput = (e) => {
    text.value = e.target.value
  }
</script>
```

::right::

- #### Can be replaced with `v-model` - syntactic sugar

```html
<input v-model="text" />
```

- #### Element input will update the `text` value
- #### External `text` value changes will reflect on the input

```text {none|all}
TODO: Add ref named `playerName` with initial
value '' and two-way bind it to the
"Player Name" base-input with `v-model`
```

---

# Conditional Rendering

- #### Render a component if a certain condition is met, or else

```vue
<template>
  <h1 v-if="mark > 80">DISTINCTION</h1>
  <h1 v-else-if="mark >= 50">WELL DONE</h1>
  <h1 v-else>YOU FAILED 😡</h1>
</template>
```

<br />

```text {none|all}
TODO: Render the Start button only if `timeRemaining` equals PLAY_TIME_SECONDS, else,
render the Stop button
```

---

# List Rendering

- #### Data arrays can be rendered in a list using `v-for`
- #### `key` attribute is required for Vue to keep track of items

```vue
<template>
  <tr v-for="(score, idx) in highScores" :key="idx">
    <td>{{ score.rank }}</td>
    <td>{{ score.playerName }}</td>
    <td>{{ score.score }}</td>
  </tr>
</template>
```

- #### Lists are re-rendered when the reactive array is mutated

---

## Checkout branch `/2-Form-bindings-and-rendering`

---
layout: two-cols
---

# Computed Properties

- #### Like a `ref` variable computed from other data
- #### Will track changes of dependencies and re-compute
- #### Will trigger updates if its value changes

### 2️⃣
```javascript
export default {
  // ...
  computed: {
    triple () {
      return this.count * 3
    },
    hextuple () {
      return this.triple * 2
    },
    filteredList () {
      return this.scores.filter(s => s.score > 100)
    }
  }
}
```

::right::

### 3️⃣
```vue
<script setup>
  import { computed } from 'vue'
  //...
  const triple = computed(() => count.value * 3)
  const hextuple = computed(() => triple.value * 2)
</script>
```

```text {none|all}
TODO:
  Copy "CLICK ME" button and paste it below original
  Change color of new button to "red"
  Add method `incIncorrect` which add 1 to `numIncorrect`
  Bind new button click to 'incIncorrect'
  Add computed prop  `score` with formula
    score = numCorrect - (numIncorrect * 5)
  Render `score` value under "Score:" block
```

---

# Lifecycle Hooks

- #### Functions which are run at different stages of a component's lifecycle

<img
  src="https://dltqhkoxgn1gx.cloudfront.net/img/posts/how-to-use-lifecycle-hooks-in-vue3-1.png"
  alt="Vue Lifecycle"
  width="700"
/>

---

# Lifecycle Hooks

### 2️⃣
```javascript
export default {
  // ...
  created () {
    console.log('On created')
  },
  mounted () {
    console.log('On mounted')
  }
}
```

### 3️⃣
```vue
<script setup>
  import { onMounted } from 'vue'
  
  console.log('On created')
  
  onMounted(() => {
    console.log('On mounted')
  })
</script>
```

---
layout: two-cols
---

# Watchers

- #### Run a method every time a data value changes
- #### Access to old and new value
- #### Nested objects can be shallow or deep-watched
- #### Useful for debugging

### 2️⃣
```javascript
export default {
  // ...
  watch: {
    highScores (newVal, oldVal) {
      const sizeDiff = newVal.length - oldVal.length
      console.log(`${sizeDiff} more scores added`)
    }
  }
}
```
::right::


### 3️⃣
```vue
<script setup>
  import { watch } from 'vue'
  // ...
  watch(highScores, (newVal, oldVal) => {
    // ...
  })
</script>
```

- #### Wrapped data needs to use a function to specify watched variable:
```javascript
watch(() => counter.value, (newVal) => {/*...*/})
```

```text {none|all}
TODO: Add watcher to `score` value
 - If new value is < 0, console log 'GAME OVER'
 - If new value is > 100, console log 'GO OFF KING/QUEEN'
```

---

## Checkout branch `/3-Computed-properties`

---

# Components

- #### Building blocks of pages
- #### Each component encapsulates design, logic, and its own state

### 2️⃣
```vue
<template>
  <base-btn />
</template>

<script>
  import BaseBtn from '@/components/base/BaseBtn.vue'
  
  export default {
    components: {
      BaseBtn
    }
  }
</script>
```

---
layout: two-cols
---

# Props

- #### Used to pass data from parent to child component
- #### Prop data type can be specified
  - Object, String, Number, Array, Boolean, Function, Promise

### 2️⃣
```javascript
  export default {
    props: {
      label: {
        type: String,
        default: 'Player Name'
      },
      items: {
        type: [Array, String],
        required: true,
        validator: (val) => val.length > 0
      }
    }
  }
```

:: right ::

### 3️⃣
```vue
<script setup>
  const props = defineProps({/*...*/})
</script>
```

---
layout: two-cols
---

# Emits

- #### Component data directions
  - Props going down
  - Emits going up
- #### Emits are used to pass data up from a child to a parent component
- #### Emits are received by the parent as events

```vue
<template>
  <!--ChildComponent.vue-->
  <button @click="$emit('going-up', 'data')">
    EMIT
  </button>
</template>
```
```vue
<template>
  <!--ParentComponent.vue-->
  <child-component @going-up="logData" />
</template>
```

::right::

### 2️⃣
```vue
<script>
  export default {
    methods: {
      sendDataUp () {
        this.$emit('going-up', this.value)
      }
    }
  }
</script>
```

---

# State Management

- #### Vuex is the standard library
- #### Pinia is the new, recommended library

<img src="/vue-stores.png" alt="Components and a Store" />

---

# Composition Functions

- #### Act exactly like components minus the template and styles
- #### Can accept params
- #### Can keep instance and global state
- #### Should be small and specific

```javascript
export default function (name) {
  const internalName = ref(name)
  const uppercase = computed(() => name.toUpperCase())
  
  return { upperCase }
}
```

---

# Vue Ecosystem

- #### Routing: [Vue Router](https://router.vuejs.org/)
- #### State Management: [Vuex](https://vuex.vuejs.org/) or [Pinia](https://pinia.vuejs.org/)
- #### Component Testing: [Testing Library - Vue](https://testing-library.com/docs/vue-testing-library/intro/)
- #### High-Level Framework: [Nuxt](https://v3.nuxtjs.org/)
- #### UI Component Libraries: [Vuetify](https://vuetifyjs.com/en/) and [Quasar](https://quasar.dev/)
