<template>
    <div class="order">
        <div class="ex-tab-list">
            <div @click="switchTab('openOrder')"
                 class="ex-tab active-side __pointer"
                 :class="{'active': tab === 'openOrder'}">
                <span>{{ $t('tradeOpenOrders.title') }}</span>
            </div>
            <div @click="switchTab('historyOrder')"
                 class="ex-tab active-side __pointer"
                 :class="{'active': tab === 'historyOrder'}">
                <span>{{ $t('tradeOrderHistory.title') }}</span>
            </div>
        </div>
        <openOrder v-show="tab==='openOrder'" class="item order-tab"></openOrder>
        <historyOrder v-show="tab==='historyOrder'" class="item order-tab"></historyOrder>
    </div>
</template>

<script>
import statistics from 'utils/statistics';
import openOrder from '../components/orderOpen.vue';
import historyOrder from '../components/orderHistory.vue';

export default {
    components: { historyOrder, openOrder },
    data() {
        return { tab: 'openOrder' };
    },
    computed: {
        address() {
            return this.$store.getters.activeAddr;
        }
    },
    methods: {
        switchTab(tab) {
            statistics.event(this.$route.name, `switch-${ tab }`, this.address || '');
            this.tab = tab;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./center.scss";

.order {
    display: flex;
    flex-direction: column;
    background: #fff;
    @include box_shadow();
    margin-top: 0;
    border-radius: 2px;

    .tap {
        height: 34px;
        display: flex;
        border-bottom: 1px solid rgb(0, 122, 255);
        align-items: flex-end;

        > div {
            font-size: 14px;
            color: #24272b;
            cursor: pointer;
            margin: 0 10px;
            border-radius: 4px 4px 0 0;
            padding: 4px 13px;

            &.active {
                background: rgba(0, 122, 255, 1);
                color: #fff;
            }
        }
    }

    .item {
        flex: 1;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
}
</style>
