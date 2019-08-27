<template>
  <v-card>
    <v-card-text>
      <form>
        <v-container>
          <v-row>
            <v-col
              cols="4"
              xs="1"
            >
              <v-text-field
                v-model.number="amount"
                :error-messages="amountErrors"
                type="number"
                min="10000"
                max="100000"
                label="Amount"
                outlined
                @blur="$v.amount.$touch()"
              />
            </v-col>
            <v-col
              cols="4"
              xs="1"
            >
              <v-text-field
                v-model.number="duration"
                label="Duration"
                :error-messages="durationErrors"
                type="number"
                min="10000"
                max="100000"
                outlined
                @blur="$v.duration.$touch()"
              />
            </v-col>
            <v-col
              cols="4"
              xs="1"
            >
              <v-btn
                :disabled="okButtonDisabled"
                color="primary"
                block
                class="mt-2"
                @click="calculate"
              >
                Ok
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { required, minValue, maxValue } from 'vuelidate/lib/validators';

export default {
  name: 'LoanCalculatorForm',
  computed: {
    ...mapGetters('loanCalculator', [
      'getAmount',
      'getDuration',
    ]),
    amount: {
      get() {
        return this.getAmount;
      },
      set(v) {
        this.setAmount(v);
      },
    },
    duration: {
      get() {
        return this.getDuration;
      },
      set(v) {
        this.setDuration(v);
      },
    },
    amountErrors() {
      if (!this.$v.amount.required) {
        return 'Amount is required';
      }
      if (!this.$v.amount.minValue) {
        return 'Amount minimum is 10,000';
      }
      if (!this.$v.amount.maxValue) {
        return 'Amount maximum is 100,000';
      }
      return '';
    },
    durationErrors() {
      if (!this.$v.duration.required) {
        return 'Duration is required';
      }
      if (!this.$v.duration.minValue) {
        return 'Duration minimum is 1';
      }
      if (!this.$v.duration.maxValue) {
        return 'Duration maximum is 5';
      }
      return '';
    },
    okButtonDisabled() {
      return Boolean(this.amountErrors || this.durationErrors);
    },
  },
  methods: {
    ...mapActions('loanCalculator', [
      'setAmount',
      'setDuration',
      'calculateInstallment',
    ]),
    calculate() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.calculateInstallment();
      }
    },
    test() {
      return 1;
    },
  },
  validations: {
    amount: {
      required,
      minValue: minValue(10000),
      maxValue: maxValue(100000),
    },
    duration: {
      required,
      minValue: minValue(1),
      maxValue: maxValue(5),
    },
  },
};
</script>
