<template>
    <div id="mapper">
        <GmapMap
                :center="{lat:58.84, lng:25.68}"
                :zoom="6"
                map-type-id="terrain"
                style="width: 100%; height: 300px"
        >
            <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
            />
        </GmapMap>
    </div>
</template>

<script>
    export default {
        name: "Mapper",
        mounted () {
            // At this point, the child GmapMap has been mounted, but
            // its map has not been initialized.
            // Therefore we need to write mapRef.$mapPromise.then(() => ...)

            this.$refs.mapRef.$mapPromise.then((map) => {
                map.panTo({lat: 1.38, lng: 103.80})
            })
        }
    }
</script>

<style lang="less" scoped>

    @import "../assets/cover.css";
    @import "../assets/stylesheet";
</style>
