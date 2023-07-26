'version:2023-07-17 (6.13)';RGraph=window.RGraph||{isrgraph:true,isRGraph:true,rgraph:true};RGraph.SVG=RGraph.SVG||{};(function(win,doc,undefined)
{RGraph.SVG.Rose=function(conf)
{this.set=function(name,value)
{if(arguments.length===1&&typeof name==='object'){for(i in arguments[0]){if(typeof i==='string'){name=ret.name;value=ret.value;this.set(name,value);}}}else{var ret=RGraph.SVG.commonSetter({object:this,name:name,value:value});name=ret.name;value=ret.value;this.properties[name]=value;if(name==='colors'){this.originalColors=RGraph.SVG.arrayClone(value);this.colorsParsed=false;}}
return this;};this.get=function(name)
{return this.properties[name];};conf.data=RGraph.SVG.stringsToNumbers(conf.data);this.id=conf.id;this.uid=RGraph.SVG.createUID();this.container=document.getElementById(this.id);this.layers={};this.svg=RGraph.SVG.createSVG({object:this,container:this.container});this.isRGraph=true;this.isrgraph=true;this.rgraph=true;this.width=Number(this.svg.getAttribute('width'));this.height=Number(this.svg.getAttribute('height'));this.data=RGraph.SVG.arrayClone(conf.data);this.originalData=RGraph.SVG.arrayClone(conf.data);this.type='rose';this.angles=[];this.angles2=[];this.colorsParsed=false;this.originalColors={};this.gradientCounter=1;this.nodes=[];this.shadowNodes=[];this.max=0;this.redraw=false;this.highlight_node=null;this.firstDraw=true;RGraph.SVG.OR.add(this);this.container.style.display='inline-block';this.properties={centerx:null,centery:null,radius:null,marginLeft:35,marginRight:35,marginTop:35,marginBottom:35,amargin:'3deg',backgroundGrid:true,backgroundGridColor:'#ddd',backgroundGridRadialsCount:null,backgroundGridRadialsAngleOffset:0,backgroundGridConcentricsCount:5,backgroundGridLinewidth:1,colorsStroke:'white',colors:['red','black','orange','green','#6ff','#ccc','pink','orange','cyan','maroon','olive','teal'],colorsOpacity:1,textColor:'black',textFont:'Arial, Verdana, sans-serif',textSize:12,textBold:false,textItalic:false,text:null,labels:[],labelsFont:null,labelsSize:null,labelsColor:null,labelsBold:null,labelsItalic:null,labelsRadialMargin:10,labelsAngleOffset:0,labelsFormattedDecimals:0,labelsFormattedPoint:'.',labelsFormattedThousand:',',labelsFormattedUnitsPre:'',labelsFormattedUnitsPost:'',scaleVisible:true,scaleUnitsPre:'',scaleUnitsPost:'',scaleMax:null,scaleMin:0,scalePoint:'.',scaleThousand:',',scaleRound:false,scaleDecimals:0,scaleFormatter:null,scaleBold:null,scaleItalic:null,scaleColor:null,scaleSize:null,scaleFont:null,scaleLabelsCount:5,linewidth:1,tooltips:null,tooltipsOverride:null,tooltipsEffect:'fade',tooltipsCssClass:'RGraph_tooltip',tooltipsCss:null,tooltipsEvent:'click',tooltipsFormattedThousand:',',tooltipsFormattedPoint:'.',tooltipsFormattedDecimals:0,tooltipsFormattedUnitsPre:'',tooltipsFormattedUnitsPost:'',tooltipsFormattedKeyColors:null,tooltipsFormattedKeyColorsShape:'square',tooltipsFormattedKeyLabels:[],tooltipsFormattedTableHeaders:null,tooltipsFormattedTableData:null,tooltipsPointer:true,tooltipsPositionStatic:true,highlightStroke:'rgba(0,0,0,0)',highlightFill:'rgba(255,255,255,0.7)',highlightLinewidth:1,title:'',titleX:null,titleY:null,titleHalign:'center',titleValign:null,titleSize:null,titleColor:null,titleFont:null,titleBold:null,titleItalic:null,titleSubtitle:null,titleSubtitleSize:null,titleSubtitleColor:'#aaa',titleSubtitleFont:null,titleSubtitleBold:null,titleSubtitleItalic:null,shadow:false,shadowOffsetx:2,shadowOffsety:2,shadowBlur:2,shadowColor:'rgba(0,0,0,0.25)',exploded:0,key:null,keyColors:null,keyOffsetx:0,keyOffsety:0,keyLabelsOffsetx:0,keyLabelsOffsety:-1,keyLabelsFont:null,keyLabelsSize:null,keyLabelsColor:null,keyLabelsBold:null,keyLabelsItalic:null,segmentsAngleOffset:0,variant:'normal',effectGrowMultiplier:1,effectRoundrobinMultiplier:1};RGraph.SVG.getGlobals(this);if(RGraph.SVG.FX&&typeof RGraph.SVG.FX.decorate==='function'){RGraph.SVG.FX.decorate(this);}
this.responsive=RGraph.SVG.responsive;var properties=this.properties;this.draw=function()
{RGraph.SVG.fireCustomEvent(this,'onbeforedraw');this.width=Number(this.svg.getAttribute('width'));this.height=Number(this.svg.getAttribute('height'));if(typeof properties.marginInner!=='undefined'){properties.amargin=properties.marginInner;}
this.data=RGraph.SVG.arrayClone(this.originalData);this.angles=[];for(var i=0;i<this.data.length;++i){this.angles2[i]=[];}
RGraph.SVG.createDefs(this);this.graphWidth=this.width-properties.marginLeft-properties.marginRight;this.graphHeight=this.height-properties.marginTop-properties.marginBottom;this.centerx=(this.graphWidth/2)+properties.marginLeft;this.centery=(this.graphHeight/2)+properties.marginTop;this.radius=Math.min(this.graphWidth,this.graphHeight)/2;this.centerx=typeof properties.centerx==='number'?properties.centerx:this.centerx;this.centery=typeof properties.centery==='number'?properties.centery:this.centery;this.radius=typeof properties.radius==='number'?properties.radius:this.radius;if(typeof properties.radius==='string'&&properties.radius.match(/^\+|-\d+$/))this.radius+=parseFloat(properties.radius);if(typeof properties.centerx==='string'&&properties.centerx.match(/^\+|-\d+$/))this.centery+=parseFloat(properties.centerx);if(typeof properties.centery==='string'&&properties.centery.match(/^\+|-\d+$/))this.centerx+=parseFloat(properties.centery);if(typeof properties.amargin==='string'&&properties.amargin.match(/([0-9.]+)deg/)){properties.amargin=RegExp.$1/(180/Math.PI);}
for(var i=0;i<this.data.length;++i){if(typeof this.data[i]==='object'){for(var j=0;j<this.data[i].length;++j){if(typeof this.data[i][j]==='string'){this.data[i][j]=RGraph.SVG.stringsToNumbers(this.data[i][j]);}}}else if(typeof this.data[i]==='string'){this.data[i]=RGraph.SVG.stringsToNumbers(this.data[i]);}}
this.getMaxValue();RGraph.SVG.resetColorsToOriginalValues({object:this});this.parseColors();this.scale=RGraph.SVG.getScale({object:this,numlabels:typeof properties.scaleLabelsCount==='number'?properties.scaleLabelsCount:properties.backgroundGridConcentricCount,unitsPre:properties.scaleUnitsPre,unitsPost:properties.scaleUnitsPost,max:typeof properties.scaleMax==='number'?properties.scaleMax:this.max,min:properties.scaleMin,point:properties.scalePoint,round:properties.scaleRound,thousand:properties.scaleThousand,decimals:properties.scaleDecimals,strict:typeof properties.scaleMax==='number',formatter:properties.scaleFormatter});this.max=this.scale.max;this.drawBackground();this.drawRose();this.drawLabels();RGraph.SVG.drawTitle(this);if(typeof properties.key!==null&&RGraph.SVG.drawKey){RGraph.SVG.drawKey(this);}else if(!RGraph.SVG.isNull(properties.key)){alert('The drawKey() function does not exist - have you forgotten to include the key library?');}
if(properties.shadow){RGraph.SVG.setShadow({object:this,offsetx:properties.shadowOffsetx,offsety:properties.shadowOffsety,blur:properties.shadowBlur,color:properties.shadowColor,id:'dropShadow'});}
var obj=this;document.body.addEventListener('mousedown',function(e)
{obj.hideHighlight(obj);},false);RGraph.SVG.addCustomText(this);if(this.firstDraw){this.firstDraw=false;RGraph.SVG.fireCustomEvent(this,'onfirstdraw');}
RGraph.SVG.fireCustomEvent(this,'ondraw');RGraph.SVG.installInlineResponsive(this);return this;};this.create=function(definition)
{return RGraph.SVG.create.call(this,definition,arguments[1],arguments[2]);};this.drawBackground=function()
{if(properties.backgroundGrid){var grid=RGraph.SVG.create({svg:this.svg,parent:this.svg.all,type:'g',attr:{className:'rgraph_radar_grid',fill:'rgba(0,0,0,0)',stroke:properties.backgroundGridColor},style:{pointerEvents:'none'}});var origin=0-(RGraph.SVG.TRIG.PI/2),radials=(typeof properties.backgroundGridRadialsCount==='number'?properties.backgroundGridRadialsCount:this.data.length),concentrics=properties.backgroundGridConcentricsCount,step=RGraph.SVG.TRIG.TWOPI/radials;if(radials>0){if(properties.variant==='non-equi-angular'){var radials=this.data.length;for(var i=0,total=0;i<this.data.length;++i){total+=this.data[i][1];}
for(var i=0,sum=0;i<this.data.length;++i){var coords=RGraph.SVG.TRIG.toCartesian({cx:this.centerx,cy:this.centery,r:this.radius,angle:origin+((sum/total)*RGraph.SVG.TRIG.TWOPI)+properties.backgroundGridRadialsAngleOffset});var str='M {1} {2} L {3} {4}'.format(this.centerx,this.centery,coords.x,coords.y);RGraph.SVG.create({svg:this.svg,type:'path',parent:grid,attr:{d:str,stroke:properties.backgroundGridColor,'stroke-width':properties.backgroundGridLinewidth}});sum+=this.data[i][1];}}else{for(var i=0,len=radials;i<len;++i){var coords=RGraph.SVG.TRIG.toCartesian({cx:this.centerx,cy:this.centery,r:this.radius,angle:origin+(i*step)+properties.backgroundGridRadialsAngleOffset});var str='M {1} {2} L {3} {4}'.format(this.centerx,this.centery,coords.x,coords.y);RGraph.SVG.create({svg:this.svg,type:'path',parent:grid,attr:{d:str,stroke:properties.backgroundGridColor,'stroke-width':properties.backgroundGridLinewidth}});}}}
if(concentrics>0){for(var j=1;j<=concentrics;j++){RGraph.SVG.create({svg:this.svg,type:'circle',parent:grid,attr:{cx:this.centerx,cy:this.centery,r:this.radius*(j/concentrics),fill:'transparent',stroke:properties.backgroundGridColor,'stroke-width':properties.backgroundGridLinewidth}});}}}};this.drawRose=function()
{var opt=arguments[0]||{};for(var i=0;i<this.angles.length;++i){this.angles[i].element.parentNode.removeChild(this.angles[i].element);}
this.angles=[];for(var i=0;i<this.data.length;++i){this.angles2[i]=[];}
if(properties.variant==='non-equi-angular'){return this.drawRoseNonEquiAngular(opt);}
var radians=RGraph.SVG.TRIG.TWOPI/this.data.length;if(!document.getElementById('rgraph_rose_segments_'+this.uid)){var group=RGraph.SVG.create({svg:this.svg,type:'g',parent:this.svg.all,attr:{id:'rgraph_rose_segments_'+this.uid}});}else{var group=document.getElementById('rgraph_rose_segments_'+this.uid);}
for(var i=0,seq=0;i<this.data.length;++i,++seq){var radius=(this.data[i]/this.scale.max)*this.radius*properties.effectGrowMultiplier,start=(i/this.data.length)*RGraph.SVG.TRIG.TWOPI*properties.effectRoundrobinMultiplier,end=(((i/this.data.length)*RGraph.SVG.TRIG.TWOPI)+radians)*properties.effectRoundrobinMultiplier;var explosion=this.getExploded({index:i,start:start-RGraph.SVG.TRIG.HALFPI,end:end-RGraph.SVG.TRIG.HALFPI});if(typeof this.data[i]==='object'&&!RGraph.SVG.isNull(this.data[i])){if(!document.getElementById('rose_'+this.uid+'_segment_group_'+i)){var segment_group=RGraph.SVG.create({svg:this.svg,type:'g',parent:group,attr:{id:'rose_'+this.uid+'_segment_group_'+i}});}else{var segment_group=document.getElementById('rose_'+this.uid+'_segment_group_'+i)}
for(var j=0,sum=0,accRadius=0;j<this.data[i].length;++j,++seq){if(j===0){prevRadius=0;}
sum+=this.data[i][j];var radius=(sum/this.scale.max)*this.radius*properties.effectGrowMultiplier,cx=this.centerx+(explosion[0]*properties.effectRoundrobinMultiplier),cy=this.centery+(explosion[1]*properties.effectRoundrobinMultiplier);var arcPath=RGraph.SVG.TRIG.getArcPath2({cx:cx,cy:cy,r:radius,start:((start+properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,end:((end-properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,anticlockwise:false});if(j===0){arcPath='{1} z'.format(arcPath);}else{var arcPath2=RGraph.SVG.TRIG.getArcPath2({cx:cx,cy:cy,r:prevRadius,start:((end-properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,end:((start+properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,anticlockwise:true});arcPath='{1} L {2} {3} {4}'.format(arcPath,cx,cy,arcPath2);}
var path=RGraph.SVG.create({svg:this.svg,type:'path',parent:segment_group,attr:{d:arcPath,fill:properties.colorsSequential?properties.colors[seq]:properties.colors[j],'fill-opacity':properties.colorsOpacity,stroke:properties.colorsStroke,'stroke-width':properties.linewidth,'data-tooltip':(!RGraph.SVG.isNull(properties.tooltips)&&properties.tooltips.length)?properties.tooltips[seq]:'','data-index':i,'data-centerx':cx,'data-centery':cy,'data-group':i,'data-subindex':j,'data-value':this.data[i][j],'data-start-angle':start+properties.amargin+properties.segmentsAngleOffset,'data-end-angle':end-properties.amargin+properties.segmentsAngleOffset,'data-radius':radius,'data-radius-inner':typeof prevRadius==='number'?prevRadius*properties.effectGrowMultiplier:0,'data-sequential-index':seq}});if(properties.tooltips&&(properties.tooltips[seq]||typeof properties.tooltips==='string')){if(properties.tooltipsEvent!=='mousemove'){properties.tooltipsEvent='click';}
(function(index,group,seq,obj)
{path.addEventListener(properties.tooltipsEvent,function(e)
{obj.removeHighlight();RGraph.SVG.tooltip({object:obj,group:group,index:index,sequentialIndex:seq,text:typeof properties.tooltips==='string'?properties.tooltips:properties.tooltips[seq],event:e});obj.highlight(e.target);var highlight=RGraph.SVG.REG.get('highlight');if(properties.tooltipsEvent==='mousemove'){highlight.style.cursor='pointer';}},false);if(properties.tooltipsEvent==='click'){path.addEventListener('mousemove',function(e)
{e.target.style.cursor='pointer';},false);}}(j,i,seq,this));}
this.angles.push({object:this,element:path});this.angles2[i].push({object:this,element:path});var prevRadius=radius;}
seq--;}else{var cx=this.centerx+(explosion[0]*properties.effectRoundrobinMultiplier),cy=this.centery+(explosion[1]*properties.effectRoundrobinMultiplier);var arcPath=RGraph.SVG.TRIG.getArcPath2({cx:cx,cy:cy,r:radius,start:((start+properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,end:((end-properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,anticlockwise:false});var path=RGraph.SVG.create({svg:this.svg,type:'path',parent:group,attr:{d:'{1} z'.format(arcPath),fill:properties.colorsSequential?properties.colors[i]:properties.colors[0],'fill-opacity':properties.colorsOpacity,stroke:properties.colorsStroke,'stroke-width':properties.linewidth,'data-tooltip':(!RGraph.SVG.isNull(properties.tooltips)&&properties.tooltips.length)?properties.tooltips[i]:'','data-index':i,'data-centerx':cx,'data-centery':cy,'data-value':this.data[i],'data-start-angle':start+properties.amargin+properties.segmentsAngleOffset,'data-end-angle':end-properties.amargin+properties.segmentsAngleOffset,'data-radius':radius,'data-sequential':seq}});this.angles.push({object:this,element:path});this.angles2[i].push({object:this,element:path});if(properties.tooltips&&(properties.tooltips[i]||typeof properties.tooltips==='string')){if(properties.tooltipsEvent!=='mousemove'){properties.tooltipsEvent='click';}
(function(index,obj)
{path.addEventListener(properties.tooltipsEvent,function(e)
{obj.removeHighlight();RGraph.SVG.tooltip({object:obj,index:index,group:index,sequentialIndex:index,text:typeof properties.tooltips==='string'?properties.tooltips:properties.tooltips[index],event:e});obj.highlight(e.target);var highlight=RGraph.SVG.REG.get('highlight');if(properties.tooltipsEvent==='mousemove'){highlight.style.cursor='pointer';}},false);if(properties.tooltipsEvent==='click'){path.addEventListener('mousemove',function(e)
{e.target.style.cursor='pointer';},false);}}(i,this));}}}};this.drawRoseNonEquiAngular=function(opt)
{if(!document.getElementById('rgraph_rose_segments_'+this.uid)){var group=RGraph.SVG.create({svg:this.svg,type:'g',parent:this.svg.all,attr:{id:'rgraph_rose_segments_'+this.uid}});}else{var group=document.getElementById('rgraph_rose_segments_'+this.uid)}
for(var i=0,total=0;i<this.data.length;++i){total+=parseFloat(this.data[i][1]);}
var start=0;for(var i=0,seq=0;i<this.data.length;++i,++seq){var radians=(this.data[i][1]/total)*RGraph.SVG.TRIG.TWOPI,end=start+radians;var explosion=this.getExploded({index:i,start:start-RGraph.SVG.TRIG.HALFPI,end:end-RGraph.SVG.TRIG.HALFPI});if(typeof this.data[i][0]==='object'&&!RGraph.SVG.isNull(this.data[i][0])){if(!document.getElementById('rgraph_rose_'+this.uid+'_segment_group_'+i)){var segment_group=RGraph.SVG.create({svg:this.svg,type:'g',parent:group,attr:{id:'rgraph_rose_'+this.uid+'_segment_group_'+i}});}else{var segment_group=document.getElementById('rgraph_rose_'+this.uid+'_segment_group_'+i)}
for(var j=0,sum=0;j<this.data[i][0].length;++j,++seq){sum+=this.data[i][0][j];if(j===0){var prevRadius=0,radius=(sum/this.scale.max)*this.radius*properties.effectGrowMultiplier,cx=this.centerx+(explosion[0]*properties.effectRoundrobinMultiplier),cy=this.centery+(explosion[1]*properties.effectRoundrobinMultiplier);var arcPath=RGraph.SVG.TRIG.getArcPath2({cx:cx,cy:cy,r:radius,start:((start+properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,end:((end-properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,anticlockwise:false});var arcPath2='';}else{var prevRadius=radius,radius=(sum/this.scale.max)*this.radius*properties.effectGrowMultiplier,cx=this.centerx+(explosion[0]*properties.effectRoundrobinMultiplier),cy=this.centery+(explosion[1]*properties.effectRoundrobinMultiplier);var arcPath=RGraph.SVG.TRIG.getArcPath2({cx:cx,cy:cy,r:radius,start:((start+properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,end:((end-properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,anticlockwise:false});var arcPath2=RGraph.SVG.TRIG.getArcPath2({cx:cx,cy:cy,r:prevRadius,start:((end-properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,end:((start+properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,anticlockwise:true});}
var path=RGraph.SVG.create({svg:this.svg,type:'path',parent:segment_group,attr:{d:'{1} {2} z'.format(arcPath,arcPath2),fill:properties.colorsSequential?properties.colors[seq]:properties.colors[j],'fill-opacity':properties.colorsOpacity,stroke:properties.colorsStroke,'stroke-width':properties.linewidth,'data-tooltip':(!RGraph.SVG.isNull(properties.tooltips)&&properties.tooltips.length)?properties.tooltips[i]:'','data-centerx':cx,'data-centery':cy,'data-index':i,'data-subindex':j,'data-value':this.data[i][0][j],'data-start-angle':start+properties.amargin+properties.segmentsAngleOffset,'data-end-angle':end-properties.amargin+properties.segmentsAngleOffset,'data-radius':radius,'data-radius-inner':prevRadius,'data-sequential':seq}});this.angles.push({object:this,element:path});this.angles2[i].push({object:this,element:path});if(properties.tooltips&&(properties.tooltips[seq]||typeof properties.tooltips==='string')){if(properties.tooltipsEvent!=='mousemove'){properties.tooltipsEvent='click';}
(function(index,group,seq,obj)
{path.addEventListener(properties.tooltipsEvent,function(e)
{obj.removeHighlight();RGraph.SVG.tooltip({object:obj,index:index,group:group,sequentialIndex:seq,text:typeof properties.tooltips==='string'?properties.tooltips:properties.tooltips[seq],event:e});obj.highlight(e.target);var highlight=RGraph.SVG.REG.get('highlight');if(properties.tooltipsEvent==='mousemove'){highlight.style.cursor='pointer';}},false);if(properties.tooltipsEvent==='click'){path.addEventListener('mousemove',function(e)
{e.target.style.cursor='pointer';},false);}}(j,i,seq,this));}
var prevRadius=radius;}
seq--}else{var radius=(this.data[i][0]/this.scale.max)*this.radius*properties.effectGrowMultiplier,cx=this.centerx+(explosion[0]*properties.effectRoundrobinMultiplier),cy=this.centery+(explosion[1]*properties.effectRoundrobinMultiplier);var arcPath=RGraph.SVG.TRIG.getArcPath2({cx:cx,cy:cy,r:radius,start:((start+properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,end:((end-properties.amargin)*properties.effectRoundrobinMultiplier)+properties.segmentsAngleOffset,anticlockwise:false});var path=RGraph.SVG.create({svg:this.svg,type:'path',parent:group,attr:{d:'{1} z'.format(arcPath),fill:properties.colorsSequential?properties.colors[i]:properties.colors[0],'fill-opacity':properties.colorsOpacity,stroke:properties.colorsStroke,'stroke-width':properties.linewidth,'data-tooltip':(!RGraph.SVG.isNull(properties.tooltips)&&properties.tooltips.length)?properties.tooltips[i]:'','data-centerx':cx,'data-centery':cy,'data-index':i,'data-value':this.data[i][0],'data-start-angle':start+properties.amargin+properties.segmentsAngleOffset,'data-end-angle':end-properties.amargin+properties.segmentsAngleOffset,'data-radius':radius,'data-sequential':seq}});this.angles.push({object:this,element:path});this.angles2[i].push({object:this,element:path});if(properties.tooltips&&(properties.tooltips[i]||typeof properties.tooltips==='string')){if(properties.tooltipsEvent!=='mousemove'){properties.tooltipsEvent='click';}
(function(index,group,seq,obj)
{path.addEventListener(properties.tooltipsEvent,function(e)
{obj.removeHighlight();RGraph.SVG.tooltip({object:obj,index:index,group:index,sequentialIndex:seq,text:typeof properties.tooltips==='string'?properties.tooltips:properties.tooltips[index],event:e});obj.highlight(e.target);var highlight=RGraph.SVG.REG.get('highlight');if(properties.tooltipsEvent==='mousemove'){highlight.style.cursor='pointer';}},false);if(properties.tooltipsEvent==='click'){path.addEventListener('mousemove',function(e)
{e.target.style.cursor='pointer';},false);}}(i,i,seq,this));}}
start+=radians;}};this.redrawRose=function()
{};this.drawLabels=function()
{if(properties.labels&&properties.labels.length){if(typeof properties.labels==='string'){properties.labels=RGraph.SVG.arrayPad({array:[],length:this.data.length,value:properties.labels});}
for(var i=0;i<properties.labels.length;++i){properties.labels[i]=RGraph.SVG.labelSubstitution({object:this,text:properties.labels[i],index:i,value:this.data[i],decimals:properties.labelsFormattedDecimals||0,unitsPre:properties.labelsFormattedUnitsPre||'',unitsPost:properties.labelsFormattedUnitsPost||'',thousand:properties.labelsFormattedThousand||',',point:properties.labelsFormattedPoint||'.'});}}
if(properties.scaleVisible){if(!document.getElementById('rgraph_rose_scale_labels_'+this.uid)){var group=RGraph.SVG.create({svg:this.svg,type:'g',parent:this.svg.all,attr:{id:'rgraph_rose_scale_labels_'+this.uid}});}else{var group=document.getElementById('rgraph_rose_scale_labels_'+this.uid);}
var textConf=RGraph.SVG.getTextConf({object:this,prefix:'scale'});for(var i=0;i<this.scale.labels.length;++i){var x=this.centerx,y=this.centery-(this.radius/this.scale.labels.length*(i+1));RGraph.SVG.text({object:this,svg:this.svg,parent:group,tag:'labels.scale',text:this.scale.labels[i],x:x,y:y,halign:'center',valign:'center',background:'rgba(255,255,255,0.7)',padding:2,size:textConf.size,color:textConf.color,bold:textConf.bold,italic:textConf.italic,font:textConf.font});}
var str=RGraph.SVG.numberFormat({object:this,num:this.scale.min.toFixed(properties.scaleDecimals),prepend:properties.scaleUnitsPre,append:properties.scaleUnitsPost,point:properties.scalePoint,thousand:properties.scaleThousand,formatter:properties.scaleFormatter});RGraph.SVG.text({object:this,parent:group,tag:'labels.scale',text:str,x:this.centerx,y:this.centery,halign:'center',valign:'center',background:'rgba(255,255,255,0.7)',padding:2,size:textConf.size,color:textConf.color,bold:textConf.bold,italic:textConf.italic,font:textConf.font});}
var halign;if(!document.getElementById('rgraph_rose_circular_labels_'+this.uid)){var group=RGraph.SVG.create({svg:this.svg,type:'g',parent:this.svg.all,attr:{id:'rgraph_rose_circular_labels_'+this.uid}});}else{var group=document.getElementById('rgraph_rose_circular_labels_'+this.uid);}
if(typeof properties.labelsSize!=='number'){properties.labelsSize=properties.textSize+4;}
var textConf=RGraph.SVG.getTextConf({object:this,prefix:'labels'});for(var i=0;i<properties.labels.length;++i){if(properties.variant==='non-equi-angular'){var angle=((Number(this.angles2[i][0].element.getAttribute('data-end-angle'))-Number(this.angles2[i][0].element.getAttribute('data-start-angle')))/2)+Number(this.angles2[i][0].element.getAttribute('data-start-angle'))-RGraph.SVG.TRIG.HALFPI;}else{var angle=(((RGraph.SVG.TRIG.TWOPI/properties.labels.length))*i)-RGraph.SVG.TRIG.HALFPI+properties.labelsAngleOffset+(RGraph.SVG.TRIG.TWOPI/(2*properties.labels.length));}
var endpoint=RGraph.SVG.TRIG.getRadiusEndPoint({r:this.radius+properties.labelsRadialMargin,angle:angle});var explosion=this.getExploded({index:i,start:Number(this.angles2[i][0].element.getAttribute('data-start-angle'))-RGraph.SVG.TRIG.HALFPI,end:Number(this.angles2[i][0].element.getAttribute('data-end-angle'))-RGraph.SVG.TRIG.HALFPI});endpoint[0]+=this.centerx+explosion[0];endpoint[1]+=this.centery+explosion[1];if(Math.round(endpoint[0])>this.centerx){halign='left';}else if(Math.round(endpoint[0])===this.centerx){halign='center';}else{halign='right';}
RGraph.SVG.text({object:this,svg:this.svg,parent:group,tag:'labels',text:typeof properties.labels[i]==='string'?properties.labels[i]:'',x:endpoint[0],y:endpoint[1],halign:halign,valign:'center',background:'rgba(255,255,255,0.7)',padding:2,size:textConf.size,color:textConf.color,bold:textConf.bold,italic:textConf.italic,font:textConf.font});}};this.highlight=function(path)
{var centerx=path.getAttribute('data-centerx'),centery=path.getAttribute('data-centery'),radius=path.getAttribute('data-radius'),radiusInner=path.getAttribute('data-radius-inner'),start=path.getAttribute('data-start-angle'),end=path.getAttribute('data-end-angle');var arcPath=RGraph.SVG.TRIG.getArcPath3({cx:centerx,cy:centery,r:radius,start:start,end:end,lineto:true});var arcPath_array=RGraph.SVG.TRIG.getArcPath3({cx:centerx,cy:centery,r:radius,start:start,end:end,lineto:true,array:true});if(radiusInner){var arcPath2=RGraph.SVG.TRIG.getArcPath3({cx:centerx,cy:centery,r:radiusInner,start:end,end:start,lineto:true,anticlockwise:true});}else{arcPath2=' L {1} {2}'.format(centerx,centery);}
var highlight=RGraph.SVG.create({svg:this.svg,parent:this.svg.all,type:'path',attr:{d:'M {1} {2} '.format(arcPath_array[1],arcPath_array[2])+arcPath+' '+arcPath2+' z',fill:properties.highlightFill,stroke:properties.highlightStroke,'stroke-width':properties.highlightLinewidth},style:{pointerEvents:'none'}});if(properties.tooltipsEvent==='mousemove'){highlight.addEventListener('mouseout',function(e)
{highlight.parentNode.removeChild(highlight);RGraph.SVG.hideTooltip();RGraph.SVG.REG.set('highlight',null);},false);}
RGraph.SVG.REG.set('highlight',highlight);};this.parseColors=function()
{if(!Object.keys(this.originalColors).length){this.originalColors={colors:RGraph.SVG.arrayClone(properties.colors),highlightFill:RGraph.SVG.arrayClone(properties.highlightFill)}}
var colors=properties.colors;if(colors){for(var i=0;i<colors.length;++i){colors[i]=RGraph.SVG.parseColorRadial({object:this,color:colors[i]});}}
properties.highlightFill=RGraph.SVG.parseColorRadial({object:this,color:properties.highlightFill});};this.getMaxValue=function()
{var max=0;if(properties.variant==='non-equi-angular'){for(var i=0;i<this.data.length;++i){if(!RGraph.SVG.isNull(this.data[i])){if(typeof this.data[i][0]==='number'){max=Math.max(max,this.data[i][0]);}else if(typeof this.data[i][0]==='object'){max=Math.max(max,RGraph.SVG.arraySum(this.data[i][0]));}}}}else{for(var i=0;i<this.data.length;++i){if(!RGraph.SVG.isNull(this.data[i])){if(typeof this.data[i]==='number'){max=Math.max(max,this.data[i]);}else if(typeof this.data[i]==='object'){max=Math.max(max,RGraph.SVG.arraySum(this.data[i]));}}}}
this.max=max;};this.getRadius=function(value)
{return((value-properties.scaleMin)/(this.scale.max-properties.scaleMin))*this.radius;};this.roundRobin=function()
{};this.on=function(type,func)
{if(type.substr(0,2)!=='on'){type='on'+type;}
RGraph.SVG.addCustomEventListener(this,type,func);return this;};this.exec=function(func)
{func(this);return this;};this.removeHighlight=this.hideHighlight=function()
{RGraph.SVG.removeHighlight();};this.getExploded=function(opt)
{var index=opt.index,start=opt.start,end=opt.end,exploded=properties.exploded,explodedX,explodedY;if(typeof exploded==='object'&&typeof exploded[index]==='number'){explodedX=Math.cos(((end-start)/2)+start)*exploded[index];explodedY=(Math.sin(((end-start)/2)+start)*exploded[index]);}else if(typeof exploded==='number'){explodedX=Math.cos(((end-start)/2)+start)*exploded;explodedY=Math.sin(((end-start)/2)+start)*exploded;}else{explodedX=0;explodedY=0;}
return[explodedX,explodedY];};this.grow=function(opt)
{var obj=this,opt=arguments[0]||{},frame=-1,frames=opt.frames||60,callback=opt.callback||function(){};properties.effectGrowMultiplier=0.01;this.draw();function iterator()
{++frame;var multiplier=RGraph.SVG.FX.getEasingMultiplier(frames,frame);properties.effectGrowMultiplier=multiplier;obj.drawRose();if(frame>=frames){callback(obj);}else{RGraph.SVG.FX.update(iterator);}}
iterator();return this;};this.roundRobin=this.roundrobin=function(opt)
{var obj=this,opt=arguments[0]||{},frame=-1,frames=opt.frames||60,callback=opt.callback||function(){};properties.effectRoundrobinMultiplier=0.01;this.draw();function iterator()
{++frame;var multiplier=RGraph.SVG.FX.getEasingMultiplier(frames,frame);properties.effectRoundrobinMultiplier=multiplier;obj.drawRose();if(frame>=frames){callback(obj);}else{RGraph.SVG.FX.update(iterator);}}
iterator();return this;};this.tooltipSubstitutions=function(opt)
{var indexes=RGraph.SVG.sequentialIndexToGrouped(opt.index,this.data);if(properties.variant==='non-equi-angular'){if(typeof this.data[0][0]==='object'){var tmp=[];for(var i=0;i<this.data.length;++i){tmp[i]=this.data[i][0];}
var indexes=RGraph.SVG.sequentialIndexToGrouped(opt.index,tmp);var ret={index:indexes[1],dataset:indexes[0],sequentialIndex:opt.index,value:this.data[indexes[0]][0][indexes[1]],value2:this.data[indexes[0]][1],values:this.data[indexes[0]][0]};return ret;}else{return{index:0,dataset:opt.index,sequentialIndex:opt.index,value:(typeof this.data[opt.index]==='object'&&typeof this.data[opt.index][0]==='number')?this.data[opt.index][0]:mill,value2:(typeof this.data[opt.index]==='object'&&typeof this.data[opt.index][1]==='number')?this.data[opt.index][1]:null,values:typeof this.data[indexes[0]]==='number'?[this.data[indexes[0]]]:this.data[indexes[0]]};}}else{return{index:indexes[1],dataset:indexes[0],sequentialIndex:opt.index,value:typeof this.data[indexes[0]]==='number'?this.data[indexes[0]]:this.data[indexes[0]][indexes[1]],value2:typeof value2==='number'?value2:null,values:typeof this.data[indexes[0]]==='number'?[this.data[indexes[0]]]:this.data[indexes[0]]};}};this.tooltipsFormattedCustom=function(specific,index,colors)
{var color,label,value,value2;color=properties.colors[index];if(typeof this.data[specific.dataset]==='number'){label=properties.tooltipsFormattedKeyLabels[specific.dataset]||'';color=!RGraph.SVG.isNull(properties.tooltipsFormattedKeyColors)&&properties.tooltipsFormattedKeyColors[specific.index]?properties.tooltipsFormattedKeyColors[specific.index]:color;}else if(typeof this.data[specific.dataset]==='object'&&properties.variant==='non-equi-angular'){if(RGraph.SVG.isNumber(this.data[specific.dataset][0])){if(index>0){return{continue:true};}
color=colors[specific.index];value=this.data[specific.dataset][0];value2=typeof this.data[specific.dataset][1]==='number'?this.data[specific.dataset][1]:null
label=properties.tooltipsFormattedKeyLabels[specific.dataset];}else if(RGraph.SVG.isArray(this.data[specific.dataset][0])){color=colors[index];value=this.data[specific.dataset][0][index];value=typeof this.data[specific.dataset][0][index]==='number'?this.data[specific.dataset][0][index]:null;value2=typeof this.data[specific.dataset][1]==='number'?this.data[specific.dataset][1]:null;label=properties.tooltipsFormattedKeyLabels[index];}}else if(typeof this.data[specific.dataset]==='object'){color=!RGraph.SVG.isNull(properties.tooltipsFormattedKeyColors)&&properties.tooltipsFormattedKeyColors[index]?properties.tooltipsFormattedKeyColors[index]:color;}
return{label:label,color:color,value:value,value2:value2};};this.positionTooltipStatic=function(args)
{var obj=args.object,e=args.event,tooltip=args.tooltip,index=args.index,svgXY=RGraph.SVG.getSVGXY(obj.svg),angles=this.angles[index];var startAngle=parseFloat(angles.element.getAttribute('data-start-angle'));var endAngle=parseFloat(angles.element.getAttribute('data-end-angle'));var radiusInner=parseFloat(angles.element.getAttribute('data-radius-inner'));var radiusOuter=parseFloat(angles.element.getAttribute('data-radius'));var angle=((endAngle-startAngle)/2)+startAngle-RGraph.SVG.TRIG.HALFPI;if(isNaN(radiusInner)){radiusInner=0;}
var coords=RGraph.SVG.TRIG.toCartesian({cx:this.centerx,cy:this.centery,r:((radiusOuter-radiusInner)/2)+radiusInner,angle:angle});args.tooltip.style.left=(svgXY[0]
-(tooltip.offsetWidth/2)
+coords.x)+'px';args.tooltip.style.top=(svgXY[1]
-tooltip.offsetHeight
-10
+coords.y)+'px';};for(i in conf.options){if(typeof i==='string'){this.set(i,conf.options[i]);}}};return this;})(window,document);