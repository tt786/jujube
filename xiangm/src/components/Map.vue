<template>
    <div class="map">
        <baidu-map :center="{lng:109.94457940282786,lat:34.78493290669147} " :zoom="zoom" style="height:500px "></baidu-map>
    </div>
</template>
<script>
import BMap from 'vue-baidu-map'
export default {
    data(){
        return{
            zoom:11,
        }
    },
    mounted() {
        this.createMap();
    },
    methods:{
        //创建地图实例
        createMap() {
            // 创建Map实例
            var map = new Map("map");
            var geolocation = new BMap.Geolocation();
            //调用百度地图api 中的获取当前位置接口
            geolocation.getCurrentPosition(function (r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    //获取当前位置经纬度
                    let myGeo = new BMap.Geocoder();
                    myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function (result) {
                        if (result) {
                            console.log(result);
                            // 初始化地图,设置中心点坐标和地图级别
                            map.centerAndZoom(new BMap.Point(result.point.lng, result.point.lat),this.zoom);//设置中心点
                            map.setCurrentCity("北京");        //由于有3D图，需要设置城市哦
                            //开启鼠标滚轮缩放,默认关闭
                            map.enableScrollWheelZoom(true)
                            //添加缩略图控件
                            map.addControl(new BMap.OverviewMapControl({isOpen:false,anchor:BMAP_ANCHOR_BOTTOM_RIGHT}));
                            //添加缩放平移控件
                            map.addControl(new BMap.NavigationControl());
                            //添加比例尺控件
                            map.addControl(new BMap.ScaleControl());
                            //添加地图类型控件
                            map.addControl(new BMap.MapTypeControl());
                            var marker = new BMap.Marker(new BMap.Point(result.point.lng, result.point.lat));
                            //把标注添加到地图上
                            map.addOverlay(marker);
                        }
                    });
                }
            });
        }
    }
}
</script>
<style scoped>
 .map {
    margin-top: 20px;
 width:1219px;
 border: 1px solid rgb(197, 193, 193);
} 
</style>