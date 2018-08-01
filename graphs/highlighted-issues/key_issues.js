/* -------------------- skin amchart ----------------------- */
AmCharts.makeChart("skin",
				{
					"type": "serial",
					"categoryField": "category",
					"columnSpacing": 3,
					"columnWidth": 0.04,
					"startDuration": 1,
					"backgroundAlpha": 0.94,"fontSize": 12,
					"percentPrecision": 1,
					"precision": 0,
					"categoryAxis": {
						"gridPosition": "start",
						"title": "Assessment date"
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0,
						"categoryBalloonColor": "#CC0000"
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
							"balloonColor": "#FF0000",
							"balloonText": "[[category]]:[[value]]",
							"columnWidth": 0.04,
							"cornerRadiusTop": 5,
							"dashLength": 4,
							"fillAlphas": 1,
							"fillColors": "#FF8000",
							"gapPeriod": 0,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"lineThickness": 3,
							"negativeFillAlphas": 0,
							"negativeFillColors": "undefined",
							"title": "",
							"topRadius": 0,
							"type": "column",
							"valueField": "column-1",
							"visibleInLegend": false,
							"xField": "column-1",
							"yField": "category"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"axisFrequency": 0,
							"id": "ValueAxis-1",
							"maximum": 10,
							"minimum": 1,
							"minMaxMultiplier": 0,
							"autoRotateAngle": -5.4,
							"gridCount": 1,
						"title": "Level of concern"
							
						}
					],
					"allLabels": [
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-1",
							"text": "(High concern)",
							"x": 1,
							"y": 35
						},
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-2",
							"text": "(No concern)",
							"x": 1,
							"y": 310
						}
					],
					"balloon": {
						"animationDuration": 0,
						"fadeOutDuration": 0
					},
					"legend": {
						"enabled": true,
						"position": "absolute",
						"spacing": 9,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Skin"
						}
					],
					"dataProvider": [
						{
							"category": "07-02-2018",
							"column-1": ""
						},
						{
							"category": "11-02-2018",
							"column-1": ""
						},
						{
							"category": "19-02-2018",
							"column-1": "6"
						},
						{
							"category": "27-02-2018",
							"column-1": "6"
						}
					]
				}
			);
			

/* -------------------- cope difficulties amchart ----------------------- */
AmCharts.makeChart("cope-difficulties",
				{
					"type": "serial",
					"categoryField": "category",
					"columnSpacing": 3,
					"columnWidth": 0.04,
					"startDuration": 1,
					"backgroundAlpha": 0.94,"fontSize": 12,
					"percentPrecision": 1,
					"precision": 0,
					"categoryAxis": {
						"gridPosition": "start",
						"title": "Assessment date"
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0,
						"categoryBalloonColor": "#CC0000"
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
							"balloonColor": "#FF0000",
							"balloonText": "[[category]]:[[value]]",
							"columnWidth": 0.04,
							"cornerRadiusTop": 5,
							"dashLength": 4,
							"fillAlphas": 1,
							"fillColors": "#FF8000",
							"gapPeriod": 0,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"lineThickness": 3,
							"negativeFillAlphas": 0,
							"negativeFillColors": "undefined",
							"title": "",
							"topRadius": 0,
							"type": "column",
							"valueField": "column-1",
							"visibleInLegend": false,
							"xField": "column-1",
							"yField": "category"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"axisFrequency": 0,
							"id": "ValueAxis-1",
							"maximum": 10,
							"minimum": 1,
							"minMaxMultiplier": 0,
							"autoRotateAngle": -5.4,
							"gridCount": 1,
									"title": "Level of concern",
						}
					],
					"allLabels": [
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-1",
							"text": "(High concern)",
							"x": 1,
							"y": 35
						},
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-2",
							"text": "(No concern)",
							"x": 1,
							"y": 310
						}
					],
					"balloon": {
						"animationDuration": 0,
						"fadeOutDuration": 0
					},
					"legend": {
						"enabled": true,
						"position": "absolute",
						"spacing": 9,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Self-harming to cope with difficulties"
						}
					],
					"dataProvider": [
						{
							"category": "07-02-2018",
							"column-1": "2"
						},
						{
							"category": "11-02-2018",
							"column-1": ""
						},
						{
							"category": "19-02-2018",
							"column-1": ""
						},
						{
							"category": "27-02-2018",
							"column-1": "10"
						}
					]
				}
			);
			
/* -------------------- emotional vulnerability amchart ----------------------- */
AmCharts.makeChart("emotional-vulnerability",
				{
					"type": "serial",
					"categoryField": "category",
					"columnSpacing": 3,
					"columnWidth": 0.04,
					"startDuration": 1,
					"backgroundAlpha": 0.94,"fontSize": 12,
					"percentPrecision": 1,
					"precision": 0,
					"categoryAxis": {
						"gridPosition": "start",
						"title": "Assessment date"
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0,
						"categoryBalloonColor": "#CC0000"
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
							"balloonColor": "#FF0000",
							"balloonText": "[[category]]:[[value]]",
							"columnWidth": 0.04,
							"cornerRadiusTop": 5,
							"dashLength": 4,
							"fillAlphas": 1,
							"fillColors": "#FF8000",
							"gapPeriod": 0,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"lineThickness": 3,
							"negativeFillAlphas": 0,
							"negativeFillColors": "undefined",
							"title": "",
							"topRadius": 0,
							"type": "column",
							"valueField": "column-1",
							"visibleInLegend": false,
							"xField": "column-1",
							"yField": "category"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"axisFrequency": 0,
							"id": "ValueAxis-1",
							"maximum": 10,
							"minimum": 1,
							"minMaxMultiplier": 0,
							"autoRotateAngle": -5.4,
							"gridCount": 1,
						"title": "Level of concern"
						}
					],
					"allLabels": [
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-1",
							"text": "(High concern)",
							"x": 1,
							"y": 35
						},
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-2",
							"text": "(No concern)",
							"x": 1,
							"y": 310
						}
					],
					"balloon": {
						"animationDuration": 0,
						"fadeOutDuration": 0
					},
					"legend": {
						"enabled": true,
						"position": "absolute",
						"spacing": 9,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Emotional Vulnerable"
						}
					],
					"dataProvider": [
						{
							"category": "07-02-2018",
							"column-1": "0"
						},
						{
							"category": "11-02-2018",
							"column-1": ""
						},
						{
							"category": "19-02-2018",
							"column-1": ""
						},
						{
							"category": "27-02-2018",
							"column-1": "8"
						}
					]
				}
			);
			

/* -------------------- financial vulnerability amchart ----------------------- */
AmCharts.makeChart("financial-vulnerability",
				{
					"type": "serial",
					"categoryField": "category",
					"columnSpacing": 3,
					"columnWidth": 0.04,
					"startDuration": 1,
					"backgroundAlpha": 0.94,"fontSize": 12,
					"percentPrecision": 1,
					"precision": 0,
					"categoryAxis": {
						"gridPosition": "start",
						"title": "Assessment date"
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0,
						"categoryBalloonColor": "#CC0000"
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
							"balloonColor": "#FF0000",
							"balloonText": "[[category]]:[[value]]",
							"columnWidth": 0.04,
							"cornerRadiusTop": 5,
							"dashLength": 4,
							"fillAlphas": 1,
							"fillColors": "#FF8000",
							"gapPeriod": 0,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"lineThickness": 3,
							"negativeFillAlphas": 0,
							"negativeFillColors": "undefined",
							"title": "",
							"topRadius": 0,
							"type": "column",
							"valueField": "column-1",
							"visibleInLegend": false,
							"xField": "column-1",
							"yField": "category"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"axisFrequency": 0,
							"id": "ValueAxis-1",
							"maximum": 10,
							"minimum": 1,
							"minMaxMultiplier": 0,
							"autoRotateAngle": -5.4,
							"gridCount": 1,
						"title": "Level of concern"
						}
					],
					"allLabels": [
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-1",
							"text": "(High concern)",
							"x": 1,
							"y": 35
						},
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-2",
							"text": "(No concern)",
							"x": 1,
							"y": 310
						}
					],
					"balloon": {
						"animationDuration": 0,
						"fadeOutDuration": 0
					},
					"legend": {
						"enabled": true,
						"position": "absolute",
						"spacing": 9,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Financial Vulnerability"
						}
					],
					"dataProvider": [
						{
							"category": "07-02-2018",
							"column-1": ""
						},
						{
							"category": "11-02-2018",
							"column-1": ""
						},
						{
							"category": "19-02-2018",
							"column-1": ""
						},
						{
							"category": "27-02-2018",
							"column-1": "8"
						}
					]
				}
			);
			

/* -------------------- falls accidents amchart ----------------------- */
AmCharts.makeChart("falls-accidents",
				{
					"type": "serial",
					"categoryField": "category",
					"columnSpacing": 3,
					"columnWidth": 0.04,
					"startDuration": 1,
					"backgroundAlpha": 0.94,"fontSize": 12,
					"percentPrecision": 1,
					"precision": 0,
					"categoryAxis": {
						"gridPosition": "start",
						"title": "Assessment date"
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0,
						"categoryBalloonColor": "#CC0000"
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
							"balloonColor": "#FF0000",
							"balloonText": "[[category]]:[[value]]",
							"columnWidth": 0.04,
							"cornerRadiusTop": 5,
							"dashLength": 4,
							"fillAlphas": 1,
							"fillColors": "#FF8000",
							"gapPeriod": 0,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"lineThickness": 3,
							"negativeFillAlphas": 0,
							"negativeFillColors": "undefined",
							"title": "",
							"topRadius": 0,
							"type": "column",
							"valueField": "column-1",
							"visibleInLegend": false,
							"xField": "column-1",
							"yField": "category"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"axisFrequency": 0,
							"id": "ValueAxis-1",
							"maximum": 10,
							"minimum": 1,
							"minMaxMultiplier": 0,
							"autoRotateAngle": -5.4,
							"gridCount": 1,
						"title": "Level of concern"
						}
					],
					"allLabels": [
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-1",
							"text": "(High concern)",
							"x": 1,
							"y": 35
						},
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-2",
							"text": "(No concern)",
							"x": 1,
							"y": 310
						}
					],
					"balloon": {
						"animationDuration": 0,
						"fadeOutDuration": 0
					},
					"legend": {
						"enabled": true,
						"position": "absolute",
						"spacing": 9,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Recent falls or accidents"
						}
					],
					"dataProvider": [
						{
							"category": "07-02-2018",
							"column-1": ""
						},
						{
							"category": "11-02-2018",
							"column-1": ""
						},
						{
							"category": "19-02-2018",
							"column-1": ""
						},
						{
							"category": "27-02-2018",
							"column-1": "10"
						}
					]
				}
			);
			

/* -------------------- personal hygiene amchart ----------------------- */
AmCharts.makeChart("personal-hygiene",
				{
					"type": "serial",
					"categoryField": "category",
					"columnSpacing": 3,
					"columnWidth": 0.04,
					"startDuration": 1,
					"backgroundAlpha": 0.94,"fontSize": 12,
					"percentPrecision": 1,
					"precision": 0,
					"categoryAxis": {
						"gridPosition": "start",
						"title": "Assessment date"
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0,
						"categoryBalloonColor": "#CC0000"
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
							"balloonColor": "#FF0000",
							"balloonText": "[[category]]:[[value]]",
							"columnWidth": 0.04,
							"cornerRadiusTop": 5,
							"dashLength": 4,
							"fillAlphas": 1,
							"fillColors": "#FF8000",
							"gapPeriod": 0,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"lineThickness": 3,
							"negativeFillAlphas": 0,
							"negativeFillColors": "undefined",
							"title": "",
							"topRadius": 0,
							"type": "column",
							"valueField": "column-1",
							"visibleInLegend": false,
							"xField": "column-1",
							"yField": "category"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"axisFrequency": 0,
							"id": "ValueAxis-1",
							"maximum": 10,
							"minimum": 1,
							"minMaxMultiplier": 0,
							"autoRotateAngle": -5.4,
							"gridCount": 1,
						"title": "Level of concern"
						}
					],
					"allLabels": [
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-1",
							"text": "(High concern)",
							"x": 1,
							"y": 35
						},
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-2",
							"text": "(No concern)",
							"x": 1,
							"y": 310
						}
					],
					"balloon": {
						"animationDuration": 0,
						"fadeOutDuration": 0
					},
					"legend": {
						"enabled": true,
						"position": "absolute",
						"spacing": 9,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Personal Hygiene"
						}
					],
					"dataProvider": [
						{
							"category": "07-02-2018",
							"column-1": "4"
						},
						{
							"category": "11-02-2018",
							"column-1": ""
						},
						{
							"category": "19-02-2018",
							"column-1": "6"
						},
						{
							"category": "27-02-2018",
							"column-1": "6"
						}
					]
				}
			);
			

/* -------------------- self harming injuries amchart ----------------------- */
AmCharts.makeChart("self-harming-injuries",
				{
					"type": "serial",
					"categoryField": "category",
					"columnSpacing": 3,
					"columnWidth": 0.04,
					"startDuration": 1,
					"backgroundAlpha": 0.94,"fontSize": 12,
					"percentPrecision": 1,
					"precision": 0,
					"categoryAxis": {
						"gridPosition": "start",
						"title": "Assessment date"
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0,
						"categoryBalloonColor": "#CC0000"
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
							"balloonColor": "#FF0000",
							"balloonText": "[[category]]:[[value]]",
							"columnWidth": 0.04,
							"cornerRadiusTop": 5,
							"dashLength": 4,
							"fillAlphas": 1,
							"fillColors": "#FF8000",
							"gapPeriod": 0,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"lineThickness": 3,
							"negativeFillAlphas": 0,
							"negativeFillColors": "undefined",
							"title": "",
							"topRadius": 0,
							"type": "column",
							"valueField": "column-1",
							"visibleInLegend": false,
							"xField": "column-1",
							"yField": "category"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"axisFrequency": 0,
							"id": "ValueAxis-1",
							"maximum": 10,
							"minimum": 1,
							"minMaxMultiplier": 0,
							"autoRotateAngle": -5.4,
							"gridCount": 1,
						"title": "Level of concern"
						}
					],
					"allLabels": [
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-1",
							"text": "(High concern)",
							"x": 1,
							"y": 35
						},
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-2",
							"text": "(No concern)",
							"x": 1,
							"y": 310
						}
					],
					"balloon": {
						"animationDuration": 0,
						"fadeOutDuration": 0
					},
					"legend": {
						"enabled": true,
						"position": "absolute",
						"spacing": 9,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Self-harming injuries"
						}
					],
					"dataProvider": [
						{
							"category": "07-02-2018",
							"column-1": "2"
						},
						{
							"category": "11-02-2018",
							"column-1": ""
						},
						{
							"category": "19-02-2018",
							"column-1": "5"
						},
						{
							"category": "27-02-2018",
							"column-1": "9"
						}
					]
				}
			);
			

/* -------------------- self harming method amchart ----------------------- */
AmCharts.makeChart("self-harming-method",
				{
					"type": "serial",
					"categoryField": "category",
					"columnSpacing": 3,
					"columnWidth": 0.04,
					"startDuration": 1,
					"backgroundAlpha": 0.94,"fontSize": 12,
					"percentPrecision": 1,
					"precision": 0,
					"categoryAxis": {
						"gridPosition": "start",
						"title": "Assessment date"
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0,
						"categoryBalloonColor": "#CC0000"
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
							"balloonColor": "#FF0000",
							"balloonText": "[[category]]:[[value]]",
							"columnWidth": 0.04,
							"cornerRadiusTop": 5,
							"dashLength": 4,
							"fillAlphas": 1,
							"fillColors": "#FF8000",
							"gapPeriod": 0,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"lineThickness": 3,
							"negativeFillAlphas": 0,
							"negativeFillColors": "undefined",
							"title": "",
							"topRadius": 0,
							"type": "column",
							"valueField": "column-1",
							"visibleInLegend": false,
							"xField": "column-1",
							"yField": "category"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"axisFrequency": 0,
							"id": "ValueAxis-1",
							"maximum": 10,
							"minimum": 1,
							"minMaxMultiplier": 0,
							"autoRotateAngle": -5.4,
							"gridCount": 1,
						"title": "Level of concern"
						}
					],
					"allLabels": [
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-1",
							"text": "(High concern)",
							"x": 1,
							"y": 35
						},
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-2",
							"text": "(No concern)",
							"x": 1,
							"y": 310
						}
					],
					"balloon": {
						"animationDuration": 0,
						"fadeOutDuration": 0
					},
					"legend": {
						"enabled": true,
						"position": "absolute",
						"spacing": 9,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Change in self-harming method"
						}
					],
					"dataProvider": [
						{
							"category": "07-02-2018",
							"column-1": ""
						},
						{
							"category": "11-02-2018",
							"column-1": ""
						},
						{
							"category": "19-02-2018",
							"column-1": ""
						},
						{
							"category": "27-02-2018",
							"column-1": "10"
						}
					]
				}
			);
			

/* -------------------- self neglect amchart ----------------------- */
AmCharts.makeChart("self-neglect",
				{
					"type": "serial",
					"categoryField": "category",
					"columnSpacing": 3,
					"columnWidth": 0.04,
					"startDuration": 1,
					"backgroundAlpha": 0.94,"fontSize": 12,
					"percentPrecision": 1,
					"precision": 0,
					"categoryAxis": {
						"gridPosition": "start",
						"title": "Assessment date"
					},
					"chartCursor": {
						"enabled": true,
						"animationDuration": 0,
						"categoryBalloonColor": "#CC0000"
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
							"balloonColor": "#FF0000",
							"balloonText": "[[category]]:[[value]]",
							"columnWidth": 0.04,
							"cornerRadiusTop": 5,
							"dashLength": 4,
							"fillAlphas": 1,
							"fillColors": "#FF8000",
							"gapPeriod": 0,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"lineThickness": 3,
							"negativeFillAlphas": 0,
							"negativeFillColors": "undefined",
							"title": "",
							"topRadius": 0,
							"type": "column",
							"valueField": "column-1",
							"visibleInLegend": false,
							"xField": "column-1",
							"yField": "category"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"axisFrequency": 0,
							"id": "ValueAxis-1",
							"maximum": 10,
							"minimum": 1,
							"minMaxMultiplier": 0,
							"autoRotateAngle": -5.4,
							"gridCount": 1,
						"title": "Level of concern"
						}
					],
					"allLabels": [
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-1",
							"text": "(High concern)",
							"x": 1,
							"y": 35
						},
						{
							"bold": true,
							"color": "transparent",
							"id": "Label-2",
							"text": "(No concern)",
							"x": 1,
							"y": 310
						}
					],
					"balloon": {
						"animationDuration": 0,
						"fadeOutDuration": 0
					},
					"legend": {
						"enabled": true,
						"position": "absolute",
						"spacing": 9,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Signs of self neglect"
						}
					],
					"dataProvider": [
						{
							"category": "07-02-2018",
							"column-1": ""
						},
						{
							"category": "11-02-2018",
							"column-1": "2"
						},
						{
							"category": "19-02-2018",
							"column-1": "7"
						},
						{
							"category": "27-02-2018",
							"column-1": "8"
						}
					]
				}
			);