<template>
  <v-card class="my-2" color="secondary">
    <v-card-title>@{{ author }}</v-card-title>
    <v-card-text>
      {{ content }}
    </v-card-text>

    <!-- Chirp actions -->
    <v-card-actions>
      <v-btn
        v-if="$vuetify.display.mdAndUp"
        :icon="data.isReplying ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        color="accent"
        @click="data.isReplying = !data.isReplying"
      />
      <v-btn
        id="reply-btn"
        prepend-icon="mdi-message"
        :color="replyBtnColor"
        @click="data.isReplying = true"
        :size="$vuetify.display.smAndDown ? 'small' : 'default'"
      >
        {{ numReplies > 0 ? numReplies : 'Reply' }}
      </v-btn>
      <chirp-metric-button text="Rechirp" icon="mdi-repeat-variant" />
      <chirp-metric-button text="Fave" />
      <chirp-metric-button text="Like" icon="mdi-heart" />
    </v-card-actions>

    <!-- Chirp Reply card -->
    <v-card v-if="data.isReplying" id="reply-card" color="primary">
      <!-- Chirp Replies list -->
      <v-list v-if="replies.length > 0" id="replies-list" class="bg-accent">
        <v-list-item
          v-for="reply in replies"
          color="secondary"
          :key="reply.id"
        >
          Reply {{ reply.id }}: {{ reply.content }}
        </v-list-item>
      </v-list>

      <v-card-text>
        <v-textarea
          v-model="data.reply"
          id="reply-textarea"
          rows="2"
          :label="`Reply to ${author}`"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
          variant="outlined"
          :disabled="data.reply.length === 0"
          @click="sendReply"
        >
          Send Reply
        </v-btn>
        <v-btn @click="data.isReplying = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script setup lang="ts">
import {computed, PropType, reactive} from "vue";
import ChirpMetricButton from "@/components/chirper/MyChirpMetricButton.vue";
import {ChirpReply} from "@/data/api";

const props = defineProps({
  content: {
    type: String,
    default: 'Chirp'
  },
  author: {
    type: String,
    default: 'Author'
  },
  replies: {
    type: Array as PropType<ChirpReply[]>,
    default: () => []
  },
})

const data = reactive({
  reply: '',
  isReplying: false,
})

const numReplies = computed(() => props.replies.length)
const replyBtnColor = computed(() => data.isReplying ? 'white' : 'accent')

const sendReply = () => {
  // TODO: 11 - Emit a 'send-reply' event, passing the value of data.reply

  // Reset reply textarea
  data.reply = ''
}

</script>

<style scoped>

</style>
