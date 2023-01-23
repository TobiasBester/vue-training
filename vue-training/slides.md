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

Tobias Bester | EPI-USE Labs | 2023 | vue-training-silk.vercel.app

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
image: /what-is-vue-new.jpg
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
- <h3 class="text-green-200"> Use it for media exhibits, ecommerce, and enterprise solutions </h3>
- <h3 class="text-emerald-300"> Builds on top of standard HTML, CSS, and JS with BTS magic </h3>
- <h3 class="text-teal-400"> Optimized rendering system and tooling for development and production </h3>

---
layout: image
---

# Companies using Vue

<img src="/logos-new.png" alt="Logos of companies using Vue" width="600" />

---

# Vue vs other JS frameworks

- ## [State of JS 2022](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/#front_end_frameworks_experience_linechart)
- ## React:
  - Also VDOM-based, with reactive, composable components, and an adoptable ecosystem
  - JSX render functions vs template-based with JSX support
  - Wealth of support libraries vs recommended ecosystem
  - Next.js vs Nuxt
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
- ## Package and ecosystem is stabilising

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
      calculatePowerOfSun () {
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

# Docs and Resources

- [Vue Docs](https://vuejs.org/guide/introduction.html)
- [Vuetify Component Library](https://vuetifyjs.com/en/)
- [Nuxt](https://nuxt.com/docs/getting-started/introduction)
- [Style Guide](https://vuejs.org/style-guide/)

---

# Demo Time 😔

- ### Install NodeJS 14+
- ### Clone Repo:
  - `git clone https://git.epiuse.co.za/graduates2023/vue-training.git` OR
  - `git clone https://github.com/TobiasBester/vue-training.git`
- ### Install dependencies
  - #### Go to project directory
  - #### `cd ./vue-training-2023`
  - #### `npm install`
- ### `npm run dev`
- ### Open `http://127.0.0.1:3000/`
- ### If using VSCode, install Volar plugin
- ### If using IntelliJ Ultimate, install Vue plugin

---

# Project Structure

- `package.json` and config files
- `index.html`: App entry point
- #### `/public` - Served at web page root
  - Used for browser icons, robots.txt, etc.
- #### `/src` - Where the code lives
  - `main.ts` - Where Vue is initialized and mounted. Also, plugins and libraries
  - `App.vue` - Root Vue component. Top level layout, styles, and logic
  - `/assets` - Static content, e.g. images and styles
  - `/views` - Page-level components - ideally one per route
  - `/components` - Used within views, composable, re-usable, simple/complex
  - `/router/index.ts` - Routing config
  - `/stores` - Pinia/Vuex Global Store

---

# Single File Components

- ### Provide structure for component content
- ### File extension should be ".vue`

```vue
<template>
  <h1>Template elements go here</h1>
</template>

<script setup lang="ts">
const msg = 'JS/TS goes here'
</script>

<style scoped>
.css-goes-here {}
</style>
```
---
layout: two-cols
---

# Declarative Rendering and Reactivity

- #### Vue's template syntax allows us to extend HTML with JavaScript
- #### We can create **reactive data** and use it in our template
- #### Reactive data variables trigger updates upon change

<div v-click="1">

```vue
<template>
  <h1>Count: {{ counter + 1 }}</h1>
</template>
```

</div>

<div v-click="3">

### TODO: 1

</div>

::right::

<div v-click="2">

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
</div>

---
layout: two-cols
---

# Attribute Bindings

- #### Like with text interpolation, we can bind attributes to reactive data

```html
  <button id="stringId">
    Normal button
  </button>
  <div v-bind:id="dynamicId">
    Content of element {{ dynamicId }}
  </div>
```

<div v-click="1">

- #### The `v-bind` directive can be replaced with the shorthand:

```html
  <div :id="dynamicId">
  Content of element {{ dynamicId }}
  </div>
```

</div>

::right::

<div v-click="2">

- #### Data can be bound for any element's attributes, props, class, and style

```html
<div
  :class="hasError ? 'form-error' : 'form-ok'"
/>
```

</div>

<div v-click="3">

- #### Boolean attributes do not need 'true'

```html
<input disabled />
<!-- ⬆ is the same as ⬇ -->
<input :disabled="true" />

<input :disabled="false" />
```

</div>

<div v-click="4">

### TODO: 2 (ChirperFeed2.vue)

</div>

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
      doubleInput: function (num) {
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
  const logInput = (e) =>
          console.log(e.target.value)
</script>
```

<div v-click="1">

- #### Functions can be bound to event listeners

```html
  <button v-on:click="increment">
    Increase me
  </button>

  <input @input="logInput" />
```

</div>

<div v-click="2">

### TODO: 3 (ChirperFeed3.vue)

</div>

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

<div v-click="1">

- #### Element input will update the `text` value
- #### External `text` value changes will reflect on the input
- #### Can be replaced with `v-model` - syntactic sugar

```html
<input v-model="text" />
```

</div>

<div v-click="2">

### TODO: 4 (ChirperFeed4.vue)

</div>

---

# Conditional Rendering

- #### Render a component if a certain condition is met, or else

```vue
<template>
  <h1 v-if="mark > 80">DISTINCTION</h1>
  <h1 v-else-if="mark >= 50">WELL DONE</h1>
  <h1 v-else>YOU FAILED 😡</h1>
  
  <h2>Subjects:</h2>
  <p v-if="takesEnglish">English</p>
  <p v-if="takesMath">Math</p>
  <p v-if="takesAccounting">Accounting</p>
</template>
```

<br />

<div v-click="1">

### TODO: 5 (ChirperFeed5.vue)

</div>

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

- #### Lists are re-rendered when the reactive array is [mutated](https://www.sitepoint.com/immutable-array-methods-javascript/)

<br />

<div v-click="1">

### TODO: 6 (ChirperFeed6.vue)

</div>

---
layout: two-cols
---

# Computed Properties

- #### Read-only data variables computed from other data
- #### Will track changes of dependencies and re-compute
- #### Will trigger updates if its value changes

<div v-click="1">

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

</div>

::right::

<div v-click="1">

### 3️⃣
```vue
<script setup>
  import { computed } from 'vue'
  //...
  const triple = computed(() => count.value * 3)
  const hextuple = computed(() => triple.value * 2)
</script>
```

</div>

<div v-click="2">

### TODO: 7 (ChirperFeed7.vue)

</div>

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

# Template Refs

- #### Reference elements in a template

###
```html
<h1 ref="myHeader">{{ header }}</h1>
```

### 2️⃣
```javascript
function updateHeader (newVal) {
  this.$refs.myHeader.text = newVal
}
```

### 3️⃣
```vue
<script setup>
  // ...
  const myHeader = ref(null)

  const updateHeader = (newVal) => {
    myHeader.text = newVal
  }
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

<div v-click="1">

### 2️⃣
```javascript
export default {
  data: () => {
    highScores: []
  },
  watch: {
    highScores (newVal, oldVal) {
      const sizeDiff = newVal.length - oldVal.length
      console.log(`${sizeDiff} more scores added`)
    }
  }
}
```

</div>

::right::

<div v-click="1">

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

</div>

<div v-click="2">

- #### Wrapped data needs to use a function to specify watched variable:
```javascript
watch(() => counter.value, (newVal) => {/*...*/})
```

</div>

<br />

<div v-click="3">

### TODO: 8 (ChirperFeed8.vue)

</div>

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
    components: {   // Not required in <script setup>
      BaseBtn
    }
  }
</script>
```

<div v-click="1">

<br />

### TODO: 9 (ChirperFeed9.vue)

</div>

---
layout: two-cols
---

# Props

- #### Used to pass data from parent to child component
- #### Prop data type can be specified
  - Object, String, Number, Array, Boolean, Function, Promise
- #### Props shouldn't be modified. Update value from parent component

<div v-click="2">

<br />

### TODO: 10 (ChirperFeed10.vue)

</div>

:: right ::

<div v-click="1">

```html
<custom-list label="Sports" :items="sportsList" />
```

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

### 3️⃣
```vue
<script setup>
  const props = defineProps({/*...*/})

  const oldStudents = computed(() =>
          props.students.filter(s => s.age > 50))
</script>
```

</div>

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

<div v-click="1">

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

### 3️⃣
```vue
<script setup>
  const emit = defineEmits(['submit'])

  const submitToParent = (formData) => {
    emit('submit', formData) 
  }
</script>
```

</div>

<div v-click="2">

### TODO: 11 - ChirpFeedCard.vue
### TODO: 12 - ChirperFeed12.vue

</div>

---
layout: two-cols
---

# Slots

- #### Props are used to pass _data_ into components
- #### Slots are used to pass _template_ into components
- #### For multiple slots, use names. "default" is given if none is defined

<div v-click="1">

```vue
<!-- BaseBtn.vue -->
<template>
  <v-btn :color="color" :disabled="disabled">
    <slot name="prepend-icon" />
    <slot>{{ btnText }}</slot>
  </v-btn>
</template>
```

</div>

::right::

<div v-click="2">

```html
<!-- ParentComponent.vue -->
<base-btn
        color="red"
        :disabled="false"
        btnText="Text will appear as normal">
  <template #prepend-icon>
    <v-icon icon="mdi-home" />
  </template>
</base-btn>
<!-- ...produces ⬇ -->
<v-btn color="red" disabled="false">
  Text will appear as normal
</v-btn>
```

</div>

<div v-click="3">

```html
<base-btn
        color="red"
        :disabled="false"
        btnText="Text will appear as normal">
  <h1>This will now appear in the slot</h1>
</base-btn>
<!-- ...produces ⬇ -->
<v-btn color="red" disabled="false">
  <h1>This will now appear in the slot</h1>
</v-btn>
```

</div>

---

# State Management

- #### Previous de-facto: Vuex | New normal: Pinia
- #### Share data across multiple components
- #### Avoid having to pass data along component chain

<img src="/vue-stores.png" alt="Components and a Store" width="650" />

---

# Composition Functions

- #### Reuse logic across multiple components
- #### Act exactly like components minus the template and styles
- #### Can accept params
- #### Can keep instance and global state
- #### Should be small and specific

```javascript
// useUppercase.js
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
