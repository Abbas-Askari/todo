(()=>{"use strict";var t={15:(t,e,s)=>{s.d(e,{Z:()=>n});var o=s(538);function r(t,e){this.title=t,this.tasks=e,this.changeSubs=[]}r.prototype.sub=function(t){this.changeSubs.push(t)},r.prototype.fire=function(){console.log(this.changeSubs),this.changeSubs.forEach((t=>t&&t())),(0,o.fw)(o.r$)};const n=r},538:(t,e,s)=>{s.d(e,{fw:()=>h,mW:()=>a,r$:()=>n});var o=s(507),r=s(15);const n=1,c=[];let i=[];if(localStorage.getItem("projects")){let t=JSON.parse(localStorage.getItem("projects"));i=t.map((t=>{const e=t.tasks.map((t=>Object.assign(new o.Z,t)));return t.tasks=e,console.log(t.tasks.includes(e[0]),"this is the log"),Object.assign(new r.Z,t)}))}console.log(i);let a=()=>i;const h=t=>{t===n&&(console.log("Firing EVENT_PROJECTS_UPDATE"),c.forEach((t=>t()))),localStorage.setItem("projects",JSON.stringify(i))}},507:(t,e,s)=>{s.d(e,{Z:()=>n});var o=s(538);function r(t,e,s,o,r,n){this.title=t,this.description=e,this.proirity=s,this.checkLists=o,this.percent=0,this.date=r,this.changeSubs=[]}r.prototype.calcPercent=function(){let t=0,e=0;for(const s of this.checkLists)for(const o in s)t++,s[o]&&e++;return 0==t?(this.percent=0,0):(this.percent=e/t,this.percent)},r.prototype.sub=function(t){this.changeSubs.push(t)},r.prototype.fire=function(){this.changeSubs.forEach((t=>t())),(t=>{const e=(0,o.mW)();for(let s of e)if(s.tasks.includes(t))return s;console.error("Parent project not found for task:",t,project)})(this).fire()};const n=r}},e={};function s(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,s),n.exports}s.d=(t,e)=>{for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s(507)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDNUVsQixPQUFPZ0MsZUFBZU4sRUFBU1IsRUFBSyxDQUFFZSxZQUFZLEVBQU1DLElBQUtKLEVBQVdaLElBRTFFLEVDTkRJLEVBQW9CUyxFQUFJLENBQUNJLEVBQUtDLElBQVVwQyxPQUFPbkIsVUFBVXdELGVBQWVDLEtBQUtILEVBQUtDLEdDR3hEZCxFQUFvQixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVWRU5UX1BST0pFQ1RTX1VQREFURSwgZmlyZSB9IGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5cbmZ1bmN0aW9uIFByb2plY3QodGl0bGUsIHRhc2tzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB0aGlzLmNoYW5nZVN1YnMgPSBbXTtcbn1cblxuUHJvamVjdC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgdGhpcy5jaGFuZ2VTdWJzLnB1c2goZnVuYyk7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyh0aGlzLmNoYW5nZVN1YnMpO1xuICB0aGlzLmNoYW5nZVN1YnMuZm9yRWFjaCgoZnVuYykgPT4gZnVuYyAmJiBmdW5jKCkpO1xuICBmaXJlKEVWRU5UX1BST0pFQ1RTX1VQREFURSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9KRUNUID0gMDtcbmV4cG9ydCBjb25zdCBFVkVOVF9QUk9KRUNUU19VUERBVEUgPSAxO1xuY29uc3QgcHJvamVjdFVwZGF0ZVN1YnNjcmlidGlvbnMgPSBbXTtcblxubGV0IHByb2plY3RzID0gW107XG4vLyBsZXQgcHJvamVjdHMgPSBbbmV3IFByb2plY3QoXCJVbnRpdGxlZCBQcm9qZWN0IDFcIiwgW10pXTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4gIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkpO1xuICBsZXQgbmV3UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICBwcm9qZWN0cyA9IG5ld1Byb2plY3RzLm1hcCgocCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gcC50YXNrcy5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpO1xuICAgIHAudGFza3MgPSB0YXNrcztcbiAgICBjb25zb2xlLmxvZyhwLnRhc2tzLmluY2x1ZGVzKHRhc2tzWzBdKSwgXCJ0aGlzIGlzIHRoZSBsb2dcIik7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcCk7XG4gIH0pO1xufVxuXG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgZmlyZShFVkVOVF9QUk9KRUNUU19VUERBVEUpO1xufTtcblxuZXhwb3J0IGxldCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG5leHBvcnQgY29uc3QgcHVibGlzaCA9IChmdW5jLCB0eXBlKSA9PiB7XG4gIGlmICh0eXBlID09PSBHRVRfUFJPSkVDVCkge1xuICAgIGdldFByb2plY3RzID0gZnVuYztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZSA9IChmdW5jLCBldmVudCkgPT4ge1xuICBpZiAoZXZlbnQgPT09IEVWRU5UX1BST0pFQ1RTX1VQREFURSkge1xuICAgIHByb2plY3RVcGRhdGVTdWJzY3JpYnRpb25zLnB1c2goZnVuYyk7XG4gIH1cbn07XG5cbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwge30pO1xuZXhwb3J0IGNvbnN0IGZpcmUgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50ID09PSBFVkVOVF9QUk9KRUNUU19VUERBVEUpIHtcbiAgICBjb25zb2xlLmxvZyhcIkZpcmluZyBFVkVOVF9QUk9KRUNUU19VUERBVEVcIik7XG4gICAgcHJvamVjdFVwZGF0ZVN1YnNjcmlidGlvbnMuZm9yRWFjaCgoZnVuYykgPT4gZnVuYygpKTtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlVGFza1N1YnMgPSAoKSA9PiB7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiAodGFzay5jaGFuZ2VTdWJzLmxlbmd0aCA9IDApKVxuICApO1xufTtcbiIsIi8vIGxldCB0c2sgPSB7XG4vLyAgIHRpdGxlOiBcIkJpa2Ugc2VydmljZVwiLFxuLy8gICBkZXNjcmlwdGlvbjogXCJUYWtlIHRoZSBiaWtlIHRvIHRoZSBzZXJ2aWNlIGNlbnRlci5cIixcbi8vICAgZGF0ZTogRGF0ZS5ub3coKSxcbi8vICAgcHJvaXJpdHk6IDEwLFxuLy8gICBjaGVja0xpc3Q6IHsgc3RhcnQ6IHRydWUsIGdldFRvTXVycmVlOiBmYWxzZSB9LFxuLy8gICBub3RlczogXCJcIixcbi8vIH07XG5cbmltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcblxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2lyaXR5LCBjaGVja0xpc3RzLCBkYXRlLCBwcm9qZWN0KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLnByb2lyaXR5ID0gcHJvaXJpdHk7XG4gIHRoaXMuY2hlY2tMaXN0cyA9IGNoZWNrTGlzdHM7XG4gIHRoaXMucGVyY2VudCA9IDA7XG4gIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIHRoaXMuY2hhbmdlU3VicyA9IFtdO1xuICAvLyB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xufVxuXG5UYXNrLnByb3RvdHlwZS5jYWxjUGVyY2VudCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRvdGFsID0gMDtcbiAgbGV0IGNoZWNrZWQgPSAwO1xuICBmb3IgKGNvbnN0IGxpc3Qgb2YgdGhpcy5jaGVja0xpc3RzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbGlzdCkge1xuICAgICAgdG90YWwrKztcbiAgICAgIGlmIChsaXN0W2tleV0pIGNoZWNrZWQrKztcbiAgICB9XG4gIH1cbiAgaWYgKHRvdGFsID09IDApIHtcbiAgICB0aGlzLnBlcmNlbnQgPSAwO1xuICAgIHJldHVybiAwO1xuICB9XG4gIHRoaXMucGVyY2VudCA9IGNoZWNrZWQgLyB0b3RhbDtcbiAgcmV0dXJuIHRoaXMucGVyY2VudDtcbn07XG5cblRhc2sucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIHRoaXMuY2hhbmdlU3Vicy5wdXNoKGZ1bmMpO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKTtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0LnRhc2tzLmluY2x1ZGVzKHRhc2spKSByZXR1cm4gcHJvamVjdDtcbiAgfVxuICBjb25zb2xlLmVycm9yKFwiUGFyZW50IHByb2plY3Qgbm90IGZvdW5kIGZvciB0YXNrOlwiLCB0YXNrLCBwcm9qZWN0KTtcbn07XG5cblRhc2sucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2hhbmdlU3Vicy5mb3JFYWNoKChmdW5jKSA9PiBmdW5jKCkpO1xuICAvLyB0aGlzLnByb2plY3QuZmlyZSgpO1xuICBnZXRQcm9qZWN0KHRoaXMpLmZpcmUoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MDcpO1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJ0aXRsZSIsInRhc2tzIiwidGhpcyIsImNoYW5nZVN1YnMiLCJwcm90b3R5cGUiLCJzdWIiLCJmdW5jIiwicHVzaCIsImZpcmUiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsIkVWRU5UX1BST0pFQ1RTX1VQREFURSIsInByb2plY3RVcGRhdGVTdWJzY3JpYnRpb25zIiwicHJvamVjdHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmV3UHJvamVjdHMiLCJKU09OIiwicGFyc2UiLCJtYXAiLCJwIiwidGFzayIsIk9iamVjdCIsImFzc2lnbiIsImluY2x1ZGVzIiwiZ2V0UHJvamVjdHMiLCJldmVudCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJUYXNrIiwiZGVzY3JpcHRpb24iLCJwcm9pcml0eSIsImNoZWNrTGlzdHMiLCJkYXRlIiwicHJvamVjdCIsInBlcmNlbnQiLCJjYWxjUGVyY2VudCIsInRvdGFsIiwiY2hlY2tlZCIsImxpc3QiLCJrZXkiLCJlcnJvciIsImdldFByb2plY3QiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9