(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[729],{36870:function(e,n,a){Promise.resolve().then(a.bind(a,49628)),Promise.resolve().then(a.bind(a,26843)),Promise.resolve().then(a.bind(a,24025))},59155:function(e,n,a){"use strict";a.d(n,{l:function(){return l}});var t=a(5862),r=a(67058),s=a(19628),i=a(23891);let l=e=>{let{onSubmit:n,children:a,useFormProps:l,validationSchema:d,fieldErrors:c,formError:o,resetValues:u,className:m,...h}=e,f=(0,s.cI)({...l,...d&&{resolver:(0,i.F)(d)}});return(0,r.useEffect)(()=>{u&&f.reset(u)},[u,f]),(0,t.jsx)("form",{noValidate:!0,onSubmit:f.handleSubmit(n),...h,className:m,children:a(f)})}},95700:function(e,n,a){"use strict";a.d(n,{Z:function(){return c}});var t=a(5862),r=a(61962),s=a(66389),i=a(67058),l=a(94231);let d=e=>{let{separator:n="/",disableCurrent:a=!0,children:r,className:l,separatorClassName:d,separatorVariant:c="default"}=e,o=i.Children.count(r);return(0,t.jsx)("div",{className:(0,s.Z)("inline-flex items-center gap-2.5",l),children:i.Children.map(r,(e,r)=>i.isValidElement(e)?(0,t.jsxs)(t.Fragment,{children:[i.cloneElement(e,{className:(0,s.Z)("text-gray-700 last:text-gray-500 font-medium",a&&"last:pointer-events-none")}),r<o-1&&("default"===c?(0,t.jsx)("span",{className:(0,s.Z)("text-sm text-gray-500",d),children:n}):(0,t.jsx)("span",{className:"h-1 w-1 rounded-full bg-gray-300"}))]}):e)})};function c(e){let{title:n,breadcrumb:a,children:i,className:l}=e;return(0,t.jsx)("header",{className:(0,s.Z)("mb-6 @container xs:-mt-2 lg:mb-7",l),children:(0,t.jsxs)("div",{className:"flex flex-col @lg:flex-row @lg:items-center @lg:justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(r.Title,{as:"h2",className:"mb-2 text-[22px] lg:text-2xl 4xl:text-[26px]",children:n}),(0,t.jsx)(d,{separator:"/",separatorVariant:"default",className:"flex-wrap",children:a.map(e=>(0,t.jsx)(d.Item,{...(null==e?void 0:e.href)&&{href:null==e?void 0:e.href},children:e.name},e.name))})]}),i]})})}d.Item=e=>{let{href:n="#",className:a,children:r}=e;return(0,t.jsx)(l.default,{href:n,role:"button",className:(0,s.Z)("inline-flex items-center gap-2 text-sm",a),children:r})},d.displayName="Breadcrumb"},66389:function(e,n,a){"use strict";a.d(n,{Z:function(){return s}});var t=a(73635),r=a(20757);function s(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return(0,r.m6)((0,t.W)(n))}},17185:function(e,n,a){"use strict";a.d(n,{Z:function(){return s}});var t=a(5862),r=a(61962);function s(e){var n;let{register:a,errors:s}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.Input,{type:"text",size:"lg",label:"Nama Pendidikan",placeholder:"Masukkan pendidikan...",className:"[&>label>span]:font-medium",inputClassName:"text-sm",...a("nama_pendidikan"),error:null===(n=s.nama_pendidikan)||void 0===n?void 0:n.message})})}},24025:function(e,n,a){"use strict";a.d(n,{default:function(){return p}});var t=a(5862),r=a(94231),s=a(97931),i=a(86349),l=a(17185),d=a(95700),c=a(59155),o=a(61962),u=a(7516),m=a(57026),h=a(43139),f=a(65042);let x=[{href:"/admin/dashboard",name:"Dashboard"},{href:"/admin/master/pendidikan",name:"Pendidikan"},{name:"Tambah Pendidikan"}];function p(){let e=(0,u.useRouter)(),[n]=(0,m.fP)(["accessToken"]),a=async a=>{try{let t=n.accessToken,r=await s.Z.post("".concat(f.env.API_URL,"/api/master/pendidikan"),a,{headers:{Authorization:"Bearer ".concat(t)}});201===r.status&&(i.ZP.success("Pendidikan berhasil ditambahkan!"),e.refresh(),e.push("/admin/master/pendidikan"))}catch(e){409===e.response.status?(console.log("error",e.response.data),i.ZP.error("Pendidikan sudah ada")):(console.log("error",e.response.data),i.ZP.error("Terjadi kesalahan saat menambahkan data, silahkan coba lagi!"))}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Z,{title:"Tambah Pendidikan",breadcrumb:x}),(0,t.jsx)(c.l,{validationSchema:h.p,onSubmit:a,children:e=>{let{register:n,formState:{errors:a}}=e;return(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)(l.Z,{register:n,errors:a}),(0,t.jsxs)("div",{className:"flex items-center justify-end gap-3",children:[(0,t.jsx)(o.Button,{type:"submit",size:"lg",children:"Tambah Pendidikan"}),(0,t.jsx)(r.default,{href:"/admin/master/pendidikan",children:(0,t.jsx)(o.Button,{size:"lg",className:" cursor-pointer bg-red-500 hover:bg-red-700 ",children:"Batalkan"})})]})]})}})]})}},43139:function(e,n,a){"use strict";a.d(n,{p:function(){return r}});var t=a(97992);let r=t.z.object({nama_pendidikan:t.z.string().min(2,"Form pendidikan harus diisi!")})},49628:function(e,n,a){"use strict";a.r(n),n.default={src:"/_next/static/media/logo-short.18ca02a8.svg",height:38,width:61,blurWidth:0,blurHeight:0}},26843:function(e,n,a){"use strict";a.r(n),n.default={src:"/_next/static/media/logo.a795e14a.svg",height:28,width:155,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[5472,1209,3547,177,7026,733,1309,158,660,1744],function(){return e(e.s=36870)}),_N_E=e.O()}]);