"use strict";(self["webpackChunky_media"]=self["webpackChunky_media"]||[]).push([[443],{8767:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("div",[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)},reset:function(e){return e.preventDefault(),t.resetForm.apply(null,arguments)}}},[t._l(t.form,(function({type:s,component:i,label:n},o){return e("b-form-group",{key:o,attrs:{label:n}},[e(`b-form-${i}`,{tag:"component",attrs:{type:s,options:t.form[o].options},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:"",disabled:""}},[t._v(" -- Оберіть одну з опцій -- ")])]},proxy:!0}],null,!0),model:{value:t.form[o].value,callback:function(e){t.$set(t.form[o],"value",e)},expression:"form[key].value"}})],1)})),e("b-button",{staticClass:"m-2",attrs:{type:"submit",variant:"primary"}},[t._v(" Бронювати ")]),e("b-button",{staticClass:"m-2",attrs:{type:"reset",variant:"secondary"}},[t._v(" Відмінити ")])],2)],1)},n=[],o=s(408);const a={showdate:{value:null,label:"Дата",type:"select",component:"select"},daytime:{value:null,label:"Час",type:"select",component:"select"},row:{value:null,label:"Ряд",type:"number",component:"input"},seat:{value:null,label:"Місце",type:"number",component:"input"}};var r={data(){return{form:a}},async mounted(){const t=await this.getSessions(this.movieId);if(t[this.movieId]){const e=t[this.movieId].map((t=>t.showdate));this.$set(this.form.showdate,"options",e)}},computed:{...(0,o.rn)("sessions",["sessions","loading"]),movieId(){return this.$route.params?.id}},methods:{...(0,o.nv)("sessions",["getSessions"]),...(0,o.nv)("booking",["bookTicket"]),async submitForm(){const t=Object.entries(this.form).map((([t,e])=>[t,e.value])),e=Object.fromEntries(t);this.bookTicket({...e,movie_id:this.movieId}),this.resetForm()},resetForm(){Object.keys(this.form).forEach((t=>{this.form[t].value=null}))}},watch:{"form.showdate.value":{handler(t){if(t){const e=this.sessions[this.movieId].find((({showdate:e})=>e===t)),s=e?.daytime.split(";");this.$set(this.form.daytime,"options",s)}},deep:!0}}},l=r,u=s(1001),c=(0,u.Z)(l,i,n,!1,null,"7cf6a3f2",null),m=c.exports},1036:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Деталі фільму")]),e("b-card",[e("b-img",{attrs:{src:t.movie.image,height:"300px"}}),e("h5",{staticClass:"mt-0"},[t._v(t._s(t.movie.name))]),e("div",{domProps:{innerHTML:t._s(t.movie.description)}}),e("div",{staticClass:"additional",domProps:{innerHTML:t._s(t.movie.additional)}})],1)],1)},n=[],o=s(408),a={async mounted(){const{id:t}=this.$route.params;this.getMovie(t)},computed:{...(0,o.rn)("movies",["movie","loading"])},methods:{...(0,o.nv)("movies",["getMovie"])}},r=a,l=s(1001),u=(0,l.Z)(r,i,n,!1,null,null,null),c=u.exports},6245:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Список фільмів")]),e("section",{staticClass:"pb-4"},[e("b-form-group",{attrs:{label:"Genres:"},scopedSlots:t._u([{key:"default",fn:function({ariaDescribedby:s}){return[e("b-form-checkbox-group",{attrs:{id:"checkbox-group-1",options:t.options,"aria-describedby":s,name:"flavour-1"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})]}}])})],1),e("section",{staticClass:"pb-4"},[e("b-form-input",{attrs:{placeholder:"Enter movie name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t.loading?e("section",{staticClass:"d-flex"},[e("b-spinner",{staticClass:"mx-auto my-4",staticStyle:{width:"3rem",height:"3rem"}})],1):e("section",{staticClass:"grid pb-4"},t._l(t.movies,(function(s){return e("b-card",{key:s.id,staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:s.name,"img-src":s.image,"img-alt":s.name,"img-top":"",tag:"article"}},[e("b-card-text",[e("div",{domProps:{innerHTML:t._s(s.description)}})]),e("b-button",{attrs:{to:`/movies/${s.id}`,variant:"primary"}},[t._v(" Деталі ")])],1)})),1)])},n=[],o=(s(6229),s(7330),s(2062),s(408)),a={data(){return{selected:[],name:"",options:[{text:"ACTION",value:0},{text:"ADVENTURES",value:1},{text:"COMEDY",value:2},{text:"DRAMA",value:3},{text:"HORROR",value:4},{text:"WESTERNS",value:5}]}},computed:{...(0,o.rn)("movies",["movies","loading"])},async mounted(){this.getFilteredList()},methods:{...(0,o.nv)({getFilteredListAction:"movies/getMovies"}),async getFilteredList(){const t={name:this.name};this.selected.forEach(((e,s)=>{t[`genres[${s}]`]=e}));const e=new URLSearchParams(t);this.getFilteredListAction(e)}},watch:{selected(){this.getFilteredList()},name(){this.getFilteredList()}}},r=a,l=s(1001),u=(0,l.Z)(r,i,n,!1,null,"1f61d382",null),c=u.exports},5607:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Список сеансів")]),t.loading?e("section",{staticClass:"d-flex"},[e("b-spinner",{staticClass:"mx-auto my-4",staticStyle:{width:"3rem",height:"3rem"}})],1):e("section",t._l(t.sessions,(function(t,s){return e("MovieSession",{key:s,attrs:{"movie-id":s,dates:t}})})),1)])},n=[],o=function(){var t=this,e=t._self._c;return e("div",[e("b-list-group",[e("b-list-group-item",{staticClass:"d-flex align-items-center my-2"},[e("b-avatar",{staticClass:"p-3",attrs:{size:"10rem",variant:"info",src:t.movie.image}}),e("div",{staticClass:"pb-2"},[e("h2",{staticClass:"mr-auto"},[t._v(t._s(t.movie.name))]),t._l(t.dates,(function({daytime:s,showdate:i},n){return e("div",{key:n,staticClass:"pb-2"},[e("b-button",[t._v(t._s(i))]),e("span",[t._v(t._s(s))])],1)}))],2),e("b-button",{staticClass:"mx-auto",attrs:{variant:"outline-primary",to:`/booking/${t.movieId}`}},[t._v("Бронювати")])],1)],1)],1)},a=[],r=s(408),l={props:{movieId:{type:String,default:"0"},dates:{type:Array,default:()=>[]}},computed:{...(0,r.rn)("movies",["movies"]),movie(){return this.movies.find((({id:t})=>t===Number(this.movieId)))}}},u=l,c=s(1001),m=(0,c.Z)(u,o,a,!1,null,"d89899a6",null),d=m.exports,v={components:{MovieSession:d},async mounted(){this.movies?.length||await this.getMovies(),this.getSessions()},computed:{...(0,r.rn)("sessions",["sessions","loading"]),...(0,r.rn)("movies",["movies"])},methods:{...(0,r.nv)("sessions",["getSessions"]),...(0,r.nv)("movies",["getMovies"])}},f=v,p=(0,c.Z)(f,i,n,!1,null,"7538fdf9",null),h=p.exports},648:function(t,e,s){var i=s(1694),n=s(614),o=s(4326),a=s(5112),r=a("toStringTag"),l=Object,u="Arguments"==o(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(s){}};t.exports=i?o:function(t){var e,s,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(s=c(e=l(t),r))?s:u?o(e):"Object"==(i=o(e))&&n(e.callee)?"Arguments":i}},7045:function(t,e,s){var i=s(6339),n=s(3070);t.exports=function(t,e,s){return s.get&&i(s.get,e,{getter:!0}),s.set&&i(s.set,e,{setter:!0}),n.f(t,e,s)}},1694:function(t,e,s){var i=s(5112),n=i("toStringTag"),o={};o[n]="z",t.exports="[object z]"===String(o)},1340:function(t,e,s){var i=s(648),n=String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return n(t)}},6229:function(t,e,s){var i=s(8052),n=s(1702),o=s(1340),a=s(8053),r=URLSearchParams,l=r.prototype,u=n(l.append),c=n(l["delete"]),m=n(l.forEach),d=n([].push),v=new r("a=1&a=2&b=3");v["delete"]("a",1),v["delete"]("b",void 0),v+""!=="a=2"&&i(l,"delete",(function(t){var e=arguments.length,s=e<2?void 0:arguments[1];if(e&&void 0===s)return c(this,t);var i=[];m(this,(function(t,e){d(i,{key:e,value:t})})),a(e,1);var n,r=o(t),l=o(s),v=0,f=0,p=!1,h=i.length;while(v<h)n=i[v++],p||n.key===r?(p=!0,c(this,n.key)):f++;while(f<h)n=i[f++],n.key===r&&n.value===l||u(this,n.key,n.value)}),{enumerable:!0,unsafe:!0})},7330:function(t,e,s){var i=s(8052),n=s(1702),o=s(1340),a=s(8053),r=URLSearchParams,l=r.prototype,u=n(l.getAll),c=n(l.has),m=new r("a=1");!m.has("a",2)&&m.has("a",void 0)||i(l,"has",(function(t){var e=arguments.length,s=e<2?void 0:arguments[1];if(e&&void 0===s)return c(this,t);var i=u(this,t);a(e,1);var n=o(s),r=0;while(r<i.length)if(i[r++]===n)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(t,e,s){var i=s(9781),n=s(1702),o=s(7045),a=URLSearchParams.prototype,r=n(a.forEach);i&&!("size"in a)&&o(a,"size",{get:function(){var t=0;return r(this,(function(){t++})),t},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=about.f17db2d9.js.map