<template>
    <common-card title="累计销售额" value="¥ 82,283,095">
        <template>
            <div class="compare"></div>
        </template>
        <template v-slot:footer>
            <div>
                <span>昨日销售额</span>
                <span class="money">¥ 30,000,000</span>
            </div>
        </template>
    </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
    mixins: [commonCardMixin]
}
</script>

<style lang="scss">
span {
    font-size: 12px;
}
.money {
    color: #333;
    margin-left: 5px;
    font-weight: 700;
}
.compare {
    background: yellow;
    height: 100%;
}
</style>
