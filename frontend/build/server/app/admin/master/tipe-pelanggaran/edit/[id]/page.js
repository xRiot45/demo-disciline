(()=>{var e={};e.id=3447,e.ids=[3447],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},39863:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d}),t(48366),t(6447),t(93423),t(20767);var a=t(56126),s=t(51947),n=t(98952),i=t.n(n),o=t(16971),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["admin",{children:["master",{children:["tipe-pelanggaran",{children:["edit",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,48366)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/admin/master/tipe-pelanggaran/edit/[id]/page.tsx"]}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,6447)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/admin/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,93423)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,20767)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/not-found.tsx"]}],c=["/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/admin/master/tipe-pelanggaran/edit/[id]/page.tsx"],p="/admin/master/tipe-pelanggaran/edit/[id]/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin/master/tipe-pelanggaran/edit/[id]/page",pathname:"/admin/master/tipe-pelanggaran/edit/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},37592:(e,r,t)=>{Promise.resolve().then(t.bind(t,80863)),Promise.resolve().then(t.bind(t,42617)),Promise.resolve().then(t.bind(t,86030))},16466:(e,r,t)=>{"use strict";t.d(r,{l:()=>o});var a=t(46496),s=t(47364),n=t(26274),i=t(17066);let o=({onSubmit:e,children:r,useFormProps:t,validationSchema:o,fieldErrors:l,formError:d,resetValues:c,className:p,...u})=>{let m=(0,n.cI)({...t,...o&&{resolver:(0,i.F)(o)}});return(0,s.useEffect)(()=>{c&&m.reset(c)},[c,m]),a.jsx("form",{noValidate:!0,onSubmit:m.handleSubmit(e),...u,className:p,children:r(m)})}},86030:(e,r,t)=>{"use strict";t.d(r,{default:()=>h});var a=t(46496),s=t(88925),n=t(4407),i=t(20056),o=t(57106),l=t(50960),d=t(16466),c=t(13159),p=t(97347),u=t(47364),m=t(82480),g=t(97066);let x={title:"Edit Tipe Pelanggaran",breadcrumb:[{href:"/admin/dashboard",name:"Dashboard"},{href:"/admin/master/tipe-pelanggaran",name:"Tipe Pelanggaran"},{name:"Edit Tipe Pelanggaran"}]};function h(){let e=(0,m.useRouter)(),r=(0,m.usePathname)().split("/").pop(),[t]=(0,p.fP)(["accessToken"]),[h,f]=(0,u.useState)({nama_tipe_pelanggaran:""}),P=async a=>{try{let s=t.accessToken,o={Authorization:`Bearer ${s}`},l=await n.Z.put(`${process.env.API_URL}/api/master/tipe-pelanggaran/${r}`,a,{headers:o});200===l.status&&(i.ZP.success("Tipe pelanggaran berhasil diedit!"),e.refresh(),e.push("/admin/master/tipe-pelanggaran"))}catch(e){409===e.response.status?(console.log(e),i.ZP.error("Tipe pelanggaran sudah ada")):(console.log(e),i.ZP.error("Terjadi kesalahan saat mengubah data, silahkan coba lagi!"))}};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(l.Z,{title:x.title,breadcrumb:x.breadcrumb}),a.jsx(d.l,{onSubmit:P,validationSchema:g.p,useFormProps:{values:{nama_tipe_pelanggaran:h?.nama_tipe_pelanggaran},mode:"onChange"},children:({register:e,formState:{errors:r}})=>(0,a.jsxs)("div",{className:"space-y-3",children:[a.jsx(o.Z,{register:e,errors:r}),(0,a.jsxs)("div",{className:"flex items-center justify-end gap-3",children:[a.jsx(c.Button,{type:"submit",size:"lg",children:"Edit Tipe Pelanggaran"}),a.jsx(s.default,{href:"/admin/master/tipe-pelanggaran",children:a.jsx(c.Button,{size:"lg",className:" cursor-pointer bg-red-500 hover:bg-red-700 ",children:"Batalkan"})})]})]})})]})}},57106:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var a=t(46496),s=t(13159);function n(e){let{register:r,errors:t}=e;return a.jsx(a.Fragment,{children:a.jsx(s.II,{type:"text",size:"lg",label:"Nama Tipe Pelanggaran",placeholder:"Masukkan tipe pelanggaran...",className:"[&>label>span]:font-medium",inputClassName:"text-sm",...r("nama_tipe_pelanggaran"),error:t.nama_tipe_pelanggaran?.message})})}},97066:(e,r,t)=>{"use strict";t.d(r,{p:()=>s});var a=t(85457);let s=a.z.object({nama_tipe_pelanggaran:a.z.string().min(2,"Form tipe pelanggaran harus diisi!")})},48366:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p,metadata:()=>c});var a=t(43859),s=t(73112),n=t(23215);let i=(0,n.createProxy)(String.raw`/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/views/admin/master/tipe-pelanggaran/form/edit/index.tsx`),{__esModule:o,$$typeof:l}=i;i.default;let d=(0,n.createProxy)(String.raw`/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/views/admin/master/tipe-pelanggaran/form/edit/index.tsx#default`),c={...(0,s.B)("Edit Tipe Pelanggaran")};function p(){return a.jsx(a.Fragment,{children:a.jsx(d,{})})}}};var r=require("../../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[2192,2,9e3,4587,1438,9800],()=>t(39863));module.exports=a})();