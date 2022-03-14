<template>
    <v-app>
        <v-btn @click="show = !show">
            Toggle
        </v-btn>
        <v-dialog v-model="show">
            <v-card>
                <v-card-title>test</v-card-title>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script lang="ts" setup>
import { ref } from '@vue/composition-api';

const show = ref(false);
</script>
