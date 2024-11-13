(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{94409:function(e,t,a){Promise.resolve().then(a.bind(a,49628)),Promise.resolve().then(a.bind(a,26843)),Promise.resolve().then(a.bind(a,58473))},43272:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(5862),n=a(61962);function r(e){let{strokeWidth:t,...a}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:null!=t?t:1.5,stroke:"currentColor",...a,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}var i=a(51537);function l(e){let{title:t,description:a,onDelete:l}=e;return(0,s.jsxs)(n.Popover,{placement:"left",children:[(0,s.jsx)(n.Popover.Trigger,{children:(0,s.jsx)(n.ActionIcon,{size:"sm",variant:"outline","aria-label":"Delete Item",className:"cursor-pointer hover:!border-gray-900 hover:text-gray-700",children:(0,s.jsx)(r,{className:"h-4 w-4"})})}),(0,s.jsx)(n.Popover.Content,{className:"z-0 ",children:e=>{let{setOpen:r}=e;return(0,s.jsxs)("div",{className:"w-56 pb-2 pt-1 text-left rtl:text-right",children:[(0,s.jsxs)(n.Title,{as:"h6",className:"mb-0.5 flex items-start text-sm text-gray-700 sm:items-center",children:[(0,s.jsx)(i.VeE,{className:"me-1 h-[17px] w-[17px]"})," ",t]}),(0,s.jsx)(n.Text,{className:"mb-2 leading-relaxed text-gray-500",children:a}),(0,s.jsxs)("div",{className:"flex items-center justify-end",children:[(0,s.jsx)(n.Button,{size:"sm",className:"me-1.5 h-7 bg-red-500 hover:bg-red-700",onClick:()=>{l(),r(!1)},children:"Hapus"}),(0,s.jsx)(n.Button,{size:"sm",variant:"outline",className:"h-7",onClick:()=>r(!1),children:"Batal"})]})]})}})]})}},58473:function(e,t,a){"use strict";a.d(t,{default:function(){return b}});var s=a(5862),n=a(97931),r=a(61917),i=a(20465),l=a(51537),c=a(94231),o=a(92830),d=a(43272),u=a(11897),m=a(61962);let h=e=>{let{onDeleteItem:t}=e;return[{title:(0,s.jsx)(u.qN,{title:"No"}),width:50,dataIndex:"index",key:"index",render:(e,t,a)=>(0,s.jsx)(m.Text,{className:"text-sm",children:a+1})},{title:(0,s.jsx)(u.qN,{title:"Nama Status"}),dataIndex:"nama_status",key:"nama_status",render:e=>(0,s.jsx)(m.Text,{className:"text-sm",children:e})},{title:(0,s.jsx)(u.qN,{title:"Aksi"}),dataIndex:"id",width:20,key:"id",render:e=>(0,s.jsxs)("div",{className:"flex items-center justify-end gap-3 pe-4",children:[(0,s.jsx)(m.Tooltip,{size:"sm",content:"Edit Status",placement:"top",color:"invert",children:(0,s.jsx)(c.default,{href:"/admin/master/status/edit/".concat(e),children:(0,s.jsx)(m.ActionIcon,{size:"sm",variant:"outline","aria-label":"Edit Status",children:(0,s.jsx)(o.Z,{className:"h-4 w-4"})})})}),(0,s.jsx)(d.Z,{title:"Hapus Status",description:"Apakah kamu yakin ingin mengapus status ini? ",onDelete:()=>t(e)})]})}]},x=[{href:"/admin/dashboard",name:"Dashboard"},{name:"Status"}];function j(e){let{data:t,onDeleteData:a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Z,{title:"Status",breadcrumb:x,data:t,urlButton:"/admin/master/status/tambah",buttonText:"Tambah Status",iconText:(0,s.jsx)(l.$eR,{className:"me-1.5 h-[17px] w-[17px]"}),children:(0,s.jsx)(i.Z,{title:"Data Status",variant:"modern",data:t,getColumns:h,onDelete:a,enablePagination:!0,searchPlaceholder:"Cari status...",className:"min-h-[480px] [&_.widget-card-header]:items-center [&_.widget-card-header_h5]:font-medium"})})})}var f=a(86349),v=a(7516),p=a(57026),g=a(67058),N=a(65042);function b(){let e=(0,v.useRouter)(),[t]=(0,p.fP)(["accessToken"]),[a,r]=(0,g.useState)([]),[i,l]=(0,g.useState)(!1),[c,o]=(0,g.useState)(!1);(0,g.useEffect)(()=>{(async()=>{l(!0);try{var e;let a=t.accessToken,s=await n.Z.get("".concat(N.env.API_URL,"/api/master/status"),{headers:{Authorization:"Bearer ".concat(a)}});r(null==s?void 0:null===(e=s.data)||void 0===e?void 0:e.data),l(!1)}catch(e){console.error("Error fetching status data: ",e)}finally{l(!1)}})()},[t.accessToken]);let d=async a=>{l(!0);try{let s=t.accessToken,i=await n.Z.delete("".concat(N.env.API_URL,"/api/master/status/").concat(a),{headers:{Authorization:"Bearer ".concat(s)}});200===i.status&&(f.ZP.success("Status berhasil dihapus!"),r(e=>e.filter(e=>e.id!==a)),e.refresh(),o(!0))}catch(e){console.log("Error deleting data: ",e),f.ZP.error("Terjadi kesalahan saat menghapus data, silahkan coba lagi!")}finally{l(!1)}};return i?(0,s.jsx)("div",{className:"mx-auto flex justify-center ",children:(0,s.jsx)(m.Title,{as:"h6",className:"-me-2 mt-4 font-medium text-gray-500",children:"Loading..."})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(j,{data:a,onDeleteData:d})})}}},function(e){e.O(0,[5472,6782,1209,3547,177,7026,733,522,5079,158,660,1744],function(){return e(e.s=94409)}),_N_E=e.O()}]);