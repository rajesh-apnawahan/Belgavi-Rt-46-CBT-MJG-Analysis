var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BelgaviBoundaryMtrs_1 = new ol.format.GeoJSON();
var features_BelgaviBoundaryMtrs_1 = format_BelgaviBoundaryMtrs_1.readFeatures(json_BelgaviBoundaryMtrs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviBoundaryMtrs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviBoundaryMtrs_1.addFeatures(features_BelgaviBoundaryMtrs_1);
var lyr_BelgaviBoundaryMtrs_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviBoundaryMtrs_1, 
                style: style_BelgaviBoundaryMtrs_1,
                popuplayertitle: "Belgavi Boundary Mtrs",
                interactive: true,
                title: '<img src="styles/legend/BelgaviBoundaryMtrs_1.png" /> Belgavi Boundary Mtrs'
            });
var format_BelgaviOverallPOI_2 = new ol.format.GeoJSON();
var features_BelgaviOverallPOI_2 = format_BelgaviOverallPOI_2.readFeatures(json_BelgaviOverallPOI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviOverallPOI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviOverallPOI_2.addFeatures(features_BelgaviOverallPOI_2);
var lyr_BelgaviOverallPOI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviOverallPOI_2, 
                style: style_BelgaviOverallPOI_2,
                popuplayertitle: "Belgavi Overall POI",
                interactive: true,
                title: '<img src="styles/legend/BelgaviOverallPOI_2.png" /> Belgavi Overall POI'
            });
var format_Belgavistats_3 = new ol.format.GeoJSON();
var features_Belgavistats_3 = format_Belgavistats_3.readFeatures(json_Belgavistats_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belgavistats_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belgavistats_3.addFeatures(features_Belgavistats_3);
var lyr_Belgavistats_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Belgavistats_3, 
                style: style_Belgavistats_3,
                popuplayertitle: "Belgavi stats",
                interactive: true,
                title: '<img src="styles/legend/Belgavistats_3.png" /> Belgavi stats'
            });
var format_BelgaviStopPop_4 = new ol.format.GeoJSON();
var features_BelgaviStopPop_4 = format_BelgaviStopPop_4.readFeatures(json_BelgaviStopPop_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPop_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPop_4.addFeatures(features_BelgaviStopPop_4);
var lyr_BelgaviStopPop_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPop_4, 
                style: style_BelgaviStopPop_4,
                popuplayertitle: "Belgavi Stop Pop",
                interactive: true,
    title: 'Belgavi Stop Pop<br />\
    <img src="styles/legend/BelgaviStopPop_4_0.png" /> 5 min<br />'
        });
var format_BelgaviRWI_5 = new ol.format.GeoJSON();
var features_BelgaviRWI_5 = format_BelgaviRWI_5.readFeatures(json_BelgaviRWI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRWI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRWI_5.addFeatures(features_BelgaviRWI_5);
var lyr_BelgaviRWI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRWI_5, 
                style: style_BelgaviRWI_5,
                popuplayertitle: "Belgavi RWI",
                interactive: true,
    title: 'Belgavi RWI<br />\
    <img src="styles/legend/BelgaviRWI_5_0.png" /> -0.18 - 0.175<br />\
    <img src="styles/legend/BelgaviRWI_5_1.png" /> 0.175 - 0.225<br />\
    <img src="styles/legend/BelgaviRWI_5_2.png" /> 0.225 - 0.251<br />\
    <img src="styles/legend/BelgaviRWI_5_3.png" /> 0.251 - 0.367<br />\
    <img src="styles/legend/BelgaviRWI_5_4.png" /> 0.367 - 0.519<br />\
    <img src="styles/legend/BelgaviRWI_5_5.png" /> 0.519 - 0.582<br />\
    <img src="styles/legend/BelgaviRWI_5_6.png" /> 0.582 - 0.671<br />\
    <img src="styles/legend/BelgaviRWI_5_7.png" /> 0.671 - 0.774<br />\
    <img src="styles/legend/BelgaviRWI_5_8.png" /> 0.774 - 0.837<br />\
    <img src="styles/legend/BelgaviRWI_5_9.png" /> 0.837 - 0.89<br />\
    <img src="styles/legend/BelgaviRWI_5_10.png" /> 0.89 - 0.972<br />\
    <img src="styles/legend/BelgaviRWI_5_11.png" /> 0.972 - 1.354<br />\
    <img src="styles/legend/BelgaviRWI_5_12.png" /> 1.354 - 1.399<br />\
    <img src="styles/legend/BelgaviRWI_5_13.png" /> 1.399 - 1.478<br />\
    <img src="styles/legend/BelgaviRWI_5_14.png" /> 1.478 - 1.593<br />'
        });
var format_BelgaviRailwayStn_6 = new ol.format.GeoJSON();
var features_BelgaviRailwayStn_6 = format_BelgaviRailwayStn_6.readFeatures(json_BelgaviRailwayStn_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRailwayStn_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRailwayStn_6.addFeatures(features_BelgaviRailwayStn_6);
var lyr_BelgaviRailwayStn_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRailwayStn_6, 
                style: style_BelgaviRailwayStn_6,
                popuplayertitle: "Belgavi Railway Stn",
                interactive: true,
                title: '<img src="styles/legend/BelgaviRailwayStn_6.png" /> Belgavi Railway Stn'
            });
var format_BelgaviIndustries_7 = new ol.format.GeoJSON();
var features_BelgaviIndustries_7 = format_BelgaviIndustries_7.readFeatures(json_BelgaviIndustries_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviIndustries_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviIndustries_7.addFeatures(features_BelgaviIndustries_7);
var lyr_BelgaviIndustries_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviIndustries_7, 
                style: style_BelgaviIndustries_7,
                popuplayertitle: "Belgavi Industries",
                interactive: true,
                title: '<img src="styles/legend/BelgaviIndustries_7.png" /> Belgavi Industries'
            });
var format_BelgaviOffice_8 = new ol.format.GeoJSON();
var features_BelgaviOffice_8 = format_BelgaviOffice_8.readFeatures(json_BelgaviOffice_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviOffice_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviOffice_8.addFeatures(features_BelgaviOffice_8);
var lyr_BelgaviOffice_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviOffice_8, 
                style: style_BelgaviOffice_8,
                popuplayertitle: "Belgavi Office",
                interactive: true,
                title: '<img src="styles/legend/BelgaviOffice_8.png" /> Belgavi Office'
            });
var format_BelgaviPSU_9 = new ol.format.GeoJSON();
var features_BelgaviPSU_9 = format_BelgaviPSU_9.readFeatures(json_BelgaviPSU_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviPSU_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviPSU_9.addFeatures(features_BelgaviPSU_9);
var lyr_BelgaviPSU_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviPSU_9, 
                style: style_BelgaviPSU_9,
                popuplayertitle: "Belgavi PSU",
                interactive: true,
                title: '<img src="styles/legend/BelgaviPSU_9.png" /> Belgavi PSU'
            });
var format_Education_10 = new ol.format.GeoJSON();
var features_Education_10 = format_Education_10.readFeatures(json_Education_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_10.addFeatures(features_Education_10);
var lyr_Education_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_10, 
                style: style_Education_10,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_10.png" /> Education'
            });
var format_Temple_11 = new ol.format.GeoJSON();
var features_Temple_11 = format_Temple_11.readFeatures(json_Temple_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_11.addFeatures(features_Temple_11);
var lyr_Temple_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_11, 
                style: style_Temple_11,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_11.png" /> Temple'
            });
var format_BelgaviStopPopDissolved_12 = new ol.format.GeoJSON();
var features_BelgaviStopPopDissolved_12 = format_BelgaviStopPopDissolved_12.readFeatures(json_BelgaviStopPopDissolved_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPopDissolved_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPopDissolved_12.addFeatures(features_BelgaviStopPopDissolved_12);
var lyr_BelgaviStopPopDissolved_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPopDissolved_12, 
                style: style_BelgaviStopPopDissolved_12,
                popuplayertitle: "Belgavi Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStopPopDissolved_12.png" /> Belgavi Stop Pop Dissolved'
            });
var format_BelgaviStopPopCoverage_13 = new ol.format.GeoJSON();
var features_BelgaviStopPopCoverage_13 = format_BelgaviStopPopCoverage_13.readFeatures(json_BelgaviStopPopCoverage_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPopCoverage_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPopCoverage_13.addFeatures(features_BelgaviStopPopCoverage_13);
var lyr_BelgaviStopPopCoverage_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPopCoverage_13, 
                style: style_BelgaviStopPopCoverage_13,
                popuplayertitle: "Belgavi Stop Pop Coverage",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStopPopCoverage_13.png" /> Belgavi Stop Pop Coverage'
            });
var format_BelgaviStops_14 = new ol.format.GeoJSON();
var features_BelgaviStops_14 = format_BelgaviStops_14.readFeatures(json_BelgaviStops_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops_14.addFeatures(features_BelgaviStops_14);
var lyr_BelgaviStops_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops_14, 
                style: style_BelgaviStops_14,
                popuplayertitle: "Belgavi Stops",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStops_14.png" /> Belgavi Stops'
            });
var format_StopsinsideBelgavi_15 = new ol.format.GeoJSON();
var features_StopsinsideBelgavi_15 = format_StopsinsideBelgavi_15.readFeatures(json_StopsinsideBelgavi_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsinsideBelgavi_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsinsideBelgavi_15.addFeatures(features_StopsinsideBelgavi_15);
var lyr_StopsinsideBelgavi_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsinsideBelgavi_15, 
                style: style_StopsinsideBelgavi_15,
                popuplayertitle: "Stops inside Belgavi",
                interactive: true,
                title: '<img src="styles/legend/StopsinsideBelgavi_15.png" /> Stops inside Belgavi'
            });
var format_BelgaviBoundary_16 = new ol.format.GeoJSON();
var features_BelgaviBoundary_16 = format_BelgaviBoundary_16.readFeatures(json_BelgaviBoundary_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviBoundary_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviBoundary_16.addFeatures(features_BelgaviBoundary_16);
var lyr_BelgaviBoundary_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviBoundary_16, 
                style: style_BelgaviBoundary_16,
                popuplayertitle: "Belgavi Boundary",
                interactive: true,
                title: '<img src="styles/legend/BelgaviBoundary_16.png" /> Belgavi Boundary'
            });
var format_MJGCBTRouteMtrs_17 = new ol.format.GeoJSON();
var features_MJGCBTRouteMtrs_17 = format_MJGCBTRouteMtrs_17.readFeatures(json_MJGCBTRouteMtrs_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MJGCBTRouteMtrs_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MJGCBTRouteMtrs_17.addFeatures(features_MJGCBTRouteMtrs_17);
var lyr_MJGCBTRouteMtrs_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MJGCBTRouteMtrs_17, 
                style: style_MJGCBTRouteMtrs_17,
                popuplayertitle: "MJG CBT Route Mtrs",
                interactive: true,
                title: '<img src="styles/legend/MJGCBTRouteMtrs_17.png" /> MJG CBT Route Mtrs'
            });
var format_MJGCBTStops_18 = new ol.format.GeoJSON();
var features_MJGCBTStops_18 = format_MJGCBTStops_18.readFeatures(json_MJGCBTStops_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MJGCBTStops_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MJGCBTStops_18.addFeatures(features_MJGCBTStops_18);
var lyr_MJGCBTStops_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MJGCBTStops_18, 
                style: style_MJGCBTStops_18,
                popuplayertitle: "MJG CBT Stops",
                interactive: true,
    title: 'MJG CBT Stops<br />\
    <img src="styles/legend/MJGCBTStops_18_0.png" /> 2nd GATE<br />\
    <img src="styles/legend/MJGCBTStops_18_1.png" /> CBT<br />\
    <img src="styles/legend/MJGCBTStops_18_2.png" /> COLLEGE ROAD<br />\
    <img src="styles/legend/MJGCBTStops_18_3.png" /> COURT<br />\
    <img src="styles/legend/MJGCBTStops_18_4.png" /> DSC<br />\
    <img src="styles/legend/MJGCBTStops_18_5.png" /> FISH MARKET<br />\
    <img src="styles/legend/MJGCBTStops_18_6.png" /> Majgaon cross 1<br />\
    <img src="styles/legend/MJGCBTStops_18_7.png" /> RAILWAY STATION<br />\
    <img src="styles/legend/MJGCBTStops_18_8.png" /> RTO<br />\
    <img src="styles/legend/MJGCBTStops_18_9.png" /> Sardar Ground b/s<br />\
    <img src="styles/legend/MJGCBTStops_18_10.png" /> Udyambagh 1<br />\
    <img src="styles/legend/MJGCBTStops_18_11.png" /> <br />'
        });
var format_RT46StopPopDissolved_19 = new ol.format.GeoJSON();
var features_RT46StopPopDissolved_19 = format_RT46StopPopDissolved_19.readFeatures(json_RT46StopPopDissolved_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT46StopPopDissolved_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT46StopPopDissolved_19.addFeatures(features_RT46StopPopDissolved_19);
var lyr_RT46StopPopDissolved_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RT46StopPopDissolved_19, 
                style: style_RT46StopPopDissolved_19,
                popuplayertitle: "RT 46 Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/RT46StopPopDissolved_19.png" /> RT 46 Stop Pop Dissolved'
            });
var format_Rt46StopPop_20 = new ol.format.GeoJSON();
var features_Rt46StopPop_20 = format_Rt46StopPop_20.readFeatures(json_Rt46StopPop_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt46StopPop_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt46StopPop_20.addFeatures(features_Rt46StopPop_20);
var lyr_Rt46StopPop_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt46StopPop_20, 
                style: style_Rt46StopPop_20,
                popuplayertitle: "Rt 46 Stop Pop",
                interactive: true,
                title: '<img src="styles/legend/Rt46StopPop_20.png" /> Rt 46 Stop Pop'
            });
var format_CBTMJGRtPop100mtr_21 = new ol.format.GeoJSON();
var features_CBTMJGRtPop100mtr_21 = format_CBTMJGRtPop100mtr_21.readFeatures(json_CBTMJGRtPop100mtr_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGRtPop100mtr_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGRtPop100mtr_21.addFeatures(features_CBTMJGRtPop100mtr_21);
var lyr_CBTMJGRtPop100mtr_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGRtPop100mtr_21, 
                style: style_CBTMJGRtPop100mtr_21,
                popuplayertitle: "CBT MJG Rt Pop 100 mtr",
                interactive: true,
                title: '<img src="styles/legend/CBTMJGRtPop100mtr_21.png" /> CBT MJG Rt Pop 100 mtr'
            });
var format_CBTMJGRWI_22 = new ol.format.GeoJSON();
var features_CBTMJGRWI_22 = format_CBTMJGRWI_22.readFeatures(json_CBTMJGRWI_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGRWI_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGRWI_22.addFeatures(features_CBTMJGRWI_22);
var lyr_CBTMJGRWI_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGRWI_22, 
                style: style_CBTMJGRWI_22,
                popuplayertitle: "CBT MJG RWI",
                interactive: true,
    title: 'CBT MJG RWI<br />\
    <img src="styles/legend/CBTMJGRWI_22_0.png" /> 0.999 - 1.061<br />\
    <img src="styles/legend/CBTMJGRWI_22_1.png" /> 1.061 - 1.123<br />\
    <img src="styles/legend/CBTMJGRWI_22_2.png" /> 1.123 - 1.185<br />\
    <img src="styles/legend/CBTMJGRWI_22_3.png" /> 1.185 - 1.247<br />\
    <img src="styles/legend/CBTMJGRWI_22_4.png" /> 1.247 - 1.309<br />\
    <img src="styles/legend/CBTMJGRWI_22_5.png" /> 1.309 - 1.371<br />\
    <img src="styles/legend/CBTMJGRWI_22_6.png" /> 1.371 - 1.433<br />\
    <img src="styles/legend/CBTMJGRWI_22_7.png" /> 1.433 - 1.4654<br />\
    <img src="styles/legend/CBTMJGRWI_22_8.png" /> 1.4654 - 1.4682<br />\
    <img src="styles/legend/CBTMJGRWI_22_9.png" /> 1.4682 - 1.471<br />\
    <img src="styles/legend/CBTMJGRWI_22_10.png" /> 1.471 - 1.4738<br />\
    <img src="styles/legend/CBTMJGRWI_22_11.png" /> 1.4738 - 1.4766<br />\
    <img src="styles/legend/CBTMJGRWI_22_12.png" /> 1.4766 - 1.4794<br />\
    <img src="styles/legend/CBTMJGRWI_22_13.png" /> 1.4794 - 1.4822<br />\
    <img src="styles/legend/CBTMJGRWI_22_14.png" /> 1.4822 - 1.485<br />'
        });
var format_CBTMJGRouteMtrs_23 = new ol.format.GeoJSON();
var features_CBTMJGRouteMtrs_23 = format_CBTMJGRouteMtrs_23.readFeatures(json_CBTMJGRouteMtrs_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGRouteMtrs_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGRouteMtrs_23.addFeatures(features_CBTMJGRouteMtrs_23);
var lyr_CBTMJGRouteMtrs_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGRouteMtrs_23, 
                style: style_CBTMJGRouteMtrs_23,
                popuplayertitle: "CBT MJG Route Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTMJGRouteMtrs_23.png" /> CBT MJG Route Mtrs'
            });
var format_CBTMJGStops_24 = new ol.format.GeoJSON();
var features_CBTMJGStops_24 = format_CBTMJGStops_24.readFeatures(json_CBTMJGStops_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGStops_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGStops_24.addFeatures(features_CBTMJGStops_24);
var lyr_CBTMJGStops_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGStops_24, 
                style: style_CBTMJGStops_24,
                popuplayertitle: "CBT MJG Stops",
                interactive: true,
    title: 'CBT MJG Stops<br />\
    <img src="styles/legend/CBTMJGStops_24_0.png" /> ARUN TALKIES<br />\
    <img src="styles/legend/CBTMJGStops_24_1.png" /> BEMCO<br />\
    <img src="styles/legend/CBTMJGStops_24_2.png" /> CBT<br />\
    <img src="styles/legend/CBTMJGStops_24_3.png" /> Court 1<br />\
    <img src="styles/legend/CBTMJGStops_24_4.png" /> Dsc 1<br />\
    <img src="styles/legend/CBTMJGStops_24_5.png" /> KOTEKERE<br />\
    <img src="styles/legend/CBTMJGStops_24_6.png" /> MAJGAON CROSS<br />\
    <img src="styles/legend/CBTMJGStops_24_7.png" /> Millitry Mahadev Mandir<br />\
    <img src="styles/legend/CBTMJGStops_24_8.png" /> RAILWAY 1ST GATE<br />\
    <img src="styles/legend/CBTMJGStops_24_9.png" /> RAILWAY 3RD GATE<br />\
    <img src="styles/legend/CBTMJGStops_24_10.png" /> RLS COLLEGE<br />\
    <img src="styles/legend/CBTMJGStops_24_11.png" /> Rst 1<br />\
    <img src="styles/legend/CBTMJGStops_24_12.png" /> UDYAMBAGH<br />\
    <img src="styles/legend/CBTMJGStops_24_13.png" /> UTSAV HOTEL<br />\
    <img src="styles/legend/CBTMJGStops_24_14.png" /> <br />'
        });
var format_CBTMJGSuggestedStops_25 = new ol.format.GeoJSON();
var features_CBTMJGSuggestedStops_25 = format_CBTMJGSuggestedStops_25.readFeatures(json_CBTMJGSuggestedStops_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGSuggestedStops_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGSuggestedStops_25.addFeatures(features_CBTMJGSuggestedStops_25);
var lyr_CBTMJGSuggestedStops_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGSuggestedStops_25, 
                style: style_CBTMJGSuggestedStops_25,
                popuplayertitle: "CBT MJG Suggested Stops",
                interactive: true,
                title: '<img src="styles/legend/CBTMJGSuggestedStops_25.png" /> CBT MJG Suggested Stops'
            });
var format_CBTMJGSuggestedStopPop_26 = new ol.format.GeoJSON();
var features_CBTMJGSuggestedStopPop_26 = format_CBTMJGSuggestedStopPop_26.readFeatures(json_CBTMJGSuggestedStopPop_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGSuggestedStopPop_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGSuggestedStopPop_26.addFeatures(features_CBTMJGSuggestedStopPop_26);
var lyr_CBTMJGSuggestedStopPop_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGSuggestedStopPop_26, 
                style: style_CBTMJGSuggestedStopPop_26,
                popuplayertitle: "CBT MJG Suggested Stop Pop",
                interactive: true,
    title: 'CBT MJG Suggested Stop Pop<br />\
    <img src="styles/legend/CBTMJGSuggestedStopPop_26_0.png" /> 10 min<br />'
        });
var format_CBTMJGStopChangesxlsx_27 = new ol.format.GeoJSON();
var features_CBTMJGStopChangesxlsx_27 = format_CBTMJGStopChangesxlsx_27.readFeatures(json_CBTMJGStopChangesxlsx_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGStopChangesxlsx_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGStopChangesxlsx_27.addFeatures(features_CBTMJGStopChangesxlsx_27);
var lyr_CBTMJGStopChangesxlsx_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGStopChangesxlsx_27, 
                style: style_CBTMJGStopChangesxlsx_27,
                popuplayertitle: "CBT MJG Stop Changes.xlsx",
                interactive: true,
                title: '<img src="styles/legend/CBTMJGStopChangesxlsx_27.png" /> CBT MJG Stop Changes.xlsx'
            });
var format_CBTMJGStopchangedxlsx_28 = new ol.format.GeoJSON();
var features_CBTMJGStopchangedxlsx_28 = format_CBTMJGStopchangedxlsx_28.readFeatures(json_CBTMJGStopchangedxlsx_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGStopchangedxlsx_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGStopchangedxlsx_28.addFeatures(features_CBTMJGStopchangedxlsx_28);
var lyr_CBTMJGStopchangedxlsx_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGStopchangedxlsx_28, 
                style: style_CBTMJGStopchangedxlsx_28,
                popuplayertitle: "CBT MJG Stop changed.xlsx",
                interactive: true,
                title: '<img src="styles/legend/CBTMJGStopchangedxlsx_28.png" /> CBT MJG Stop changed.xlsx'
            });
var format_CBTMJGPrposedRtPop_29 = new ol.format.GeoJSON();
var features_CBTMJGPrposedRtPop_29 = format_CBTMJGPrposedRtPop_29.readFeatures(json_CBTMJGPrposedRtPop_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGPrposedRtPop_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGPrposedRtPop_29.addFeatures(features_CBTMJGPrposedRtPop_29);
var lyr_CBTMJGPrposedRtPop_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGPrposedRtPop_29, 
                style: style_CBTMJGPrposedRtPop_29,
                popuplayertitle: "CBT MJG Prposed Rt Pop",
                interactive: true,
                title: '<img src="styles/legend/CBTMJGPrposedRtPop_29.png" /> CBT MJG Prposed Rt Pop'
            });
var format_CBTMJGProposedRoute_30 = new ol.format.GeoJSON();
var features_CBTMJGProposedRoute_30 = format_CBTMJGProposedRoute_30.readFeatures(json_CBTMJGProposedRoute_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGProposedRoute_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGProposedRoute_30.addFeatures(features_CBTMJGProposedRoute_30);
var lyr_CBTMJGProposedRoute_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGProposedRoute_30, 
                style: style_CBTMJGProposedRoute_30,
                popuplayertitle: "CBT MJG Proposed Route",
                interactive: true,
                title: '<img src="styles/legend/CBTMJGProposedRoute_30.png" /> CBT MJG Proposed Route'
            });
var format_CBTMJGProposedRtSTops_31 = new ol.format.GeoJSON();
var features_CBTMJGProposedRtSTops_31 = format_CBTMJGProposedRtSTops_31.readFeatures(json_CBTMJGProposedRtSTops_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTMJGProposedRtSTops_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTMJGProposedRtSTops_31.addFeatures(features_CBTMJGProposedRtSTops_31);
var lyr_CBTMJGProposedRtSTops_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTMJGProposedRtSTops_31, 
                style: style_CBTMJGProposedRtSTops_31,
                popuplayertitle: "CBT MJG Proposed Rt STops",
                interactive: true,
                title: '<img src="styles/legend/CBTMJGProposedRtSTops_31.png" /> CBT MJG Proposed Rt STops'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BelgaviBoundaryMtrs_1.setVisible(true);lyr_BelgaviOverallPOI_2.setVisible(true);lyr_Belgavistats_3.setVisible(true);lyr_BelgaviStopPop_4.setVisible(true);lyr_BelgaviRWI_5.setVisible(true);lyr_BelgaviRailwayStn_6.setVisible(true);lyr_BelgaviIndustries_7.setVisible(true);lyr_BelgaviOffice_8.setVisible(true);lyr_BelgaviPSU_9.setVisible(true);lyr_Education_10.setVisible(true);lyr_Temple_11.setVisible(true);lyr_BelgaviStopPopDissolved_12.setVisible(true);lyr_BelgaviStopPopCoverage_13.setVisible(true);lyr_BelgaviStops_14.setVisible(true);lyr_StopsinsideBelgavi_15.setVisible(true);lyr_BelgaviBoundary_16.setVisible(true);lyr_MJGCBTRouteMtrs_17.setVisible(true);lyr_MJGCBTStops_18.setVisible(true);lyr_RT46StopPopDissolved_19.setVisible(true);lyr_Rt46StopPop_20.setVisible(true);lyr_CBTMJGRtPop100mtr_21.setVisible(true);lyr_CBTMJGRWI_22.setVisible(true);lyr_CBTMJGRouteMtrs_23.setVisible(true);lyr_CBTMJGStops_24.setVisible(true);lyr_CBTMJGSuggestedStops_25.setVisible(true);lyr_CBTMJGSuggestedStopPop_26.setVisible(true);lyr_CBTMJGStopChangesxlsx_27.setVisible(true);lyr_CBTMJGStopchangedxlsx_28.setVisible(true);lyr_CBTMJGPrposedRtPop_29.setVisible(true);lyr_CBTMJGProposedRoute_30.setVisible(true);lyr_CBTMJGProposedRtSTops_31.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BelgaviBoundaryMtrs_1,lyr_BelgaviOverallPOI_2,lyr_Belgavistats_3,lyr_BelgaviStopPop_4,lyr_BelgaviRWI_5,lyr_BelgaviRailwayStn_6,lyr_BelgaviIndustries_7,lyr_BelgaviOffice_8,lyr_BelgaviPSU_9,lyr_Education_10,lyr_Temple_11,lyr_BelgaviStopPopDissolved_12,lyr_BelgaviStopPopCoverage_13,lyr_BelgaviStops_14,lyr_StopsinsideBelgavi_15,lyr_BelgaviBoundary_16,lyr_MJGCBTRouteMtrs_17,lyr_MJGCBTStops_18,lyr_RT46StopPopDissolved_19,lyr_Rt46StopPop_20,lyr_CBTMJGRtPop100mtr_21,lyr_CBTMJGRWI_22,lyr_CBTMJGRouteMtrs_23,lyr_CBTMJGStops_24,lyr_CBTMJGSuggestedStops_25,lyr_CBTMJGSuggestedStopPop_26,lyr_CBTMJGStopChangesxlsx_27,lyr_CBTMJGStopchangedxlsx_28,lyr_CBTMJGPrposedRtPop_29,lyr_CBTMJGProposedRoute_30,lyr_CBTMJGProposedRtSTops_31];
lyr_BelgaviBoundaryMtrs_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BelgaviOverallPOI_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'OverallPOI': 'OverallPOI', });
lyr_Belgavistats_3.set('fieldAliases', {'shapeName': 'shapeName', 'area': 'area', 'perimeter': 'perimeter', 'Area SqKm': 'Area SqKm', 'Peri KM': 'Peri KM', });
lyr_BelgaviStopPop_4.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_BelgaviRWI_5.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BelgaviRailwayStn_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'shop': 'shop', 'aeroway': 'aeroway', 'railway': 'railway', 'self_servi': 'self_servi', 'operator': 'operator', 'fuel_diese': 'fuel_diese', 'fuel_Petro': 'fuel_Petro', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'building': 'building', 'name_kn': 'name_kn', 'name': 'name', 'public_tra': 'public_tra', 'highway': 'highway', 'taxi': 'taxi', 'traffic_si': 'traffic_si', 'official_n': 'official_n', 'addr_house': 'addr_house', 'alt_name': 'alt_name', 'shelter': 'shelter', 'bench': 'bench', 'check_date': 'check_date', 'supervised': 'supervised', 'opening_ho': 'opening_ho', 'voltage': 'voltage', 'frequency': 'frequency', 'electrifie': 'electrifie', 'maxheight': 'maxheight', 'brand_wi_1': 'brand_wi_1', 'wheelchair': 'wheelchair', 'flood_pron': 'flood_pron', 'access': 'access', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'name_en': 'name_en', 'local_ref': 'local_ref', 'surface': 'surface', 'crossing_m': 'crossing_m', 'bus': 'bus', 'crossing_b': 'crossing_b', 'wikidata': 'wikidata', 'network': 'network', 'internet_a': 'internet_a', 'website': 'website', 'phone': 'phone', 'designatio': 'designatio', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'exit_to': 'exit_to', 'ref': 'ref', 'payment_fa': 'payment_fa', 'payment_ca': 'payment_ca', 'currency_I': 'currency_I', 'junction': 'junction', 'traffic__1': 'traffic__1', 'button_ope': 'button_ope', 'traffic__2': 'traffic__2', 'loc_name': 'loc_name', 'crossing': 'crossing', 'traffic_ca': 'traffic_ca', 'barrier': 'barrier', 'name_mr': 'name_mr', 'traffic__3': 'traffic__3', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviIndustries_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', });
lyr_BelgaviOffice_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'level': 'level', 'wikidata': 'wikidata', 'name_kn': 'name_kn', 'name': 'name', 'landuse': 'landuse', 'government': 'government', 'wheelchair': 'wheelchair', 'website': 'website', 'smoking': 'smoking', 'phone': 'phone', 'operator': 'operator', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviPSU_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'phone': 'phone', 'name_kn': 'name_kn', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'police': 'police', 'operator_w': 'operator_w', 'operator': 'operator', 'addr_distr': 'addr_distr', 'type': 'type', 'building': 'building', 'layer': 'layer', 'path': 'path', });
lyr_Education_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'phone': 'phone', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'barrier': 'barrier', 'name_etymo': 'name_etymo', 'name_kn': 'name_kn', 'name': 'name', 'start_date': 'start_date', 'name_ta': 'name_ta', 'name_hi': 'name_hi', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'website': 'website', 'email': 'email', 'alt_name': 'alt_name', 'type': 'type', 'layer': 'layer', 'path': 'path', });
lyr_Temple_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'check_date': 'check_date', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'name_kn': 'name_kn', 'name': 'name', 'start_date': 'start_date', 'historic': 'historic', 'building': 'building', 'landuse': 'landuse', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviStopPopDissolved_12.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'BelgaviPop': 'BelgaviPop', 'Coverage': 'Coverage', });
lyr_BelgaviStopPopCoverage_13.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'BelgaviPop': 'BelgaviPop', 'Coverage': 'Coverage', });
lyr_BelgaviStops_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'StopId': 'StopId', 'Lat': 'Lat', 'Lng': 'Lng', });
lyr_StopsinsideBelgavi_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descript_1': 'descript_1', 'altitude_1': 'altitude_1', 'StopId': 'StopId', 'Lat': 'Lat', 'Lng': 'Lng', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BelgaviBoundary_16.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_MJGCBTRouteMtrs_17.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_MJGCBTStops_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_RT46StopPopDissolved_19.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Pax': 'Pax', 'Ridership%': 'Ridership%', });
lyr_Rt46StopPop_20.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CBTMJGRtPop100mtr_21.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTMJGRWI_22.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTMJGRouteMtrs_23.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_CBTMJGStops_24.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_CBTMJGSuggestedStops_25.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'distance': 'distance', 'angle': 'angle', });
lyr_CBTMJGSuggestedStopPop_26.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CBTMJGStopChangesxlsx_27.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CBTMJGStopchangedxlsx_28.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'TOTAL_POP': 'TOTAL_POP', 'Diff': 'Diff', 'Diff_': 'Diff_', });
lyr_CBTMJGPrposedRtPop_29.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTMJGProposedRoute_30.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_CBTMJGProposedRtSTops_31.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'distance': 'distance', 'angle': 'angle', });
lyr_BelgaviBoundaryMtrs_1.set('fieldImages', {'shapeName': '', 'shapeISO': '', 'shapeID': '', 'shapeGroup': '', 'shapeType': '', });
lyr_BelgaviOverallPOI_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'OverallPOI': 'Range', });
lyr_Belgavistats_3.set('fieldImages', {'shapeName': '', 'area': '', 'perimeter': '', 'Area SqKm': '', 'Peri KM': '', });
lyr_BelgaviStopPop_4.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_BelgaviRWI_5.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BelgaviRailwayStn_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'self_servi': 'TextEdit', 'operator': 'TextEdit', 'fuel_diese': 'TextEdit', 'fuel_Petro': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'building': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'taxi': 'TextEdit', 'traffic_si': 'TextEdit', 'official_n': 'TextEdit', 'addr_house': 'TextEdit', 'alt_name': 'TextEdit', 'shelter': 'TextEdit', 'bench': 'TextEdit', 'check_date': 'TextEdit', 'supervised': 'TextEdit', 'opening_ho': 'TextEdit', 'voltage': 'TextEdit', 'frequency': 'TextEdit', 'electrifie': 'TextEdit', 'maxheight': 'TextEdit', 'brand_wi_1': 'TextEdit', 'wheelchair': 'TextEdit', 'flood_pron': 'TextEdit', 'access': 'TextEdit', 'motor_vehi': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'name_en': 'TextEdit', 'local_ref': 'TextEdit', 'surface': 'TextEdit', 'crossing_m': 'TextEdit', 'bus': 'TextEdit', 'crossing_b': 'TextEdit', 'wikidata': 'TextEdit', 'network': 'TextEdit', 'internet_a': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'designatio': 'TextEdit', 'descriptio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'exit_to': 'TextEdit', 'ref': 'TextEdit', 'payment_fa': 'TextEdit', 'payment_ca': 'TextEdit', 'currency_I': 'TextEdit', 'junction': 'TextEdit', 'traffic__1': 'TextEdit', 'button_ope': 'TextEdit', 'traffic__2': 'TextEdit', 'loc_name': 'TextEdit', 'crossing': 'TextEdit', 'traffic_ca': 'TextEdit', 'barrier': 'TextEdit', 'name_mr': 'TextEdit', 'traffic__3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviIndustries_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', });
lyr_BelgaviOffice_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'level': 'TextEdit', 'wikidata': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'landuse': 'TextEdit', 'government': 'TextEdit', 'wheelchair': 'TextEdit', 'website': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviPSU_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'phone': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'police': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'addr_distr': 'TextEdit', 'type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Education_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'phone': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'barrier': 'TextEdit', 'name_etymo': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'start_date': 'TextEdit', 'name_ta': 'TextEdit', 'name_hi': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'email': 'TextEdit', 'alt_name': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Temple_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'check_date': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'descriptio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'start_date': 'TextEdit', 'historic': 'TextEdit', 'building': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviStopPopDissolved_12.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'BelgaviPop': 'Range', 'Coverage': 'TextEdit', });
lyr_BelgaviStopPopCoverage_13.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'BelgaviPop': 'TextEdit', 'Coverage': 'TextEdit', });
lyr_BelgaviStops_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'StopId': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', });
lyr_StopsinsideBelgavi_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descript_1': 'TextEdit', 'altitude_1': 'TextEdit', 'StopId': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BelgaviBoundary_16.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_MJGCBTRouteMtrs_17.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'Range', 'Bus Time': 'Range', });
lyr_MJGCBTStops_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_RT46StopPopDissolved_19.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', 'Pax': '', 'Ridership%': '', });
lyr_Rt46StopPop_20.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_CBTMJGRtPop100mtr_21.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTMJGRWI_22.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'TextEdit', });
lyr_CBTMJGRouteMtrs_23.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', });
lyr_CBTMJGStops_24.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CBTMJGSuggestedStops_25.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'Drive Time': '', 'Bus Time': '', 'distance': '', 'angle': '', });
lyr_CBTMJGSuggestedStopPop_26.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_CBTMJGStopChangesxlsx_27.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_CBTMJGStopchangedxlsx_28.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Diff': 'TextEdit', 'Diff_': 'TextEdit', });
lyr_CBTMJGPrposedRtPop_29.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTMJGProposedRoute_30.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', });
lyr_CBTMJGProposedRtSTops_31.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'Drive Time': '', 'Bus Time': '', 'distance': '', 'angle': '', });
lyr_BelgaviBoundaryMtrs_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BelgaviOverallPOI_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'OverallPOI': 'inline label - always visible', });
lyr_Belgavistats_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'area': 'inline label - visible with data', 'perimeter': 'inline label - visible with data', 'Area SqKm': 'inline label - visible with data', 'Peri KM': 'inline label - visible with data', });
lyr_BelgaviStopPop_4.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_BelgaviRWI_5.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'shapeName': 'inline label - visible with data', 'shapeISO': 'header label - visible with data', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BelgaviRailwayStn_6.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'shop': 'hidden field', 'aeroway': 'hidden field', 'railway': 'hidden field', 'self_servi': 'hidden field', 'operator': 'hidden field', 'fuel_diese': 'hidden field', 'fuel_Petro': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'building': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'public_tra': 'hidden field', 'highway': 'hidden field', 'taxi': 'hidden field', 'traffic_si': 'hidden field', 'official_n': 'hidden field', 'addr_house': 'hidden field', 'alt_name': 'hidden field', 'shelter': 'hidden field', 'bench': 'hidden field', 'check_date': 'hidden field', 'supervised': 'hidden field', 'opening_ho': 'hidden field', 'voltage': 'hidden field', 'frequency': 'hidden field', 'electrifie': 'hidden field', 'maxheight': 'hidden field', 'brand_wi_1': 'hidden field', 'wheelchair': 'hidden field', 'flood_pron': 'hidden field', 'access': 'hidden field', 'motor_vehi': 'hidden field', 'horse': 'hidden field', 'foot': 'hidden field', 'bicycle': 'hidden field', 'name_en': 'hidden field', 'local_ref': 'hidden field', 'surface': 'hidden field', 'crossing_m': 'hidden field', 'bus': 'hidden field', 'crossing_b': 'hidden field', 'wikidata': 'hidden field', 'network': 'hidden field', 'internet_a': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'designatio': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'exit_to': 'hidden field', 'ref': 'hidden field', 'payment_fa': 'hidden field', 'payment_ca': 'hidden field', 'currency_I': 'hidden field', 'junction': 'hidden field', 'traffic__1': 'hidden field', 'button_ope': 'hidden field', 'traffic__2': 'hidden field', 'loc_name': 'hidden field', 'crossing': 'hidden field', 'traffic_ca': 'hidden field', 'barrier': 'hidden field', 'name_mr': 'hidden field', 'traffic__3': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviIndustries_7.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', });
lyr_BelgaviOffice_8.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'level': 'hidden field', 'wikidata': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'landuse': 'hidden field', 'government': 'hidden field', 'wheelchair': 'hidden field', 'website': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviPSU_9.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'phone': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'police': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'addr_distr': 'hidden field', 'type': 'hidden field', 'building': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Education_10.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'phone': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'barrier': 'hidden field', 'name_etymo': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'start_date': 'hidden field', 'name_ta': 'hidden field', 'name_hi': 'hidden field', 'wikipedia': 'hidden field', 'wikidata': 'hidden field', 'website': 'hidden field', 'email': 'hidden field', 'alt_name': 'hidden field', 'type': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Temple_11.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'check_date': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'start_date': 'hidden field', 'historic': 'hidden field', 'building': 'hidden field', 'landuse': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviStopPopDissolved_12.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'BelgaviPop': 'inline label - visible with data', 'Coverage': 'header label - visible with data', });
lyr_BelgaviStopPopCoverage_13.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'BelgaviPop': 'inline label - visible with data', 'Coverage': 'header label - visible with data', });
lyr_BelgaviStops_14.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'StopId': 'hidden field', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', });
lyr_StopsinsideBelgavi_15.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'descript_1': 'hidden field', 'altitude_1': 'hidden field', 'StopId': 'hidden field', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BelgaviBoundary_16.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_MJGCBTRouteMtrs_17.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'header label - visible with data', });
lyr_MJGCBTStops_18.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_RT46StopPopDissolved_19.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership%': 'header label - visible with data', });
lyr_Rt46StopPop_20.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'hidden field', });
lyr_CBTMJGRtPop100mtr_21.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTMJGRWI_22.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_CBTMJGRouteMtrs_23.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'header label - visible with data', });
lyr_CBTMJGStops_24.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CBTMJGSuggestedStops_25.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'distance': 'inline label - visible with data', 'angle': 'hidden field', });
lyr_CBTMJGSuggestedStopPop_26.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_CBTMJGStopChangesxlsx_27.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'TOTAL_POP': 'header label - always visible', });
lyr_CBTMJGStopchangedxlsx_28.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', 'Diff': 'inline label - visible with data', 'Diff_': 'header label - visible with data', });
lyr_CBTMJGPrposedRtPop_29.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTMJGProposedRoute_30.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'header label - visible with data', });
lyr_CBTMJGProposedRtSTops_31.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'distance': 'header label - visible with data', 'angle': 'hidden field', });
lyr_CBTMJGProposedRtSTops_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});