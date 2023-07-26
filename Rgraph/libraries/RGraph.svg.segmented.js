'version:2023-07-17 (6.13)';RGraph=window.RGraph||{isrgraph:true,isRGraph:true,rgraph:true};RGraph.SVG=RGraph.SVG||{};(function(win,doc,undefined)
{RGraph.SVG.Segmented=function(conf)
{this.set=function(name,value)
{if(arguments.length===1&&typeof name==='object'){for(i in arguments[0]){if(typeof i==='string'){name=ret.name;value=ret.value;this.set(name,value);}}}else{var ret=RGraph.SVG.commonSetter({object:this,name:name,value:value});name=ret.name;value=ret.value;this.properties[name]=value;}
return this;};this.get=function(name)
{return this.properties[name];};this.min=RGraph.SVG.stringsToNumbers(conf.min);this.max=RGraph.SVG.stringsToNumbers(conf.max);this.value=RGraph.SVG.stringsToNumbers(conf.value);this.currentValue=null;this.id=conf.id;this.uid=RGraph.SVG.createUID();this.container=document.getElementById(this.id);this.layers={};this.svg=RGraph.SVG.createSVG({object:this,container:this.container});this.isRGraph=true;this.isrgraph=true;this.rgraph=true;this.width=Number(this.svg.getAttribute('width'));this.height=Number(this.svg.getAttribute('height'));this.type='segmented';this.colorsParsed=false;this.originalColors={};this.gradientCounter=1;this.nodes={};this.shadowNodes=[];this.firstDraw=true;if(this.value>this.max)this.value=this.max;if(this.value<this.min)this.value=this.min;RGraph.SVG.OR.add(this);this.container.style.display='inline-block';this.properties={radius:null,centerx:null,centery:null,width:null,marginLeft:15,marginRight:15,marginTop:15,marginBottom:15,backgroundColor:'black',colors:['red','white'],textFont:'Arial, Verdana, sans-serif',textSize:60,textColor:'gray',textBold:false,textItalic:false,text:null,labelsCenter:true,labelsCenterSpecificFormattedDecimals:0,labelsCenterSpecificFormattedPoint:'.',labelsCenterSpecificFormattedThousand:',',labelsCenterSpecificFormattedUnitsPre:'',labelsCenterSpecificFormattedUnitsPost:'',labelsCenterFont:null,labelsCenterSize:null,labelsCenterColor:null,labelsCenterBold:null,labelsCenterItalic:null,labelsCenterUnitsPre:null,labelsCenterUnitsPost:null,labelsCenterDecimals:null,labelsCenterPoint:null,labelsCenterThousand:null,labelsCenterSpecific:null,labelsCenterOffsetx:0,labelsCenterOffsety:0,radialsCount:36,adjustable:false,effectRoundrobinMultiplier:1};RGraph.SVG.getGlobals(this);if(RGraph.SVG.FX&&typeof RGraph.SVG.FX.decorate==='function'){RGraph.SVG.FX.decorate(this);}
this.responsive=RGraph.SVG.responsive;var properties=this.properties;this.draw=function()
{RGraph.SVG.fireCustomEvent(this,'onbeforedraw');this.nodes={};this.width=Number(this.svg.getAttribute('width'));this.height=Number(this.svg.getAttribute('height'));RGraph.SVG.createDefs(this);this.graphWidth=this.width-properties.marginLeft-properties.marginRight;this.graphHeight=this.height-properties.marginTop-properties.marginBottom;this.centerx=(this.graphWidth/2)+properties.marginLeft;this.centery=(this.graphHeight/2)+properties.marginTop;this.radius=Math.min(this.graphWidth/2,this.graphHeight/2);this.centerx=typeof properties.centerx==='number'?properties.centerx:this.centerx;this.centery=typeof properties.centery==='number'?properties.centery:this.centery;this.radius=typeof properties.radius==='number'?properties.radius:this.radius;if(typeof properties.radius==='string'&&properties.radius.match(/^\+|-\d+$/))this.radius+=parseFloat(properties.radius);if(typeof properties.centerx==='string'&&properties.centerx.match(/^\+|-\d+$/))this.centerx+=parseFloat(properties.centerx);if(typeof properties.centery==='string'&&properties.centery.match(/^\+|-\d+$/))this.centery+=parseFloat(properties.centery);RGraph.SVG.resetColorsToOriginalValues({object:this});this.parseColors();this.path=this.drawMeter();this.currentValue=this.value;this.drawLabels();if(properties.adjustable&&!this.adjusting_event_listeners_installed){this.adjusting_mousedown=false;var obj=this;var func=function(e)
{var div=e.currentTarget,mouseX=e.offsetX,mouseY=e.offsetY;if(RGraph.SVG.ISFF){mouseX=e.pageX-e.currentTarget.offsetLeft;mouseY=e.pageY-e.currentTarget.offsetTop;}
var radius=RGraph.SVG.TRIG.getHypLength({x1:mouseX,y1:mouseY,x2:obj.centerx,y2:obj.centery,object:obj});if(radius>obj.radius){return;}
var value=obj.getValue(e);obj.value=value;obj.currentValue=value;RGraph.SVG.clear(obj.svg);obj.draw();};this.container.addEventListener('mousedown',function(e)
{obj.adjusting_mousedown=true;func(e);RGraph.SVG.fireCustomEvent(obj,'onadjustbegin');},false);this.container.addEventListener('mousemove',function(e)
{if(obj.adjusting_mousedown){func(e);RGraph.SVG.fireCustomEvent(obj,'onadjust');}},false);window.addEventListener('mouseup',function(e)
{obj.adjusting_mousedown=false;RGraph.SVG.fireCustomEvent(obj,'onadjustend');},false);this.adjusting_event_listeners_installed=true;}
RGraph.SVG.addCustomText(this);if(this.firstDraw){this.firstDraw=false;RGraph.SVG.fireCustomEvent(this,'onfirstdraw');}
RGraph.SVG.fireCustomEvent(this,'ondraw');RGraph.SVG.installInlineResponsive(this);return this;};this.create=function(definition)
{return RGraph.SVG.create.call(this,definition,arguments[1],arguments[2]);};this.drawMeter=function()
{var width=typeof properties.width==='number'?properties.width:this.radius/2;if(typeof properties.width==='string'){width+=Number(properties.width);}
if(properties.backgroundColor){var rect=RGraph.SVG.create({svg:this.svg,type:'rect',parent:this.svg.all,attr:{fill:properties.backgroundColor,x:0,y:0,width:this.width,height:this.height}});}
var degrees=360/properties.radialsCount;degrees/=2,colored=Math.round(((this.value-this.min)/(this.max-this.min))*(properties.radialsCount*2));var radialWidth=RGraph.SVG.TRIG.TWOPI/properties.radialsCount;for(var i=1;i<(properties.radialsCount*2);i+=2){var start=(RGraph.SVG.TRIG.toRadians({degrees:(i*degrees)-(degrees/2)})*properties.effectRoundrobinMultiplier),end=(RGraph.SVG.TRIG.toRadians({degrees:(i*degrees)+(degrees/2)})*properties.effectRoundrobinMultiplier);var path=RGraph.SVG.TRIG.getArcPath3({cx:this.centerx,cy:this.centery,radius:this.radius,start:start,end:end,lineto:false});var path2=RGraph.SVG.TRIG.getArcPath3({cx:this.centerx,cy:this.centery,radius:this.radius-width,start:end,end:start,anticlockwise:true});RGraph.SVG.create({svg:this.svg,parent:this.svg.all,type:'path',attr:{d:path+' '+path2+' z',fill:i>colored?properties.colors[1]:properties.colors[0]}});}};this.drawLabels=function()
{if(properties.labelsCenter){var center=RGraph.SVG.numberFormat({object:this,num:(this.value*this.properties.effectRoundrobinMultiplier).toFixed(properties.labelsCenterDecimals),prepend:properties.labelsCenterUnitsPre,append:properties.labelsCenterUnitsPost,point:properties.labelsCenterPoint,thousand:properties.labelsCenterThousand,formatter:properties.labelsCenterFormatter});if(properties.labelsCenterSpecific){properties.labelsCenterSpecific=RGraph.SVG.labelSubstitution({object:this,text:properties.labelsCenterSpecific,index:0,value:this.value,decimals:properties.labelsCenterSpecificFormattedDecimals||0,unitsPre:properties.labelsCenterSpecificFormattedUnitsPre||'',unitsPost:properties.labelsCenterSpecificFormattedUnitsPost||'',thousand:properties.labelsCenterSpecificFormattedThousand||',',point:properties.labelsCenterSpecificFormattedPoint||'.'});}
var textConf=RGraph.SVG.getTextConf({object:this,prefix:'labelsCenter'});var text=RGraph.SVG.text({object:this,parent:this.svg.all,tag:'labels.center',text:typeof properties.labelsCenterSpecific==='string'?properties.labelsCenterSpecific:center,x:this.centerx+properties.labelsCenterOffsetx,y:this.centery+properties.labelsCenterOffsety,valign:'center',halign:'center',font:textConf.font,size:textConf.size,bold:textConf.bold,italic:textConf.italic,color:textConf.color});this.nodes.labelsCenter=text;}};this.parseColors=function()
{if(!Object.keys(this.originalColors).length){this.originalColors={colors:RGraph.SVG.arrayClone(properties.colors),backgroundColor:RGraph.SVG.arrayClone(properties.backgroundColor)}}
var colors=properties.colors;if(colors){for(var i=0;i<colors.length;++i){colors[i]=RGraph.SVG.parseColorLinear({object:this,color:colors[i],start:this.centerx-this.radius,end:this.centerx+this.radius,direction:'horizontal'});}}
properties.backgroundColor=RGraph.SVG.parseColorLinear({object:this,color:properties.backgroundColor,start:properties.marginLeft,end:this.width-properties.marginRight,direction:'horizontal'});};this.on=function(type,func)
{if(type.substr(0,2)!=='on'){type='on'+type;}
RGraph.SVG.addCustomEventListener(this,type,func);return this;};this.exec=function(func)
{func(this);return this;};this.getAngle=function(e)
{if(typeof e==='number'){var angle=((e-this.min)/(this.max-this.min))*RGraph.SVG.TRIG.TWOPI;angle=angle-RGraph.SVG.TRIG.HALFPI;}else{var mouseX=e.offsetX,mouseY=e.offsetY;var angle=RGraph.SVG.TRIG.getAngleByXY({cx:this.centerx,cy:this.centery,x:mouseX,y:mouseY});angle-=RGraph.SVG.TRIG.HALFPI;}
return angle;};this.getValue=function(e)
{if(typeof e==='number'){var angle=e;}else{var angle=this.getAngle(e);}
var value=(((angle+RGraph.SVG.TRIG.HALFPI)/RGraph.SVG.TRIG.TWOPI)*(this.max-this.min))+this.min;value=Math.max(value,this.min);value=Math.min(value,this.max);return value;};this.getRadius=function(e)
{var x=e.offsetX,y=e.offsetY;var radius=RGraph.SVG.TRIG.getHypLength({x1:x,y1:y,x2:this.centerx,y2:this.centery});return radius;};this.grow=function()
{var obj=this;this.currentValue=typeof this.currentValue==='number'?this.currentValue:this.min;this.value=Math.min(this.value,this.max);this.value=Math.max(this.value,this.min);var opt=arguments[0]||{},frames=opt.frames||60,frame=0,diff=this.value-this.currentValue,step=diff/frames,callback=arguments[1]||function(){},initial=this.currentValue
function iterator()
{obj.value=initial+(frame++ *step);RGraph.SVG.redraw(obj.svg);if(frame++>=frames){this.currentValue=this.value;callback(obj);}else{RGraph.SVG.FX.update(iterator);}}
iterator();return this;};this.roundrobin=this.roundRobin=function()
{var obj=this,opt=arguments[0]||{},callback=arguments[1]||function(){},frame=0,frames=opt.frames||60,radius=this.radius;var iterator=function()
{var multiplier=Math.sin((frame/frames)*RGraph.SVG.TRIG.HALFPI);obj.set('effectRoundrobinMultiplier',multiplier);RGraph.SVG.redraw();if(frame++>=frames){this.currentValue=this.value;callback(obj);}else{RGraph.SVG.FX.update(iterator);}};iterator();return this;};for(i in conf.options){if(typeof i==='string'){this.set(i,conf.options[i]);}}
return this;};})(window,document);