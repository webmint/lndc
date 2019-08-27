<template>
  <v-container>
    <v-row>
      <v-col
        xs="12"
        md="6"
        offset-md="3"
      >
        <LoanCalculatorForm />
      </v-col>
      <v-col
        xs="12"
        md="6"
        offset-md="3"
      >
        <LoanCalculatorResult />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    LoanCalculatorForm: () => import('@/components/LoanCalculatorForm'),
    LoanCalculatorResult: () => import('@/components/LoanCalculatorResult'),
  },
};
</script>
