var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Italyboundaries_2 = new ol.format.GeoJSON();
var features_Italyboundaries_2 = format_Italyboundaries_2.readFeatures(json_Italyboundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Italyboundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Italyboundaries_2.addFeatures(features_Italyboundaries_2);
var lyr_Italyboundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Italyboundaries_2, 
                style: style_Italyboundaries_2,
                popuplayertitle: 'Italy boundaries',
                interactive: true,
                title: '<img src="styles/legend/Italyboundaries_2.png" /> Italy boundaries'
            });
var lyr_Italy_pop_2023_class_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Italy_pop_2023_class<br />\
    <img src="styles/legend/Italy_pop_2023_class_3_0.png" /> Very Low Population<br />\
    <img src="styles/legend/Italy_pop_2023_class_3_1.png" /> Low Population<br />\
    <img src="styles/legend/Italy_pop_2023_class_3_2.png" /> Moderate Population<br />\
    <img src="styles/legend/Italy_pop_2023_class_3_3.png" /> High Population<br />\
    <img src="styles/legend/Italy_pop_2023_class_3_4.png" /> Very High Population<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Italy_pop_2023_class_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [734986.934957, 4230557.228232, 2061265.896210, 5956095.497048]
        })
    });
var lyr_Italy_pm2p5_concentration_map_2023_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Italy_pm2p5_concentration_map_2023<br />\
    <img src="styles/legend/Italy_pm2p5_concentration_map_2023_4_0.png" /> Very Low<br />\
    <img src="styles/legend/Italy_pm2p5_concentration_map_2023_4_1.png" /> Low<br />\
    <img src="styles/legend/Italy_pm2p5_concentration_map_2023_4_2.png" /> Moderate<br />\
    <img src="styles/legend/Italy_pm2p5_concentration_map_2023_4_3.png" /> High<br />\
    <img src="styles/legend/Italy_pm2p5_concentration_map_2023_4_4.png" /> Very High<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Italy_pm2p5_concentration_map_2023_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [734708.639236, 4218373.287173, 2070542.528755, 5958411.919990]
        })
    });
var lyr_Italy_pm10_concentration_map_2023_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Italy_pm10_concentration_map_2023<br />\
    <img src="styles/legend/Italy_pm10_concentration_map_2023_5_0.png" /> Very Low<br />\
    <img src="styles/legend/Italy_pm10_concentration_map_2023_5_1.png" /> Low<br />\
    <img src="styles/legend/Italy_pm10_concentration_map_2023_5_2.png" /> Moderate<br />\
    <img src="styles/legend/Italy_pm10_concentration_map_2023_5_3.png" /> High<br />\
    <img src="styles/legend/Italy_pm10_concentration_map_2023_5_4.png" /> Very High<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Italy_pm10_concentration_map_2023_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [734708.639236, 4218373.287173, 2070542.528755, 5958411.919990]
        })
    });
var lyr_Italy_no2_concentration_map_2023_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Italy_no2_concentration_map_2023<br />\
    <img src="styles/legend/Italy_no2_concentration_map_2023_6_0.png" /> Very Low<br />\
    <img src="styles/legend/Italy_no2_concentration_map_2023_6_1.png" /> Low<br />\
    <img src="styles/legend/Italy_no2_concentration_map_2023_6_2.png" /> Moderate<br />\
    <img src="styles/legend/Italy_no2_concentration_map_2023_6_3.png" /> High<br />\
    <img src="styles/legend/Italy_no2_concentration_map_2023_6_4.png" /> Very High<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Italy_no2_concentration_map_2023_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [734708.639236, 4218373.287173, 2070542.528755, 5958411.919990]
        })
    });
var lyr_Italy_pm2p5_2021_2023_AMAC_map_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Italy_pm2p5_2021_2023_AMAC_map<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_7_0.png" /> ≤ -3 μg/m³<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_7_1.png" /> -3 – -1.5 μg/m³<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_7_2.png" /> -1.5 – 0 μg/m³<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_7_3.png" /> 0 – 1.5 μg/m³<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_7_4.png" /> 1.5 – 3 μg/m³<br />\
    <img src="styles/legend/Italy_pm2p5_2021_2023_AMAC_map_7_5.png" /> > 3 μg/m³<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Italy_pm2p5_2021_2023_AMAC_map_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [734708.639236, 4218373.287173, 2070542.528755, 5958411.919990]
        })
    });
var lyr_Italy_pm10_2021_2023_AMAC_map_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Italy_pm10_2021_2023_AMAC_map<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_8_0.png" /> ≤ -10 µg/m³<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_8_1.png" /> -10 – -4 µg/m³<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_8_2.png" /> -4 – 0 µg/m³<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_8_3.png" /> 0 – 4 µg/m³<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_8_4.png" /> 4 – 10 µg/m³<br />\
    <img src="styles/legend/Italy_pm10_2021_2023_AMAC_map_8_5.png" /> > 10 µg/m³<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Italy_pm10_2021_2023_AMAC_map_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [734708.639236, 4218373.287173, 2070542.528755, 5958411.919990]
        })
    });
var lyr_Italy_no2_2021_2023_AMAC_map_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Italy_no2_2021_2023_AMAC_map<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_9_0.png" /> ≤ -5 μg/m³<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_9_1.png" /> -5 – -2 μg/m³<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_9_2.png" /> -2 – 0 μg/m³<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_9_3.png" /> 0 – 2 μg/m³<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_9_4.png" /> 2 – 5 μg/m³<br />\
    <img src="styles/legend/Italy_no2_2021_2023_AMAC_map_9_5.png" /> > 5 μg/m³<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Italy_no2_2021_2023_AMAC_map_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [734708.639236, 4218373.287173, 2070542.528755, 5958411.919990]
        })
    });

lyr_ESRISatellite_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_Italyboundaries_2.setVisible(true);lyr_Italy_pop_2023_class_3.setVisible(true);lyr_Italy_pm2p5_concentration_map_2023_4.setVisible(true);lyr_Italy_pm10_concentration_map_2023_5.setVisible(true);lyr_Italy_no2_concentration_map_2023_6.setVisible(true);lyr_Italy_pm2p5_2021_2023_AMAC_map_7.setVisible(true);lyr_Italy_pm10_2021_2023_AMAC_map_8.setVisible(true);lyr_Italy_no2_2021_2023_AMAC_map_9.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OpenTopoMap_1,lyr_Italyboundaries_2,lyr_Italy_pop_2023_class_3,lyr_Italy_pm2p5_concentration_map_2023_4,lyr_Italy_pm10_concentration_map_2023_5,lyr_Italy_no2_concentration_map_2023_6,lyr_Italy_pm2p5_2021_2023_AMAC_map_7,lyr_Italy_pm10_2021_2023_AMAC_map_8,lyr_Italy_no2_2021_2023_AMAC_map_9];
lyr_Italyboundaries_2.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'Group': 'Group', });
lyr_Italyboundaries_2.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'Group': 'Range', });
lyr_Italyboundaries_2.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'Group': 'no label', });
lyr_Italyboundaries_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});