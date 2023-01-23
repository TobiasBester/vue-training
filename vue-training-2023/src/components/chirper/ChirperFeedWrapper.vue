<template>
  <component :is="displayedComponent"/>
</template>

<script setup lang="ts">
import {computed} from "vue"
import ChirperFeed1 from "@/components/chirper/ChirperFeed1.vue"
import ChirperFeed2 from "@/components/chirper/ChirperFeed2.vue"
import ChirperFeed3 from "@/components/chirper/ChirperFeed3.vue"
import ChirperFeed4 from "@/components/chirper/ChirperFeed4.vue"
import ChirperFeed5 from "@/components/chirper/ChirperFeed5.vue";
import ChirperFeed6 from "@/components/chirper/ChirperFeed6.vue";
import ChirperFeed7 from "@/components/chirper/ChirperFeed7.vue";
import ChirperFeed8 from "@/components/chirper/ChirperFeed8.vue";
import ChirperFeed9 from "@/components/chirper/ChirperFeed9.vue";
import ChirperFeed10 from "@/components/chirper/ChirperFeed10.vue";
import ChirperFeed11 from "@/components/chirper/ChirperFeed11.vue";
import ChirperFeed12 from "@/components/chirper/ChirperFeed12.vue";
import ChirperFeed13 from "@/components/chirper/ChirperFeed13.vue";
import ChirperFeed14 from "@/components/chirper/ChirperFeedFinal.vue";

const props = defineProps({
  version: {
    type: [Number, String],
    default: '1'
  }
})

const displayedComponent = computed(() => {
  switch (Number(props.version)) {
    case 2: return ChirperFeed2
    case 3: return ChirperFeed3
    case 4: return ChirperFeed4
    case 5: return ChirperFeed5
    case 6: return ChirperFeed6
    case 7: return ChirperFeed7
    case 8: return ChirperFeed8
    case 9: return ChirperFeed9
    case 10: return ChirperFeed10
    case 11: return ChirperFeed11
    case 12: return ChirperFeed12
    case 13: return ChirperFeed13
    case 14: return ChirperFeed14
    default: return ChirperFeed1
  }
})
</script>

<style scoped>

</style>
