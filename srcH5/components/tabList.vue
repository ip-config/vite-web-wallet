<template>
    <div class="tab-list-wrapper">
        <span class="tab" :class="{'active': activeTab === key}"
              v-for="(tab, key) in tabList" :key="key"
              @click="selectTab(key)">{{ $t(tab) }}</span>
    </div>
</template>

<script>
export default {
    props: {
        tabList: {
            type: Object,
            default: () => {}
        },
        defaultTab: {
            type: String,
            default: ''
        }
    },
    data() {
        return { activeTab: this.defaultTab };
    },
    methods: {
        selectTab(tab) {
            this.activeTab = tab;
            this.$emit('input', this.activeTab);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~h5Assets/scss/vars.scss";

.tab-list-wrapper {
    display: flex;
    font-size: 13px;
    @include font-bold();
    color: rgba(62,74,89,0.7);
    border-bottom: 1px solid rgba(211,223,239,1);
    flex-direction: row;
    justify-content: space-between;

    .tab {
        box-sizing: border-box;
        padding: 6px 0;
        &.active {
            color: rgba(62, 74, 89, 1);
            border-bottom: 3px solid $blue;
        }
    }
}
</style>
