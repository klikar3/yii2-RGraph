'version:2023-07-17 (6.13)';RGraph=window.RGraph||{isrgraph:true,isRGraph:true,rgraph:true};RGraph.SVG=RGraph.SVG||{};(function(win,doc,undefined)
{RGraph.SVG.Waterfall=function(conf)
{this.set=function(name,value)
{if(name==='colorsConnector'){name='colorsConnectors';}
if(arguments.length===1&&typeof name==='object'){for(i in arguments[0]){if(typeof i==='string'){name=ret.name;value=ret.value;this.set(name,value);}}}else{var ret=RGraph.SVG.commonSetter({object:this,name:name,value:value});name=ret.name;value=ret.value;this.properties[name]=value;if(name==='colors'){this.originalColors=RGraph.SVG.arrayClone(value);this.colorsParsed=false;}}
return this;};this.get=function(name)
{return this.properties[name];};conf.data=RGraph.SVG.stringsToNumbers(conf.data);this.id=conf.id;this.uid=RGraph.SVG.createUID();this.container=document.getElementById(this.id);this.layers={};this.svg=RGraph.SVG.createSVG({object:this,container:this.container});this.isRGraph=true;this.isrgraph=true;this.rgraph=true;this.data=conf.data;this.type='waterfall';this.coords=[];this.colorsParsed=false;this.originalColors={};this.gradientCounter=1;this.totalColumns=[];this.firstDraw=true;RGraph.SVG.OR.add(this);this.container.style.display='inline-block';for(var i=0;i<this.data.length;++i){if(RGraph.SVG.isNull(this.data[i])){this.totalColumns[i]=true;}}
this.properties={marginLeft:35,marginRight:35,marginTop:35,marginBottom:35,marginInner:5,backgroundColor:null,backgroundImage:null,backgroundImageAspect:'none',backgroundImageStretch:true,backgroundImageOpacity:null,backgroundImageX:null,backgroundImageY:null,backgroundImageW:null,backgroundImageH:null,backgroundGrid:true,backgroundGridColor:'#ddd',backgroundGridLinewidth:1,backgroundGridHlines:true,backgroundGridHlinesCount:null,backgroundGridVlines:true,backgroundGridVlinesCount:null,backgroundGridBorder:true,backgroundGridDashed:false,backgroundGridDotted:false,backgroundGridDashArray:null,colors:['black','red','blue'],colorsSequential:false,colorsStroke:'#aaa',colorsConnectors:'#666',total:true,linewidth:1,yaxis:true,yaxisTickmarks:true,yaxisTickmarksLength:5,yaxisColor:'black',yaxisScale:true,yaxisLabels:null,yaxisLabelsOffsetx:0,yaxisLabelsOffsety:0,yaxisLabelsCount:5,yaxisScaleUnitsPre:'',yaxisScaleUnitsPost:'',yaxisScaleStrict:false,yaxisScaleDecimals:0,yaxisScalePoint:'.',yaxisScaleThousand:',',yaxisScaleRound:false,yaxisScaleMax:null,yaxisScaleMin:0,yaxisScaleFormatter:null,yaxisLabelsColor:null,yaxisLabelsBold:null,yaxisLabelsItalic:null,yaxisLabelsFont:null,yaxisLabelsSize:null,yaxisTitle:'',yaxisTitleBold:null,yaxisTitleSize:null,yaxisTitleFont:null,yaxisTitleColor:null,yaxisTitleItalic:null,yaxisTitleOffsetx:0,yaxisTitleOffsety:0,yaxisTitleX:null,yaxisTitleY:null,yaxisTitleHalign:null,yaxisTitleValign:null,xaxis:true,xaxisTickmarks:true,xaxisTickmarksLength:5,xaxisLabels:null,xaxisLabelsFont:null,xaxisLabelsSize:null,xaxisLabelsColor:null,xaxisLabelsBold:null,xaxisLabelsItalic:null,xaxisLabelsPosition:'section',xaxisLabelsPositionEdgeTickmarksCount:null,xaxisLabelsFormattedDecimals:0,xaxisLabelsFormattedPoint:'.',xaxisLabelsFormattedThousand:',',xaxisLabelsFormattedUnitsPre:'',xaxisLabelsFormattedUnitsPost:'',xaxisColor:'black',xaxisLabelsOffsetx:0,xaxisLabelsOffsety:0,xaxisTitle:'',xaxisTitleBold:null,xaxisTitleSize:null,xaxisTitleFont:null,xaxisTitleColor:null,xaxisTitleItalic:null,xaxisTitleOffsetx:0,xaxisTitleOffsety:0,xaxisTitleX:null,xaxisTitleY:null,xaxisTitleHalign:null,xaxisTitleValign:null,labelsAbove:false,labelsAboveFont:null,labelsAboveSize:null,labelsAboveBold:null,labelsAboveItalic:null,labelsAboveColor:null,labelsAboveBackground:'rgba(255,255,255,0.5)',labelsAboveBackgroundPadding:2,labelsAboveUnitsPre:null,labelsAboveUnitsPost:null,labelsAbovePoint:null,labelsAboveThousand:null,labelsAboveFormatter:null,labelsAboveDecimals:null,labelsAboveOffsetx:0,labelsAboveOffsety:0,labelsAboveHalign:'center',labelsAboveValign:'bottom',labelsAboveSpecific:null,labelsAboveLastFont:null,labelsAboveLastBold:null,labelsAboveLastItalic:null,labelsAboveLastSize:null,labelsAboveLastColor:null,labelsAboveLastBackground:null,labelsAboveLastBackgroundPadding:null,textColor:'black',textFont:'Arial, Verdana, sans-serif',textSize:12,textBold:false,textItalic:false,text:null,tooltips:null,tooltipsOverride:null,tooltipsEffect:'fade',tooltipsCssClass:'RGraph_tooltip',tooltipsCss:null,tooltipsEvent:'click',tooltipsFormattedThousand:',',tooltipsFormattedPoint:'.',tooltipsFormattedDecimals:0,tooltipsFormattedUnitsPre:'',tooltipsFormattedUnitsPost:'',tooltipsFormattedKeyColors:null,tooltipsFormattedKeyColorsShape:'square',tooltipsFormattedKeyLabels:[],tooltipsFormattedTableHeaders:null,tooltipsFormattedTableData:null,tooltipsPointer:true,tooltipsPositionStatic:true,highlightStroke:'rgba(0,0,0,0)',highlightFill:'rgba(255,255,255,0.7)',highlightLinewidth:1,title:'',titleX:null,titleY:null,titleHalign:'center',titleValign:null,titleSize:null,titleColor:null,titleFont:null,titleBold:null,titleItalic:null,titleSubtitle:null,titleSubtitleSize:null,titleSubtitleColor:'#aaa',titleSubtitleFont:null,titleSubtitleBold:null,titleSubtitleItalic:null,key:null,keyColors:null,keyOffsetx:0,keyOffsety:0,keyLabelsOffsetx:0,keyLabelsOffsety:-1,keyLabelsFont:null,keyLabelsSize:null,keyLabelsColor:null,keyLabelsBold:null,keyLabelsItalic:null};RGraph.SVG.getGlobals(this);if(RGraph.SVG.FX&&typeof RGraph.SVG.FX.decorate==='function'){RGraph.SVG.FX.decorate(this);}
this.responsive=RGraph.SVG.responsive;var properties=this.properties;this.draw=function()
{RGraph.SVG.fireCustomEvent(this,'onbeforedraw');this.width=Number(this.svg.getAttribute('width'));this.height=Number(this.svg.getAttribute('height'));if(properties.xaxisLabels&&properties.xaxisLabels.length){if(typeof properties.xaxisLabels==='string'){properties.xaxisLabels=RGraph.SVG.arrayPad({array:[],length:this.data.length+(properties.total?1:0),value:properties.xaxisLabels});}
for(var i=0;i<properties.xaxisLabels.length;++i){properties.xaxisLabels[i]=RGraph.SVG.labelSubstitution({object:this,text:properties.xaxisLabels[i],index:i,value:this.data[i],decimals:properties.xaxisLabelsFormattedDecimals||0,unitsPre:properties.xaxisLabelsFormattedUnitsPre||'',unitsPost:properties.xaxisLabelsFormattedUnitsPost||'',thousand:properties.xaxisLabelsFormattedThousand||',',point:properties.xaxisLabelsFormattedPoint||'.'});}}
RGraph.SVG.createDefs(this);this.coords=[];this.graphWidth=this.width-properties.marginLeft-properties.marginRight;this.graphHeight=this.height-properties.marginTop-properties.marginBottom;RGraph.SVG.resetColorsToOriginalValues({object:this});this.parseColors();if(properties.total&&!this.totalAdded){this.totalAdded=true;var sum=RGraph.SVG.arraySum(this.data);this.data.push(sum);if(properties.xaxisLabels&&properties.xaxisLabels.length===(this.data.length-1)){properties.xaxisLabels.push('');}}
for(var i=0,max=0,runningTotal=0;i<this.data.length-(properties.total?1:0);++i){runningTotal+=this.data[i]
max=Math.max(Math.abs(max),Math.abs(runningTotal));}
if(typeof properties.yaxisScaleMax==='number'){max=properties.yaxisScaleMax;}
if(properties.yaxisScaleMin==='mirror'||properties.yaxisScaleMin==='middle'||properties.yaxisScaleMin==='center'){var mirrorScale=true;properties.yaxisScaleMin=0;}
this.scale=RGraph.SVG.getScale({object:this,numlabels:properties.yaxisLabelsCount,unitsPre:properties.yaxisScaleUnitsPre,unitsPost:properties.yaxisScaleUnitsPost,max:max,min:properties.yaxisScaleMin,point:properties.yaxisScalePoint,round:properties.yaxisScaleRound,thousand:properties.yaxisScaleThousand,decimals:properties.yaxisScaleDecimals,strict:typeof properties.yaxisScaleMax==='number',formatter:properties.yaxisScaleFormatter});if(mirrorScale){this.scale=RGraph.SVG.getScale({object:this,numlabels:properties.yaxisLabelsCount,unitsPre:properties.yaxisScaleUnitsPre,unitsPost:properties.yaxisScaleUnitsPost,max:this.scale.max,min:this.scale.max* -1,point:properties.yaxisScalePoint,round:false,thousand:properties.yaxisScaleThousand,decimals:properties.yaxisScaleDecimals,strict:typeof properties.yaxisScaleMax==='number',formatter:properties.yaxisScaleFormatter});}
this.max=this.scale.max;this.min=this.scale.min;properties.yaxisScaleMax=this.scale.max;properties.yaxisScaleMin=this.scale.min;RGraph.SVG.drawBackground(this);RGraph.SVG.drawXAxis(this);RGraph.SVG.drawYAxis(this);this.drawBars();this.drawLabelsAbove();if(typeof properties.key!==null&&RGraph.SVG.drawKey){RGraph.SVG.drawKey(this);}else if(!RGraph.SVG.isNull(properties.key)){alert('The drawKey() function does not exist - have you forgotten to include the key library?');}
RGraph.SVG.addCustomText(this);if(this.firstDraw){this.firstDraw=false;RGraph.SVG.fireCustomEvent(this,'onfirstdraw');}
RGraph.SVG.fireCustomEvent(this,'ondraw');RGraph.SVG.installInlineResponsive(this);return this;};this.create=function(definition)
{return RGraph.SVG.create.call(this,definition,arguments[1],arguments[2]);};this.drawBars=function()
{this.graphWidth=this.width-properties.marginLeft-properties.marginRight;this.graphHeight=this.height-properties.marginTop-properties.marginBottom;var innerWidth=(this.graphWidth/this.data.length)-(2*properties.marginInner),outerWidth=(this.graphWidth/this.data.length);var y=this.getYCoord(0),total=0;for(var i=0;i<(this.data.length);++i){var prevValue=this.data[i-1],nextValue=this.data[i+1],currentValue=this.data[i],prevTotal=total;total+=parseFloat(this.data[i])||0;var height=Math.abs((this.data[i]/(this.scale.max-this.scale.min))*this.graphHeight);if(RGraph.SVG.isNull(prevValue)){if(currentValue>0){y=this.getYCoord(prevTotal)-height;}else{y=this.getYCoord(prevTotal);}}else{if(i==0&&this.data[i]>0){y=y-height;}else if(this.data[i]>0&&this.data[i-1]>0){y=y-height;}else if(this.data[i]>0&&this.data[i-1]<0){y=y+prevHeight-height;}else if(this.data[i]<0&&this.data[i-1]>0){}else if(this.data[i]<0&&this.data[i-1]<0){y=y+prevHeight;}}
var fill=this.data[i]>0?properties.colors[0]:properties.colors[1];if(properties.colorsSequential){fill=properties.colors[i];}
if(properties.total){if(i===(this.data.length-1)&&this.data[this.data.length-1]>=0){y=this.getYCoord(0)-height;if(!properties.colorsSequential){fill=properties.colors[2];}}else if(i===(this.data.length-1)&&this.data[this.data.length-1]<0){y=this.getYCoord(0);if(!properties.colorsSequential){fill=properties.colors[2];}}}
var x=properties.marginLeft+(outerWidth*i)+properties.marginInner;if(this.data[i]===null||typeof this.data[i]==='undefined'){var axisY=this.getYCoord(0);if(prevValue<0){y=prevY+prevHeight;}else{y=prevY;}
height=this.getYCoord(0)-this.getYCoord(total);if(!properties.colorsSequential){fill=properties.colors[3]||properties.colors[2];}
if(height<0){y+=height;height*=-1;}}
if(properties.shadow){RGraph.SVG.setShadow({object:this,offsetx:properties.shadowOffsetx,offsety:properties.shadowOffsety,blur:properties.shadowBlur,color:properties.shadowColor,id:'dropShadow'});}
var rect=RGraph.SVG.create({svg:this.svg,type:'rect',parent:this.svg.all,attr:{x:x,y:y,width:innerWidth,height:height,stroke:properties.colorsStroke,fill:fill,'stroke-width':properties.linewidth,'shape-rendering':'crispEdges','data-index':i,'data-original-x':x,'data-original-y':y,'data-original-width':innerWidth,'data-original-height':height,'data-original-stroke':properties.colorsStroke,'data-original-fill':fill,'data-value':String(this.data[i]),filter:properties.shadow?'url(#dropShadow)':'',}});this.coords.push({object:this,element:rect,x:x,y:y,width:innerWidth,height:height});if(!RGraph.SVG.isNull(properties.tooltips)&&(properties.tooltips[i]||typeof properties.tooltips==='string')){var obj=this;(function(idx)
{rect.addEventListener(properties.tooltipsEvent.replace(/^on/,''),function(e)
{obj.removeHighlight();RGraph.SVG.tooltip({object:obj,index:idx,group:0,sequentialIndex:idx,text:typeof properties.tooltips==='string'?properties.tooltips:properties.tooltips[idx],event:e});obj.highlight(e.target);},false);rect.addEventListener('mousemove',function(e)
{e.target.style.cursor='pointer'},false);})(i);}
var prevX=x,prevY=y,prevWidth=innerWidth,prevHeight=height,prevValue=this.data[i];}
for(var i=0;i<this.coords.length;++i){if(this.coords[i+1]&&this.coords[i+1].element){var x1=Number(this.coords[i].element.getAttribute('x'))+Number(this.coords[i].element.getAttribute('width')),y1=parseInt(this.coords[i].element.getAttribute('y'))+(this.data[i]>0?0:parseInt(this.coords[i].element.getAttribute('height'))),x2=x1+(2*properties.marginInner),y2=parseInt(this.coords[i].element.getAttribute('y'))+(this.data[i]>0?0:parseInt(this.coords[i].element.getAttribute('height')));if(this.coords[i].element.getAttribute('data-value')==='null'){if(i===(this.data.length-1)){y1=parseFloat(this.coords[i].element.getAttribute('y'));y2=parseFloat(y1);}
if(this.totalColumns[i]){for(var k=0,total=0;k<i;++k){total+=this.data[k];}
if(total>0&&this.data[i-1]>0){y1=Number(this.coords[i-1].element.getAttribute('y'));y2=y1;}else if(total>0&&this.data[i-1]<0){y1=Number(this.coords[i-1].element.getAttribute('y'))+Number(this.coords[i-1].element.getAttribute('height'));y2=y1;}}}
var line=RGraph.SVG.create({svg:this.svg,type:'line',parent:this.svg.all,attr:{x1:x1,y1:y1+0.5,x2:x2,y2:y2+0.5,stroke:properties.colorsConnectors||properties.colorsStroke,'stroke-width':properties.linewidth,'data-index':i,'data-original-x1':x1,'data-original-y1':y1+0.5,'data-original-x2':x2,'data-original-y2':y2+0.5}});}}};this.getYCoord=function(value)
{if(value>this.scale.max){return null;}
var y,xaxispos=properties.xaxispos;if(value<this.scale.min){return null;}
y=((value-this.scale.min)/(this.scale.max-this.scale.min));y*=(this.height-properties.marginTop-properties.marginBottom);y=this.height-properties.marginBottom-y;return y;};this.highlight=function(rect)
{var x=parseFloat(rect.getAttribute('x'))-0.5,y=parseFloat(rect.getAttribute('y'))-0.5,width=parseFloat(rect.getAttribute('width'))+1,height=parseFloat(rect.getAttribute('height'))+1;var highlight=RGraph.SVG.create({svg:this.svg,type:'rect',parent:this.svg.all,attr:{stroke:properties.highlightStroke,fill:properties.highlightFill,x:x,y:y,width:width,height:height,'stroke-width':properties.highlightLinewidth},style:{pointerEvents:'none'}});RGraph.SVG.REG.set('highlight',highlight);};this.parseColors=function()
{if(!Object.keys(this.originalColors).length){this.originalColors={colors:RGraph.SVG.arrayClone(properties.colors),backgroundGridColor:RGraph.SVG.arrayClone(properties.backgroundGridColor),highlightFill:RGraph.SVG.arrayClone(properties.highlightFill),backgroundColor:RGraph.SVG.arrayClone(properties.backgroundColor)}}
var colors=properties.colors;if(colors){for(var i=0;i<colors.length;++i){colors[i]=RGraph.SVG.parseColorLinear({object:this,color:colors[i]});}}
properties.backgroundGridColor=RGraph.SVG.parseColorLinear({object:this,color:properties.backgroundGridColor});properties.highlightFill=RGraph.SVG.parseColorLinear({object:this,color:properties.highlightFill});properties.backgroundColor=RGraph.SVG.parseColorLinear({object:this,color:properties.backgroundColor});};this.drawLabelsAbove=function()
{if(properties.labelsAbove){var total=0;for(var i=0;i<this.coords.length;++i){var num=this.data[i],total=total+num;if(typeof num==='number'||RGraph.SVG.isNull(num)){if(RGraph.SVG.isNull(num)){num=total;}
var str=RGraph.SVG.numberFormat({object:this,num:num.toFixed(properties.labelsAboveDecimals),prepend:typeof properties.labelsAboveUnitsPre==='string'?properties.labelsAboveUnitsPre:null,append:typeof properties.labelsAboveUnitsPost==='string'?properties.labelsAboveUnitsPost:null,point:typeof properties.labelsAbovePoint==='string'?properties.labelsAbovePoint:null,thousand:typeof properties.labelsAboveThousand==='string'?properties.labelsAboveThousand:null,formatter:typeof properties.labelsAboveFormatter==='function'?properties.labelsAboveFormatter:null});if(properties.labelsAboveSpecific&&properties.labelsAboveSpecific.length&&(typeof properties.labelsAboveSpecific[i]==='string'||typeof properties.labelsAboveSpecific[i]==='number')){str=properties.labelsAboveSpecific[i];}else if(properties.labelsAboveSpecific&&properties.labelsAboveSpecific.length&&typeof properties.labelsAboveSpecific[i]!=='string'&&typeof properties.labelsAboveSpecific[i]!=='number'){continue;}
var x=parseFloat(this.coords[i].element.getAttribute('x'))+parseFloat(this.coords[i].element.getAttribute('width')/2)+properties.labelsAboveOffsetx;if(this.data[i]>=0){var y=parseFloat(this.coords[i].element.getAttribute('y'))-7+properties.labelsAboveOffsety;var valign=properties.labelsAboveValign;}else{var y=parseFloat(this.coords[i].element.getAttribute('y'))+parseFloat(this.coords[i].element.getAttribute('height'))+7-properties.labelsAboveOffsety;var valign=properties.labelsAboveValign==='top'?'bottom':'top';}
if(properties.total&&i===(this.coords.length-1)){var background=properties.labelsAboveLastBackground||properties.labelsAboveBackground||null;var padding=(typeof properties.labelsAboveLastBackgroundPadding==='number'?properties.labelsAboveLastBackgroundPadding:properties.labelsAboveBackgroundPadding)||0;var textConf={};textConf.font=properties.labelsAboveLastFont||properties.labelsAboveFont||properties.textFont;textConf.color=properties.labelsAboveLastColor||properties.labelsAboveColor||properties.textColor;if(typeof properties.labelsAboveLastSize==='number'){textConf.size=properties.labelsAboveLastSize;}else if(typeof properties.labelsAboveSize==='number'){textConf.size=properties.labelsAboveSize;}else{textConf.size=properties.textSize;}
if(typeof properties.labelsAboveLastBold==='boolean'){textConf.bold=properties.labelsAboveLastBold;}else if(typeof properties.labelsAboveBold==='boolean'){textConf.bold=properties.labelsAboveBold;}else{textConf.bold=properties.textBold;}
if(typeof properties.labelsAboveLastItalic==='boolean'){textConf.italic=properties.labelsAboveLastItalic;}else if(typeof properties.labelsAboveItalic==='boolean'){textConf.italic=properties.labelsAboveItalic;}else{textConf.italic=properties.textItalic;}}else{var background=properties.labelsAboveBackground||null,padding=properties.labelsAboveBackgroundPadding||0;var textConf=RGraph.SVG.getTextConf({object:this,prefix:'labelsAbove'});}
RGraph.SVG.text({object:this,parent:this.svg.all,tag:'labels.above',text:str,x:x,y:y,halign:properties.labelsAboveHalign,valign:valign,font:textConf.font,size:textConf.size,bold:textConf.bold,italic:textConf.italic,color:textConf.color,background:background,padding:padding});}}}};this.on=function(type,func)
{if(type.substr(0,2)!=='on'){type='on'+type;}
RGraph.SVG.addCustomEventListener(this,type,func);return this;};this.exec=function(func)
{func(this);return this;};this.removeHighlight=function()
{RGraph.SVG.removeHighlight();};this.tooltipSubstitutions=function(opt)
{return{index:opt.index,dataset:0,sequentialIndex:opt.index,value:this.data[opt.index],values:[this.data[opt.index]]};};this.tooltipsFormattedCustom=function(specific,index)
{var color,label,value;var colors=properties.colors;if(properties.tooltipsFormattedKeyColors&&properties.tooltipsFormattedKeyColors[0]&&properties.tooltipsFormattedKeyColors[1]&&properties.tooltipsFormattedKeyColors[2]){colors=properties.tooltipsFormattedKeyColors;}
color=colors[0];if(specific.value<0){color=colors[1];}
if((specific.index+1)===this.data.length||RGraph.SVG.isNull(this.data[specific.index])){color=colors[2];}
if(properties.tooltipsFormattedKeyLabels&&typeof properties.tooltipsFormattedKeyLabels==='object'){var isLast=specific.index===(this.data.length-1);var isNull=RGraph.SVG.isNull(this.data[specific.index]);var isPositive=specific.value>0;var isNegative=specific.value<0;if(isLast){label=typeof properties.tooltipsFormattedKeyLabels[2]==='string'?properties.tooltipsFormattedKeyLabels[2]:'';}else if(!isLast&&isNull){label=typeof properties.tooltipsFormattedKeyLabels[3]==='string'?properties.tooltipsFormattedKeyLabels[3]:'';}else if(typeof properties.tooltipsFormattedKeyLabels[0]==='string'&&isPositive&&!isLast){label=properties.tooltipsFormattedKeyLabels[0];}else if(typeof properties.tooltipsFormattedKeyLabels[1]==='string'&&isNegative){label=properties.tooltipsFormattedKeyLabels[1];}else if(typeof properties.tooltipsFormattedKeyLabels[2]==='string'&&isLast){label=properties.tooltipsFormattedKeyLabels[2];}}
if(RGraph.SVG.isNull(this.data[specific.index])){for(var i=0,value=0;i<=specific.index;++i){value+=this.data[i];}}
return{label:label,color:color,value:value};};this.positionTooltipStatic=function(args)
{var obj=args.object,e=args.event,tooltip=args.tooltip,index=args.index,svgXY=RGraph.SVG.getSVGXY(obj.svg),coords=this.coords[args.index];args.tooltip.style.left=(svgXY[0]
+coords.x
-(tooltip.offsetWidth/2)
+(coords.width/2))+'px';args.tooltip.style.top=(svgXY[1]
+coords.y
-tooltip.offsetHeight
-10)+'px';if(parseFloat(args.tooltip.style.top)<0){args.tooltip.style.top=(svgXY[1]
+coords.y
+(coords.height/2)
-tooltip.offsetHeight
-10)+'px';}};for(i in conf.options){if(typeof i==='string'){this.set(i,conf.options[i]);}}};return this;})(window,document);