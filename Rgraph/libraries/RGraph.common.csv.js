'version:2023-07-17 (6.13)';RGraph=window.RGraph||{isrgraph:true,isRGraph:true,rgraph:true};if(!RGraph.AJAX)RGraph.AJAX=function()
{var args=RGraph.getArgs(arguments,'url,callback');if(window.XMLHttpRequest){var httpRequest=new XMLHttpRequest();}else if(window.ActiveXObject){var httpRequest=new ActiveXObject("Microsoft.XMLHTTP");}
httpRequest.onreadystatechange=function()
{if(this.readyState==4&&this.status==200){this.__user_callback__=args.callback;this.__user_callback__(this.responseText);}}
httpRequest.open('GET',args.url,true);httpRequest.send();};if(!RGraph.AJAX.getString)RGraph.AJAX.getString=function()
{var args=RGraph.getArgs(arguments,'url,callback');RGraph.AJAX(args.url,function()
{var str=String(this.responseText);args.callback(str);});};if(!RGraph.createUID)RGraph.createUID=function()
{return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c)
{var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);return v.toString(16);});};if(!RGraph.getArgs)RGraph.getArgs=function(args,names)
{var ret={};var count=0;names=names.trim().split(/ *, */);if(args&&args[0]&&args.length===1&&typeof args[0][names[0]]!=='undefined'){for(var i=0;i<names.length;++i){if(typeof args[0][names[i]]==='undefined'){args[0][names[i]]=null;}}
return args[0];}else{for(var i in names){ret[names[i]]=typeof args[count]==='undefined'?null:args[count];count+=1;}}
return ret;};RGraph.CSV=function()
{var args=RGraph.getArgs(arguments,'url,callback,separator,eol');this.url=args.url;this.ready=args.callback;this.data=null;this.numrows=null;this.numcols=null;this.separator=args.separator||',';this.endofline=args.eol||/\r?\n/;this.uid=RGraph.createUID();this.splitCSV=function(str,split)
{var arr=[];var field='';var inDoubleQuotes=false;var inSingleQuotes=false;var preserve=(typeof split==='object'&&split.preserve)?true:false;if(typeof split==='object'){if(typeof split.char==='string'){split=split.char;}else{split=',';}}
for(var i=0,len=str.length;i<len;i+=1){char=str.charAt(i);if((char==='"')&&!inDoubleQuotes){inDoubleQuotes=true;continue;}else if((char==='"')&&inDoubleQuotes){inDoubleQuotes=false;continue;}
if((char==="'")&&!inSingleQuotes){inSingleQuotes=true;continue;}else if((char==="'")&&inSingleQuotes){inSingleQuotes=false;continue;}else if(char===split&&!inDoubleQuotes&&!inSingleQuotes){arr.push(field);field='';continue;}else{field=field+char;}}
arr.push(field);if(!preserve){for(i=0,len=arr.length;i<len;i+=1){arr[i]=arr[i].trim();}}
return arr;};this.fetch=function()
{var sep=this.separator,eol=this.endofline,obj=this;if(this.url.substring(0,3)==='id:'||this.url.substring(0,4)==='str:'){if(this.url.substring(0,3)==='id:'){var data=document.getElementById(this.url.substring(3)).innerHTML.trim();}else if(this.url.substring(0,4)==='str:'){var data=this.url.substring(4).trim();}
obj.data=data.split(eol);obj.numrows=obj.data.length;for(var i=0,len=obj.data.length;i<len;i+=1){var row=obj.splitCSV(obj.data[i],{preserve:false,char:sep});if(!obj.numcols){obj.numcols=row.length;}
for(var j=0;j<row.length;j+=1){if((/^\-?[0-9.]+$/).test(row[j])){row[j]=parseFloat(row[j]);}
obj.data[i]=row;}}
obj.ready(obj);}else{RGraph.AJAX.getString({url:this.url,callback:function(data)
{data=data.replace(/(\r?\n)+$/,'');obj.data=data.split(eol);obj.numrows=obj.data.length;for(var i=0,len=obj.data.length;i<len;i+=1){var row=obj.splitCSV(obj.data[i],{preserve:false,char:sep});if(!obj.numcols){obj.numcols=row.length;}
for(var j=0;j<row.length;j+=1){if((/^\-?[0-9.]+$/).test(row[j])){row[j]=parseFloat(row[j]);}
obj.data[i]=row;}}
obj.ready(obj);}});}};this.row=this.getRow=function(index)
{var row=[],start=parseInt(arguments[1])||0,length=arguments[2];if(RGraph.isString(index)){for(var i=0;i<this.data.length;++i){if(this.data[i][0]===index){var found=true;index=i;break;}}
if(!found){return null;}}
if(start<0){row=this.data[index].slice(this.data[index].length-Math.abs(start));}else{row=this.data[index].slice(start);}
if(typeof length==='number'&&length===0){row=[];}else{if(typeof length==='number'&&length>0){row=row.slice(0,length)}else if(typeof length==='number'&&length<0){for(var i=0;i<Math.abs(length);++i){row.pop();}}}
return row;};this.col=this.column=this.getColumn=this.getCol=function(index)
{var col=[],start=arguments[1]||0,length=arguments[2];if(RGraph.isString(index)){for(var i=0;i<this.data.length;++i){if(this.data[0][i]===index){var found=true;index=i;break;}}
if(!found){return null;}}
if(start>=0){for(var i=start;i<this.data.length;i+=1){if(this.data[i]){col.push(this.data[i][index]);}else{col.push(null);}}}else{for(var i=(this.data.length-Math.abs(start));i<this.data.length;i+=1){if(this.data[i]){col.push(this.data[i][index]);}else{col.push(null);}}}
if(typeof length==='number'&&length===0){col=[];}else{if(typeof length==='number'&&length>0){col=col.slice(0,length)}else if(typeof length==='number'&&length<0){for(var i=0;i<Math.abs(length);++i){col.pop();}}}
return col;};this.fetch();};