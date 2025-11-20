var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batasarea_1 = new ol.format.GeoJSON();
var features_Batasarea_1 = format_Batasarea_1.readFeatures(json_Batasarea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batasarea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batasarea_1.addFeatures(features_Batasarea_1);
var lyr_Batasarea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batasarea_1, 
                style: style_Batasarea_1,
                popuplayertitle: 'Batas area',
                interactive: true,
                title: 'Batas area'
            });
var format_BatasKelurahan_2 = new ol.format.GeoJSON();
var features_BatasKelurahan_2 = format_BatasKelurahan_2.readFeatures(json_BatasKelurahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_2.addFeatures(features_BatasKelurahan_2);
var lyr_BatasKelurahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_2, 
                style: style_BatasKelurahan_2,
                popuplayertitle: 'Batas Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_2.png" /> Batas Kelurahan'
            });
var format_BatasFasum_3 = new ol.format.GeoJSON();
var features_BatasFasum_3 = format_BatasFasum_3.readFeatures(json_BatasFasum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasFasum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasFasum_3.addFeatures(features_BatasFasum_3);
var lyr_BatasFasum_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasFasum_3, 
                style: style_BatasFasum_3,
                popuplayertitle: 'Batas Fasum',
                interactive: true,
                title: '<img src="styles/legend/BatasFasum_3.png" /> Batas Fasum'
            });
var format_BatasFasilitasPendidikan_4 = new ol.format.GeoJSON();
var features_BatasFasilitasPendidikan_4 = format_BatasFasilitasPendidikan_4.readFeatures(json_BatasFasilitasPendidikan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasFasilitasPendidikan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasFasilitasPendidikan_4.addFeatures(features_BatasFasilitasPendidikan_4);
var lyr_BatasFasilitasPendidikan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasFasilitasPendidikan_4, 
                style: style_BatasFasilitasPendidikan_4,
                popuplayertitle: 'Batas Fasilitas Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/BatasFasilitasPendidikan_4.png" /> Batas Fasilitas Pendidikan'
            });
var format_BatasPemukiman_5 = new ol.format.GeoJSON();
var features_BatasPemukiman_5 = format_BatasPemukiman_5.readFeatures(json_BatasPemukiman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasPemukiman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasPemukiman_5.addFeatures(features_BatasPemukiman_5);
var lyr_BatasPemukiman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasPemukiman_5, 
                style: style_BatasPemukiman_5,
                popuplayertitle: 'Batas Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/BatasPemukiman_5.png" /> Batas Pemukiman'
            });
var format_BatasLahanTerbukaHijau_6 = new ol.format.GeoJSON();
var features_BatasLahanTerbukaHijau_6 = format_BatasLahanTerbukaHijau_6.readFeatures(json_BatasLahanTerbukaHijau_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasLahanTerbukaHijau_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasLahanTerbukaHijau_6.addFeatures(features_BatasLahanTerbukaHijau_6);
var lyr_BatasLahanTerbukaHijau_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasLahanTerbukaHijau_6, 
                style: style_BatasLahanTerbukaHijau_6,
                popuplayertitle: 'Batas Lahan Terbuka Hijau',
                interactive: true,
                title: '<img src="styles/legend/BatasLahanTerbukaHijau_6.png" /> Batas Lahan Terbuka Hijau'
            });
var format_BatasPersawahan_7 = new ol.format.GeoJSON();
var features_BatasPersawahan_7 = format_BatasPersawahan_7.readFeatures(json_BatasPersawahan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasPersawahan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasPersawahan_7.addFeatures(features_BatasPersawahan_7);
var lyr_BatasPersawahan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasPersawahan_7, 
                style: style_BatasPersawahan_7,
                popuplayertitle: 'Batas Persawahan',
                interactive: true,
                title: '<img src="styles/legend/BatasPersawahan_7.png" /> Batas Persawahan'
            });
var format_JalanDesa_8 = new ol.format.GeoJSON();
var features_JalanDesa_8 = format_JalanDesa_8.readFeatures(json_JalanDesa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_8.addFeatures(features_JalanDesa_8);
var lyr_JalanDesa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_8, 
                style: style_JalanDesa_8,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_8.png" /> Jalan Desa'
            });
var format_JalanGang_9 = new ol.format.GeoJSON();
var features_JalanGang_9 = format_JalanGang_9.readFeatures(json_JalanGang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_9.addFeatures(features_JalanGang_9);
var lyr_JalanGang_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_9, 
                style: style_JalanGang_9,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_9.png" /> Jalan Gang'
            });
var format_JalanRaya_10 = new ol.format.GeoJSON();
var features_JalanRaya_10 = format_JalanRaya_10.readFeatures(json_JalanRaya_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRaya_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRaya_10.addFeatures(features_JalanRaya_10);
var lyr_JalanRaya_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRaya_10, 
                style: style_JalanRaya_10,
                popuplayertitle: 'Jalan Raya',
                interactive: true,
                title: '<img src="styles/legend/JalanRaya_10.png" /> Jalan Raya'
            });
var format_RawanBanjir_11 = new ol.format.GeoJSON();
var features_RawanBanjir_11 = format_RawanBanjir_11.readFeatures(json_RawanBanjir_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanBanjir_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanBanjir_11.addFeatures(features_RawanBanjir_11);
var lyr_RawanBanjir_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanBanjir_11, 
                style: style_RawanBanjir_11,
                popuplayertitle: 'Rawan Banjir',
                interactive: true,
                title: '<img src="styles/legend/RawanBanjir_11.png" /> Rawan Banjir'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Batasarea_1.setVisible(true);lyr_BatasKelurahan_2.setVisible(true);lyr_BatasFasum_3.setVisible(true);lyr_BatasFasilitasPendidikan_4.setVisible(true);lyr_BatasPemukiman_5.setVisible(true);lyr_BatasLahanTerbukaHijau_6.setVisible(true);lyr_BatasPersawahan_7.setVisible(true);lyr_JalanDesa_8.setVisible(true);lyr_JalanGang_9.setVisible(true);lyr_JalanRaya_10.setVisible(true);lyr_RawanBanjir_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Batasarea_1,lyr_BatasKelurahan_2,lyr_BatasFasum_3,lyr_BatasFasilitasPendidikan_4,lyr_BatasPemukiman_5,lyr_BatasLahanTerbukaHijau_6,lyr_BatasPersawahan_7,lyr_JalanDesa_8,lyr_JalanGang_9,lyr_JalanRaya_10,lyr_RawanBanjir_11];
lyr_Batasarea_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BatasKelurahan_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas_M2': 'Luas_M2', 'Luas_Ha': 'Luas_Ha', });
lyr_BatasFasum_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas_M2': 'Luas_M2', 'Luas_Ha': 'Luas_Ha', });
lyr_BatasFasilitasPendidikan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas_M2': 'Luas_M2', 'Luas_Ha': 'Luas_Ha', });
lyr_BatasPemukiman_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas_M2': 'Luas_M2', 'Luas_Ha': 'Luas_Ha', });
lyr_BatasLahanTerbukaHijau_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas_M2': 'Luas_M2', 'Luas_Ha': 'Luas_Ha', });
lyr_BatasPersawahan_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas_M2': 'Luas_M2', 'Luas_Ha': 'Luas_Ha', });
lyr_JalanDesa_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Meter': 'Meter', 'KM': 'KM', });
lyr_JalanGang_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Meter': 'Meter', 'KM': 'KM', });
lyr_JalanRaya_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Meter': 'Meter', 'KM': 'KM', });
lyr_RawanBanjir_11.set('fieldAliases', {'id': 'id', 'Lokasi': 'Lokasi', 'Alamat': 'Alamat', 'RT / RW': 'RT / RW', });
lyr_Batasarea_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BatasKelurahan_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas_M2': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_BatasFasum_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas_M2': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_BatasFasilitasPendidikan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas_M2': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_BatasPemukiman_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas_M2': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_BatasLahanTerbukaHijau_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas_M2': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_BatasPersawahan_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas_M2': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_JalanDesa_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Meter': 'TextEdit', 'KM': 'TextEdit', });
lyr_JalanGang_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Meter': 'TextEdit', 'KM': 'TextEdit', });
lyr_JalanRaya_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Meter': 'TextEdit', 'KM': 'TextEdit', });
lyr_RawanBanjir_11.set('fieldImages', {'id': 'TextEdit', 'Lokasi': 'TextEdit', 'Alamat': 'TextEdit', 'RT / RW': 'TextEdit', });
lyr_Batasarea_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BatasKelurahan_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas_M2': 'no label', 'Luas_Ha': 'no label', });
lyr_BatasFasum_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas_M2': 'no label', 'Luas_Ha': 'no label', });
lyr_BatasFasilitasPendidikan_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas_M2': 'no label', 'Luas_Ha': 'no label', });
lyr_BatasPemukiman_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas_M2': 'no label', 'Luas_Ha': 'no label', });
lyr_BatasLahanTerbukaHijau_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas_M2': 'no label', 'Luas_Ha': 'no label', });
lyr_BatasPersawahan_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas_M2': 'no label', 'Luas_Ha': 'no label', });
lyr_JalanDesa_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Meter': 'no label', 'KM': 'no label', });
lyr_JalanGang_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Meter': 'no label', 'KM': 'no label', });
lyr_JalanRaya_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Meter': 'no label', 'KM': 'no label', });
lyr_RawanBanjir_11.set('fieldLabels', {'id': 'no label', 'Lokasi': 'no label', 'Alamat': 'no label', 'RT / RW': 'no label', });
lyr_RawanBanjir_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});