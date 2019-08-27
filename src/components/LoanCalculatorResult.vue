<template>
  <v-card>
    <v-card-text>
      <div
        class="headline text-center"
      >
        <template
          v-if="getInstallment == null"
        >
          Click on button to calculate monthly installment
        </template>
        <template
          v-else
        >
          Monthly Installment: {{ getInstallment }} EUR
        </template>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LoanCalculatorResult',
  computed: {
    ...mapGetters('loanCalculator', [
      'getInstallment',
    ]),
  },
};
</script>
