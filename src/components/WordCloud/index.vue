<template>
    <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                columns: ['name', 'value'],
                rows: [
                    {
                        name: '翀',
                        value: 100 * Math.random()
                    },
                    {
                        name: '翀2',
                        value: 100 * Math.random()
                    },
                    {
                        name: '翀3',
                        value: 100 * Math.random()
                    },
                    {
                        name: '翀4',
                        value: 100 * Math.random()
                    },
                    {
                        name: '翀5',
                        value: 100 * Math.random()
                    },
                    {
                        name: '翀6',
                        value: 100 * Math.random()
                    },
                    {
                        name: '翀7',
                        value: 100 * Math.random()
                    },
                    {
                        name: '翀8',
                        value: 100 * Math.random()
                    },
                    {
                        name: '翀9',
                        value: 100 * Math.random()
                    },
                    {
                        name: '翀10',
                        value: 100 * Math.random()
                    },
                    {
                        name: '翀11',
                        value: 100 * Math.random()
                    }
                ]
            },
            chartSettings: {
                color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)']
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
