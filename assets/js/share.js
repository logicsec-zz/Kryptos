((function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q=Array.prototype.slice,r=function(a,b){return function(){return a.apply(b,arguments)}},s=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};window.sharejs=i={version:"0.5.0-pre"},k=function(a){return setTimeout(a,0)},d=function(){function a(){}return a.prototype.on=function(a,b){var c;return this._events||(this._events={}),(c=this._events)[a]||(c[a]=[]),this._events[a].push(b),this},a.prototype.removeListener=function(a,b){var c,d,e,f=this;this._events||(this._events={}),d=(e=this._events)[a]||(e[a]=[]),c=0;while(c<d.length)d[c]===b&&(d[c]=void 0),c++;return k(function(){var b;return f._events[a]=function(){var c,d,e=this._events[a],f=[];for(c=0,d=e.length;c<d;c++)b=e[c],b&&f.push(b);return f}.call(f)}),this},a.prototype.emit=function(){var a,b,c,d,e,f=arguments[0],g=2<=arguments.length?q.call(arguments,1):[];if((d=this._events)!=null?!d[f]:!void 0)return this;e=this._events[f];for(b=0,c=e.length;b<c;b++)a=e[b],a&&a.apply(this,g);return this},a}(),d.mixin=function(a){var b=a.prototype||a;return b.on=d.prototype.on,b.removeListener=d.prototype.removeListener,b.emit=d.prototype.emit,a},i._bt=f=function(a,b,c,d){var e,f=function(a,c,d,e){return b(d,a,c,"left"),b(e,c,a,"right")};return a.transformX=a.transformX=e=function(a,b){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;c(a),c(b),k=[];for(p=0,t=b.length;p<t;p++){o=b[p],j=[],g=0;while(g<a.length){l=[],f(a[g],o,j,l),g++;if(l.length!==1){if(l.length===0){x=a.slice(g);for(q=0,u=x.length;q<u;q++)h=x[q],d(j,h);o=null;break}y=e(a.slice(g),l),i=y[0],n=y[1];for(r=0,v=i.length;r<v;r++)h=i[r],d(j,h);for(s=0,w=n.length;s<w;s++)m=n[s],d(k,m);o=null;break}o=l[0]}o!=null&&d(k,o),a=j}return[a,k]},a.transform=a.transform=function(a,c,d){var f,g,h,i,j;if(d!=="left"&&d!=="right")throw new Error("type must be 'left' or 'right'");return c.length===0?a:a.length===1&&c.length===1?b([],a[0],c[0],d):d==="left"?(i=e(a,c),f=i[0],h=i[1],f):(j=e(c,a),h=j[0],g=j[1],g)}},m={},m.name="text",m.create=m.create=function(){return""},l=function(a,b,c){return a.slice(0,b)+c+a.slice(b)},g=function(a){var b,c;if(typeof a.p!="number")throw new Error("component missing position field");c=typeof a.i,b=typeof a.d;if(!(c==="string"^b==="string"))throw new Error("component needs an i or d field");if(!(a.p>=0))throw new Error("position cannot be negative")},h=function(a){var b,c,d;for(c=0,d=a.length;c<d;c++)b=a[c],g(b);return!0},m.apply=function(a,b){var c,d,e,f;h(b);for(e=0,f=b.length;e<f;e++){c=b[e];if(c.i!=null)a=l(a,c.p,c.i);else{d=a.slice(c.p,c.p+c.d.length);if(c.d!==d)throw new Error("Delete component '"+c.d+"' does not match deleted text '"+d+"'");a=a.slice(0,c.p)+a.slice(c.p+c.d.length)}}return a},m._append=e=function(a,b){var c,d,e;if(b.i===""||b.d==="")return;return a.length===0?a.push(b):(c=a[a.length-1],c.i!=null&&b.i!=null&&c.p<=(d=b.p)&&d<=c.p+c.i.length?a[a.length-1]={i:l(c.i,b.p-c.p,b.i),p:c.p}:c.d!=null&&b.d!=null&&b.p<=(e=c.p)&&e<=b.p+b.d.length?a[a.length-1]={d:l(b.d,c.p-b.p,c.d),p:b.p}:a.push(b))},m.compose=function(a,b){var c,d,f,g;h(a),h(b),d=a.slice();for(f=0,g=b.length;f<g;f++)c=b[f],e(d,c);return d},m.compress=function(a){return m.compose([],a)},m.normalize=function(a){var b,c,d,f=[];if(a.i!=null||a.p!=null)a=[a];for(c=0,d=a.length;c<d;c++)b=a[c],b.p==null&&(b.p=0),e(f,b);return f},o=function(a,b,c){return b.i!=null?b.p<a||b.p===a&&c?a+b.i.length:a:a<=b.p?a:a<=b.p+b.d.length?b.p:a-b.d.length},m.transformCursor=function(a,b,c){var d,e,f;for(e=0,f=b.length;e<f;e++)d=b[e],a=o(a,d,c);return a},m._tc=n=function(a,b,c,d){var f,g,i,j,k,l;h([b]),h([c]);if(b.i!=null)e(a,{i:b.i,p:o(b.p,c,d==="right")});else if(c.i!=null)l=b.d,b.p<c.p&&(e(a,{d:l.slice(0,c.p-b.p),p:b.p}),l=l.slice(c.p-b.p)),l!==""&&e(a,{d:l,p:b.p+c.i.length});else if(b.p>=c.p+c.d.length)e(a,{d:b.d,p:b.p-c.d.length});else if(b.p+b.d.length<=c.p)e(a,b);else{j={d:"",p:b.p},b.p<c.p&&(j.d=b.d.slice(0,c.p-b.p)),b.p+b.d.length>c.p+c.d.length&&(j.d+=b.d.slice(c.p+c.d.length-b.p)),i=Math.max(b.p,c.p),g=Math.min(b.p+b.d.length,c.p+c.d.length),f=b.d.slice(i-b.p,g-b.p),k=c.d.slice(i-c.p,g-c.p);if(f!==k)throw new Error("Delete ops delete different text in the same region of the document");j.d!==""&&(j.p=o(j.p,c),e(a,j))}return a},j=function(a){return a.i!=null?{d:a.i,p:a.p}:{i:a.d,p:a.p}},m.invert=function(a){var b,c,d,e=a.slice().reverse(),f=[];for(c=0,d=e.length;c<d;c++)b=e[c],f.push(j(b));return f},i.types||(i.types={}),f(m,n,h,e),i.types.text=m,m.api={provides:{text:!0},getLength:function(){return this.snapshot.length},getText:function(){return this.snapshot},insert:function(a,b,c){var d=[{p:a,i:b}];return this.submitOp(d,c),d},del:function(a,b,c){var d=[{p:a,d:this.snapshot.slice(a,a+b)}];return this.submitOp(d,c),d},_register:function(){return this.on("remoteop",function(a){var b,c,d,e=[];for(c=0,d=a.length;c<d;c++)b=a[c],b.i!==void 0?e.push(this.emit("insert",b.p,b.i)):e.push(this.emit("delete",b.p,b.d));return e})}},c=function(){function a(a,b,c){this.connection=a,this.name=b,this.flush=r(this.flush,this),c||(c={}),this.version=c.v,this.snapshot=c.snaphot,c.type&&this._setType(c.type),this.state="closed",this.autoOpen=!1,this._create=c.create,this.inflightOp=null,this.inflightCallbacks=[],this.inflightSubmittedIds=[],this.pendingOp=null,this.pendingCallbacks=[],this.serverOps={}}return a.prototype._xf=function(a,b){var c,d;return this.type.transformX?this.type.transformX(a,b):(c=this.type.transform(a,b,"left"),d=this.type.transform(b,a,"right"),[c,d])},a.prototype._otApply=function(a,b){var c=this.snapshot;this.snapshot=this.type.apply(this.snapshot,a),this.emit("change",a,c);if(b)return this.emit("remoteop",a,c)},a.prototype._connectionStateChanged=function(a,b){switch(a){case"disconnected":this.state="closed",this.inflightOp&&this.inflightSubmittedIds.push(this.connection.id),this.emit("closed");break;case"ok":this.autoOpen&&this.open();break;case"stopped":typeof this._openCallback=="function"&&this._openCallback(b)}return this.emit(a,b)},a.prototype._setType=function(a){var b,c,d;typeof a=="string"&&(a=p[a]);if(!a||!a.compose)throw new Error("Support for types without compose() is not implemented");this.type=a;if(a.api){d=a.api;for(b in d)c=d[b],this[b]=c;return typeof this._register=="function"?this._register():void 0}return this.provides={}},a.prototype._onMessage=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(a.open===!0)return this.state="open",this._create=!1,this.created==null&&(this.created=!!a.create),a.type&&this._setType(a.type),a.create?(this.created=!0,this.snapshot=this.type.create()):(this.created!==!0&&(this.created=!1),a.snapshot!==void 0&&(this.snapshot=a.snapshot)),a.v!=null&&(this.version=a.v),this.inflightOp?(g={doc:this.name,op:this.inflightOp,v:this.version},this.inflightSubmittedIds.length&&(g.dupIfSource=this.inflightSubmittedIds),this.connection.send(g)):this.flush(),this.emit("open"),typeof this._openCallback=="function"?this._openCallback(null):void 0;if(a.open===!1)return a.error&&(typeof console!="undefined"&&console!==null&&console.error("Could not open document: "+a.error),this.emit("error",a.error),typeof this._openCallback=="function"&&this._openCallback(a.error)),this.state="closed",this.emit("closed"),typeof this._closeCallback=="function"&&this._closeCallback(),this._closeCallback=null;if(a.op!==null||d!=="Op already submitted"){if(a.op===void 0&&a.v!==void 0||a.op&&(m=a.meta.source,s.call(this.inflightSubmittedIds,m)>=0)){e=this.inflightOp,this.inflightOp=null,this.inflightSubmittedIds.length=0,d=a.error;if(d){this.type.invert?(h=this.type.invert(e),this.pendingOp&&(n=this._xf(this.pendingOp,h),this.pendingOp=n[0],h=n[1]),this._otApply(h,!0)):this.emit("error","Op apply failed ("+d+") and the op could not be reverted"),o=this.inflightCallbacks;for(i=0,k=o.length;i<k;i++)b=o[i],b(d)}else{if(a.v!==this.version)throw new Error("Invalid version from server");this.serverOps[this.version]=e,this.version++,p=this.inflightCallbacks;for(j=0,l=p.length;j<l;j++)b=p[j],b(null,e)}return this.flush()}if(a.op){if(a.v<this.version)return;return a.doc!==this.name?this.emit("error","Expected docName '"+this.name+"' but got "+a.doc):a.v!==this.version?this.emit("error","Expected version "+this.version+" but got "+a.v):(f=a.op,this.serverOps[this.version]=f,c=f,this.inflightOp!==null&&(q=this._xf(this.inflightOp,c),this.inflightOp=q[0],c=q[1]),this.pendingOp!==null&&(r=this._xf(this.pendingOp,c),this.pendingOp=r[0],c=r[1]),this.version++,this._otApply(c,!0))}return typeof console!="undefined"&&console!==null?console.warn("Unhandled document message:",a):void 0}},a.prototype.flush=function(){if(this.connection.state!=="ok"||this.inflightOp!==null||this.pendingOp===null)return;return this.inflightOp=this.pendingOp,this.inflightCallbacks=this.pendingCallbacks,this.pendingOp=null,this.pendingCallbacks=[],this.connection.send({doc:this.name,op:this.inflightOp,v:this.version})},a.prototype.submitOp=function(a,b){return this.type.normalize!=null&&(a=this.type.normalize(a)),this.snapshot=this.type.apply(this.snapshot,a),this.pendingOp!==null?this.pendingOp=this.type.compose(this.pendingOp,a):this.pendingOp=a,b&&this.pendingCallbacks.push(b),this.emit("change",a),setTimeout(this.flush,0)},a.prototype.open=function(a){var b,c=this;this.autoOpen=!0;if(this.state!=="closed")return;return b={doc:this.name,open:!0},this.snapshot===void 0&&(b.snapshot=null),this.type&&(b.type=this.type.name),this.version!=null&&(b.v=this.version),this._create&&(b.create=!0),this.connection.send(b),this.state="opening",this._openCallback=function(b){return c._openCallback=null,typeof a=="function"?a(b):void 0}},a.prototype.close=function(a){return this.autoOpen=!1,this.state==="closed"?typeof a=="function"?a():void 0:(this.connection.send({doc:this.name,open:!1}),this.state="closed",this.emit("closing"),this._closeCallback=a)},a}(),d.mixin(c),i.Doc=c,p||(p=i.types);if(!window.BCSocket)throw new Error("Must load browserchannel before this library");a=window.BCSocket,b=function(){function b(b){var c=this;this.docs={},this.state="connecting",this.socket=new a(b,{reconnect:!0}),this.socket.onmessage=function(a){var b;if(a.auth===null)return c.lastError=a.error,c.disconnect(),c.emit("connect failed",a.error);if(a.auth){c.id=a.auth,c.setState("ok"),c.emit("connect");return}return b=a.doc,b!==void 0?c.lastReceivedDoc=b:a.doc=b=c.lastReceivedDoc,c.docs[b]?c.docs[b]._onMessage(a):typeof console!="undefined"&&console!==null?console.error("Unhandled message",a):void 0},this.connected=!1,this.socket.onclose=function(a){c.setState("disconnected",a);if(a==="Closed"||a==="Stopped by server")return c.setState("stopped",c.lastError||a)},this.socket.onerror=function(a){return c.emit("error",a)},this.socket.onopen=function(){return c.lastError=c.lastReceivedDoc=c.lastSentDoc=null,c.setState("handshaking")},this.socket.onconnecting=function(){return c.setState("connecting")}}return b.prototype.setState=function(a,b){var c,d,e,f;if(this.state===a)return;this.state=a,a==="disconnected"&&delete this.id,this.emit(a,b),e=this.docs,f=[];for(d in e)c=e[d],f.push(c._connectionStateChanged(a,b));return f},b.prototype.send=function(a){var b=a.doc;return b===this.lastSentDoc?delete a.doc:this.lastSentDoc=b,this.socket.send(a)},b.prototype.disconnect=function(){return this.socket.close()},b.prototype.makeDoc=function(a,b,d){var e,f=this;if(this.docs[a])throw new Error("Doc "+a+" already open");return e=new c(this,a,b),this.docs[a]=e,e.open(function(b){return b&&delete f.docs[a],d(b,b?void 0:e)})},b.prototype.openExisting=function(a,b){var c;return this.state==="stopped"?b("connection closed"):this.docs[a]?b(null,this.docs[a]):c=this.makeDoc(a,{},b)},b.prototype.open=function(a,b,c){var d;if(this.state==="stopped")return c("connection closed");typeof b=="function"&&(c=b,b="text"),c||(c=function(){}),typeof b=="string"&&(b=p[b]);if(!b)throw new Error("OT code for document type missing");if(a==null)throw new Error("Server-generated random doc names are not currently supported");if(this.docs[a]){d=this.docs[a],d.type===b?c(null,d):c("Type mismatch",d);return}return this.makeDoc(a,{create:!0,type:b.name},c)},b}(),d.mixin(b),i.Connection=b,i.open=function(){var a={},c=function(c){var d,e,f;return f=window.location,c==null&&(c=""+f.protocol+"//"+f.host+"/channel"),a[c]||(d=new b(c),e=function(){return delete a[c]},d.on("disconnecting",e),d.on("connect failed",e),a[c]=d),a[c]};return function(a,b,d,e){var f;return typeof d=="function"&&(e=d,d=null),f=c(d),f.numDocs++,f.open(a,b,function(a,b){return a?e(a):(b.on("closed",function(){var a,b,c=0,d=f.docs;for(b in d)a=d[b],(a.state!=="closed"||a.autoOpen)&&c++;if(c===0)return f.disconnect()}),e(null,b))}),f.on("connect failed"),f}}()})).call(this)