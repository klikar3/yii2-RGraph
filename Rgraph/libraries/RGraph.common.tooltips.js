'version:2023-07-17 (6.13)';RGraph=window.RGraph||{isrgraph:true,isRGraph:true,rgraph:true};(function(win,doc,undefined)
{var ua=navigator.userAgent;RGraph.tooltips={};RGraph.tooltips.css=RGraph.tooltips.style={display:'inline-block',position:'absolute',padding:'6px',fontFamily:'Arial',fontSize:'10pt',fontWeight:'normal',textAlign:'center',left:0,top:0,backgroundColor:'black',color:'white',visibility:'visible',zIndex:3,borderRadius:'5px',boxShadow:'rgba(96,96,96,0.5) 0 0 5px',opacity:0,lineHeight:RGraph.ISIE?'normal':'initial'};RGraph.tooltip=function()
{var args=RGraph.getArgs(arguments,'object,text,x,y,index,event');if(args.object.properties.tooltipsEffect==='slide'){RGraph.tooltips.style.transition='left ease-out .25s, top ease-out .25s'}
if(RGraph.SHOW_TOOLTIP_TIMER){clearTimeout(RGraph.SHOW_TOOLTIP_TIMER);}
if(RGraph.trim(args.text).length===0){return;}
RGraph.fireCustomEvent(args.object,'onbeforetooltip');if(typeof args.object.get('tooltipsOverride')=='function'){return args.object.get('tooltipsOverride')(args.object,args.text,args.x,args.y,args.index);}
var originalX=args.x;var originalY=args.y;args.text=RGraph.getTooltipTextFromDIV(args.text);var timers=RGraph.Registry.get('tooltip.timers');if(timers&&timers.length){for(i=0;i<timers.length;++i){clearTimeout(timers[i]);}}
RGraph.Registry.set('tooltip.timers',[]);if(args.object.get('contextmenu')){RGraph.hideContext();}
if(typeof args.object.get('tooltipsCssClass')!=='string'){args.object.set('tooltipsCssClass','RGraph_tooltip');}
var tooltipObj=document.createElement('DIV');tooltipObj.className=args.object.get('tooltipsCssClass');for(var i in RGraph.tooltips.style){if(typeof i==='string'){tooltipObj.style[i]=substitute(RGraph.tooltips.style[i]);}}
for(var i in RGraph.tooltips.css){if(typeof i==='string'){tooltipObj.style[i]=substitute(RGraph.tooltips.css[i]);}}
if(!RGraph.isNull(args.object.properties.tooltipsCss)){for(var i in args.object.properties.tooltipsCss){if(typeof i==='string'){tooltipObj.style[i]=substitute(args.object.properties.tooltipsCss[i]);}}}
if(args.object.properties.tooltipsEffect==='slide'){tooltipObj.style.left=typeof RGraph.tooltip_slide_effect_previous_x_coordinate==='string'?RGraph.tooltip_slide_effect_previous_x_coordinate:0;tooltipObj.style.top=typeof RGraph.tooltip_slide_effect_previous_y_coordinate==='string'?RGraph.tooltip_slide_effect_previous_y_coordinate:0;}
function substitute(original)
{original=String(original);var prop=args.object.properties;var properties=args.object.properties;if(typeof args.object.tooltipSubstitutions!=='function'){return original;}
if(typeof args.object.tooltipSubstitutions==='function'){var specific=args.object.tooltipSubstitutions({index:args.index});}
var text=original.replace(/%%/g,'___--PERCENT--___');(function()
{if(!specific.values){return;}
var colors=properties.tooltipsFormattedKeyColors?properties.tooltipsFormattedKeyColors:properties.colors;for(var i=0,str=[];i<specific.values.length;++i){var value=(typeof specific.values==='object'&&typeof specific.values[i]==='number')?specific.values[i]:0;var color=properties.colorsSequential?colors[args.index]:colors[i];var label=((typeof properties.tooltipsFormattedKeyLabels==='object'&&typeof properties.tooltipsFormattedKeyLabels[i]==='string')?properties.tooltipsFormattedKeyLabels[i]:'');if(typeof args.object.tooltipsFormattedCustom==='function'){var ret=args.object.tooltipsFormattedCustom(specific,i,colors);if(ret.continue){continue;};if(typeof ret.label==='string'){label=ret.label;};if(ret.color){color=ret.color;};if(typeof ret.value==='number'){value=ret.value;};}
value=RGraph.numberFormat({object:args.object,number:value.toFixed(args.object.properties.tooltipsFormattedDecimals),thousand:args.object.properties.tooltipsFormattedThousand||',',point:args.object.properties.tooltipsFormattedPoint||'.',unitspre:args.object.properties.tooltipsFormattedUnitsPre||'',unitspost:args.object.properties.tooltipsFormattedUnitsPost||''});var borderRadius=0;if(typeof args.object.properties.tooltipsFormattedKeyColorsShape==='string'&&args.object.properties.tooltipsFormattedKeyColorsShape==='circle'){borderRadius='100px';}
str[i]='<tr><td><div id="RGraph_tooltipsFormattedKeyColor_'+i+'" class="RGraph_tooltipsFormattedKeyColor" style="color: transparent">Ml</div></td><td id="RGraph_tooltipsFormattedKeyLabel_'+i+'">'
+'<span>{1}</span>'.format(label)
+' '+value+'</td></tr>';(function(index,color,borderRadius)
{setTimeout(function()
{var obj=document.getElementById('RGraph_tooltipsFormattedKeyLabel_'+index);if(obj&&obj.style){obj.style.textAlign='left';}
var colorBlob=document.getElementById('RGraph_tooltipsFormattedKeyColor_'+index);if(colorBlob){colorBlob.style.textAlign='left';colorBlob.style.backgroundColor=color;colorBlob.style.color='transparent';colorBlob.style.pointerEvents='none';colorBlob.style.borderRadius=borderRadius;}
for(var property in properties.tooltipsFormattedKeyColorsCss){if(typeof property==='string'){colorBlob.style[property]=properties.tooltipsFormattedKeyColorsCss[property];}}},5);})(i,color,borderRadius);}
str=str.join('');text=text.replace('%{key}','<table id="rgraph_tooltip_key" class="rgraph_tooltip_key RGraph_tooltip_key">'+str+'</table>');setTimeout(function()
{var obj=document.getElementById('rgraph_tooltip_key');if(obj&&obj.style){obj.style.color='inherit';}},1);})();text=text.replace(/%{index}/g,specific.index);text=text.replace(/%{dataset2}/g,specific.dataset2);text=text.replace(/%{dataset}/g,specific.dataset);text=text.replace(/%{group2}/g,specific.dataset2);text=text.replace(/%{group}/g,specific.dataset);text=text.replace(/%{sequential_index}/g,specific.sequentialIndex);text=text.replace(/%{seq}/g,specific.sequentialIndex);if(text.indexOf('%{list}')!==-1){(function()
{if(properties.tooltipsFormattedListType==='unordered')properties.tooltipsFormattedListType='ul';if(properties.tooltipsFormattedListType==='<ul>')properties.tooltipsFormattedListType='ul';if(properties.tooltipsFormattedListType==='ordered')properties.tooltipsFormattedListType='ol';if(properties.tooltipsFormattedListType==='<ol>')properties.tooltipsFormattedListType='ol';var str=properties.tooltipsFormattedListType==='ol'?'<ol id="rgraph_formatted_tooltips_list">':'<ul id="rgraph_formatted_tooltips_list">';var items=properties.tooltipsFormattedListItems[specific.sequentialIndex];if(items&&items.length){for(var i=0;i<items.length;++i){str+='<li>'+items[i]+'</li>';}}
str+=properties.tooltipsFormattedListType==='ol'?'</ol>':'</ul>';text=text.replace(/%{list}/,str);})();}
if(text.indexOf('%{table}')!==-1){(function()
{var str='<table>';if(properties.tooltipsFormattedTableHeaders&&properties.tooltipsFormattedTableHeaders.length){str+='<thead><tr>';for(var i=0;i<properties.tooltipsFormattedTableHeaders.length;++i){str+='<th>'+properties.tooltipsFormattedTableHeaders[i]+'</th>';}
str+='</tr></thead>';}
if(typeof properties.tooltipsFormattedTableData==='object'&&!RGraph.isNull(properties.tooltipsFormattedTableData)){str+='<tbody>';for(var i=0;i<properties.tooltipsFormattedTableData[specific.sequentialIndex].length;++i){str+='<tr>';for(var j=0;j<properties.tooltipsFormattedTableData[specific.sequentialIndex][i].length;++j){str+='<td>'+String(properties.tooltipsFormattedTableData[specific.sequentialIndex][i][j])+'</td>';}
str+='</tr>';}
str+='</tbody>';}
str+='</table>';text=text.replace(/%{table}/g,str);})();}
var reg=/%{p(?:rop)?(?:erty)?:([_a-z0-9]+)\[([0-9]+)\]}/i;while(text.match(reg)){var property=RegExp.$1;var index=parseInt(RegExp.$2);if(args.object.properties[property]){text=text.replace(reg,args.object.properties[property][index]||'');}else{text=text.replace(reg,'');}
RegExp.lastIndex=null;}
while(text.match(/%{property:([_a-z0-9]+)}/i)){var str='%{property:'+RegExp.$1+'}';text=text.replace(str,args.object.properties[RegExp.$1]);}
while(text.match(/%{prop:([_a-z0-9]+)}/i)){var str='%{prop:'+RegExp.$1+'}';text=text.replace(str,args.object.properties[RegExp.$1]);}
while(text.match(/%{p:([_a-z0-9]+)}/i)){var str='%{p:'+RegExp.$1+'}';text=text.replace(str,args.object.properties[RegExp.$1]);}
if(args.object.type==='rose'&&args.object.properties.variant==='non-equi-angular'){while(text.match(/%{value2}/i)){text=text.replace('%{value2}',specific.value2);}}
while(text.match(/%{value(?:_formatted)?}/i)){var value=specific.value;if(text.match(/%{value_formatted}/i)){text=text.replace('%{value_formatted}',typeof value==='number'?RGraph.numberFormat({object:args.object,number:value.toFixed(args.object.properties.tooltipsFormattedDecimals),thousand:args.object.properties.tooltipsFormattedThousand||',',point:args.object.properties.tooltipsFormattedPoint||'.',unitspre:args.object.properties.tooltipsFormattedUnitsPre||'',unitspost:args.object.properties.tooltipsFormattedUnitsPost||''}):null);}else{text=text.replace('%{value}',value);}}
var reg=/%{global:([_a-z0-9.]+)\[([0-9]+)\]}/i;while(text.match(reg)){var name=RegExp.$1,index=parseInt(RegExp.$2);if(eval(name)){text=text.replace(reg,eval(name)[index]||'');}else{text=text.replace(reg,'');}
RegExp.lastIndex=null;}
var reg=/%{global:([_a-z0-9.]+)}/i;while(text.match(reg)){var name=RegExp.$1;if(eval(name)){text=text.replace(reg,eval(name)||'');}else{text=text.replace(reg,'');}
RegExp.lastIndex=null;}
var regexp=/%{function:([_A-Za-z0-9]+)\((.*?)\)}/;text=text.replace(/\r/,'|CR|');text=text.replace(/\n/,'|LF|');while(text.match(regexp)){var str=RegExp.$1+'('+RegExp.$2+')';for(var i=0,len=str.length;i<len;++i){str=str.replace(/\r?\n/,"\\n");}
RGraph.Registry.set('tooltip-templates-function-object',args.object);var func=new Function('return '+str);var ret=func();text=text.replace(regexp,ret)}
text=text.replace(/%{color\:([^}]+)}/g,'<div style="display: inline-block; background-color: $1; scale: 0.9;color: transparent">Mj</div>');text=text.replace(/\|CR\|/,' ');text=text.replace(/\|LF\|/,' ');text=text.replace(/\r?\n/g,'<br />');text=text.replace(/___--PERCENT--___/g,'%')
return text.toString();}
tooltipObj.__original_text__=args.text;args.text=substitute(args.text);if(args.object.properties.tooltipsPointer){args.text+='<div id="RGraph_tooltipsPointer"></div>';if(!RGraph.isNull(args.object.properties.tooltipsPointerCss)){setTimeout(function()
{var pointerObj=document.getElementById('RGraph_tooltipsPointer');for(var i in args.object.properties.tooltipsPointerCss){if(typeof i==='string'){pointerObj.style[i]=substitute(args.object.properties.tooltipsPointerCss[i]);}}},50);}}
tooltipObj.innerHTML=args.text;tooltipObj.__text__=args.text;tooltipObj.__canvas__=args.object.canvas;tooltipObj.__event__=args.object.get('tooltipsEvent')||'click';tooltipObj.__object__=args.object;tooltipObj.id='__rgraph_tooltip_'+args.object.canvas.id+'_'+args.object.uid+'_'+args.index;setTimeout(function()
{var pointerObj=document.getElementById('RGraph_tooltipsPointer');var styles=window.getComputedStyle(tooltipObj,false);if(pointerObj){pointerObj.style.backgroundColor=styles.backgroundColor;pointerObj.style.color='transparent';pointerObj.style.position='absolute';pointerObj.style.bottom='-5px';pointerObj.style.left='50%';pointerObj.style.transform='translateX(-50%) rotate(45deg)';pointerObj.style.width='10px';pointerObj.style.height='10px';}},16.666);if(typeof args.index==='number'){tooltipObj.__index__=args.index;origIdx=args.index;}
if(args.object.type==='line'||args.object.type==='radar'){for(var ds=0;ds<args.object.data.length;++ds){if(args.index>=args.object.data[ds].length){args.index-=args.object.data[ds].length;}else{break;}}
tooltipObj.__dataset__=ds;tooltipObj.__index2__=args.index;}
document.body.appendChild(tooltipObj);var width=tooltipObj.offsetWidth;var height=tooltipObj.offsetHeight;tooltipObj.style.width=width+'px';if(args.object.properties.tooltipsPointer){var styles=window.getComputedStyle(tooltipObj,false);var pointer=document.getElementById('RGraph_tooltipsPointer');pointer.style.backgroundColor=styles['background-color'];tooltipObj.__pointer__=pointer;var tooltipsPointerCss='';if(args.object.properties.tooltipsPointerCss){var pointerDiv=document.getElementById('RGraph_tooltipsPointer');for(property in args.object.properties.tooltipsPointerCss){if(typeof property==='string'){pointerDiv.style[property]=args.object.properties.tooltipsPointerCss[property];}}}}
var mouseXY=RGraph.getMouseXY(args.event);var canvasXY=RGraph.getCanvasXY(args.object.canvas);args.object.properties.tooltipsOffsetx=args.object.properties.tooltipsOffsetx||0;args.object.properties.tooltipsOffsety=args.object.properties.tooltipsOffsety||0;tooltipObj.style.left=args.event.pageX-(parseFloat(tooltipObj.style.paddingLeft)+(width/2))+args.object.properties.tooltipsOffsetx+'px';tooltipObj.style.top=args.event.pageY-height-10+args.object.properties.tooltipsOffsety+'px';if(parseFloat(tooltipObj.style.left)<=5){tooltipObj.style.left=5+args.object.properties.tooltipsOffsetx+'px';}
if(parseFloat(tooltipObj.style.top)<=5){tooltipObj.style.top=5+args.object.properties.tooltipsOffsety+'px';}
if(parseFloat(tooltipObj.style.left)+parseFloat(tooltipObj.style.width)>window.innerWidth){tooltipObj.style.left='';tooltipObj.style.right=5+args.object.properties.tooltipsOffsetx+'px';}
if(args.object.properties.tooltipsPositionStatic&&typeof args.object.positionTooltipStatic==='function'){args.object.positionTooltipStatic({object:args.object,event:args.event,tooltip:tooltipObj,index:origIdx});}
if(parseInt(tooltipObj.style.left)<0){var left=parseInt(tooltipObj.style.left);var width=parseInt(tooltipObj.style.width)
left=left+(width*0.1*4);tooltipObj.style.left=left+'px';var pointer=document.getElementById('RGraph_tooltipsPointer');(function(pointer)
{setTimeout(function()
{if(pointer){pointer.style.left='calc(10% + 5px)';}},25);})(pointer)}else if((parseInt(tooltipObj.style.left)+parseInt(tooltipObj.offsetWidth))>document.body.offsetWidth){var left=parseInt(tooltipObj.style.left);var width=parseInt(tooltipObj.style.width)
left=left-(width*0.1*4);tooltipObj.style.left=left+'px';var pointer=document.getElementById('RGraph_tooltipsPointer');(function(pointer)
{setTimeout(function()
{if(pointer){pointer.style.left='calc(90% - 5px)';}},25)})(pointer);}
if(RGraph.isFixed(args.object.canvas)){tooltipObj.style.position='fixed';}
if(args.object.get('tooltipsEffect')==='fade'){for(var i=1;i<=10;++i){(function(index)
{setTimeout(function()
{tooltipObj.style.opacity=index/10;},index*25);})(i);}}else{tooltipObj.style.opacity=1;}
tooltipObj.onmousedown=function(e){e.stopPropagation();}
tooltipObj.onmouseup=function(e){e.stopPropagation();}
tooltipObj.onclick=function(e){if(e.button==0){e.stopPropagation();}}
window.addEventListener('resize',function()
{if(tooltipObj){RGraph.hideTooltip();RGraph.redrawCanvas(args.object.canvas);}});RGraph.Registry.set('tooltip',tooltipObj);if(args.object.properties.tooltipsEffect==='slide'){RGraph.tooltip_slide_effect_previous_x_coordinate=tooltipObj.style.left;RGraph.tooltip_slide_effect_previous_y_coordinate=tooltipObj.style.top;}
RGraph.fireCustomEvent(args.object,'ontooltip');};RGraph.getTooltipTextFromDIV=function()
{var args=RGraph.getArgs(arguments,'text');var result=/^id:(.*)/.exec(args.text);if(result&&result[1]&&document.getElementById(result[1])){args.text=document.getElementById(result[1]).innerHTML;}else if(result&&result[1]){args.text='';}
return args.text;};RGraph.getTooltipWidth=function()
{var args=RGraph.getArgs(arguments,'text,object');var div=document.createElement('DIV');div.className=args.object.get('tooltipsCssClass');div.style.paddingLeft=RGraph.tooltips.padding;div.style.paddingRight=RGraph.tooltips.padding;div.style.fontFamily=RGraph.tooltips.font_face;div.style.fontSize=RGraph.tooltips.font_size;div.style.visibility='hidden';div.style.position='absolute';div.style.top='300px';div.style.left=0;div.style.display='inline';div.innerHTML=RGraph.getTooltipTextFromDIV(args.text);document.body.appendChild(div);return div.offsetWidth;};RGraph.hideTooltip=function()
{var tooltip=RGraph.Registry.get('tooltip');var uid=arguments[0]&&arguments[0].uid?arguments[0].uid:null;if(tooltip&&tooltip.parentNode&&(!uid||uid==tooltip.__canvas__.uid)){for(var v of['__canvas__','__event__','__index__','__object__','__original_text__','__shape__','__text__']){if(typeof tooltip[v]!=='undefined'){delete tooltip[v];}}
for(i in tooltip){if(i.substr(0,7)==='rgraph_'){delete tooltip[i];}}
tooltip.parentNode.removeChild(tooltip);tooltip.style.display='none';tooltip.style.visibility='hidden';RGraph.Registry.set('tooltip',null);}};RGraph.preLoadTooltipImages=function()
{var args=RGraph.getArgs(arguments,'object');var tooltips=args.object.get('tooltips');if(RGraph.hasTooltips(args.object)){if(args.object.type=='rscatter'){tooltips=[];for(var i=0;i<args.object.data.length;++i){tooltips.push(args.object.data[3]);}}
for(var i=0;i<tooltips.length;++i){var div=document.createElement('div');div.style.position='absolute';div.style.opacity=0;div.style.top='-100px';div.style.left='-100px';div.innerHTML=tooltips[i];document.body.appendChild(div);var img_tags=div.getElementsByTagName('IMG');for(var j=0;j<img_tags.length;++j){if(img_tags&&img_tags[i]){var img=document.createElement('img');img.style.position='absolute';img.style.opacity=0;img.style.top='-100px';img.style.left='-100px';img.src=img_tags[i].src
document.body.appendChild(img);setTimeout(function(){document.body.removeChild(img);},250);}}
document.body.removeChild(div);}}};RGraph.tooltips_mousemove=function()
{var args=RGraph.getArgs(arguments,'object,event'),shape=args.object.getShape(args.event),changeCursor_tooltips=false
if(shape&&typeof shape.index==='number'&&args.object.get('tooltips')[shape.index]){var text=RGraph.parseTooltipText(args.object.get('tooltips'),shape.index);if(text){changeCursor_tooltips=true;if(args.object.get('tooltipsEvent')==='onmousemove'){if(!RGraph.Registry.get('tooltip')||RGraph.Registry.get('tooltip').__object__.uid!=args.object.uid||RGraph.Registry.get('tooltip').__index__!=shape.index){RGraph.hideTooltip();RGraph.clear(args.object.canvas);RGraph.redraw();RGraph.tooltip(args.object,text,args.event.pageX,args.event.pageY,shape.index);args.object.highlight(shape);}}}}else if(shape&&typeof shape.index==='number'){var text=RGraph.parseTooltipText(args.object.get('tooltips'),shape.index);if(text){changeCursor_tooltips=true}}
return changeCursor_tooltips;};})(window,document);