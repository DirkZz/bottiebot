<template>
    <div style="padding: 20px;">

      <div class="row">
        <div class="col-sm">
          <button class="btn btn-primary float-right">
            Add an extra wagerbar
          </button>
        </div>
      </div>

        <div class="row">
            <div class="col-sm-4">
                <div class="form-row">
                    <label for="casino">Casino</label>
                    <select id="casino" class="form-control">
                      <option value="n1">N1 Casino</option>
                      <option value="sv">Slotty Vegas</option>
                    </select>
                </div>

                <div class="form-row">
                    <label for="total">Total</label>
                    <div class="input-group">
                        <div class="input-group-append">
                        <span class="input-group-text">
                          &euro;
                        </span>
                        </div>
                        <input type="text" v-model="wagerRequirement" class="form-control" id="total">
                        <div class="input-group-append">
                            <button class="btn btn-danger" v-on:click="decreaseWagerRequirement()">-</button>
                            <button class="btn btn-success" v-on:click="increaseWagerRequirement()">+</button>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <label for="total">Current wager</label>
                    <div class="input-group">
                        <div class="input-group-append">
                        <span class="input-group-text">
                          &euro;
                        </span>
                        </div>

                        <input type="text" v-model="currentWagerCleared" class="form-control">

                    </div>
                </div>
                <div class="form-row">
                    <label for="total">Percentage</label>

                    <div class="input-group">
                        <input type="text" v-model="percentage" class="form-control" disabled>
                        <div class="input-group-append">
                            <span class="input-group-text">%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm">
                <div class="progress mt-5" style="height: 50px;">
                    <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: percentage +'%' }"
                         style="width: 25%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'wagerbar',
        data() {
            return {
                wagerRequirement: 270000,
                currentWagerCleared: 0
            }
        },
        methods: {
          decreaseWagerRequirement() {
            this.wagerRequirement -= 1000;
          },
          increaseWagerRequirement() {
            this.wagerRequirement += 1000;
          },
        },
        computed: {
            percentage: function () {
                if (this.wagerRequirement === 0 || this.currentWagerCleared === 0) {
                    return 0;
                }

                let percentage = Math.round((this.currentWagerCleared / this.wagerRequirement) * 100);

                return percentage < 100 ? percentage : 100;
            }
        }
    }
</script>
