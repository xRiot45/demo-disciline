(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1755],{94642:function(e,a,t){Promise.resolve().then(t.bind(t,49628)),Promise.resolve().then(t.bind(t,26843)),Promise.resolve().then(t.bind(t,36687))},43272:function(e,a,t){"use strict";t.d(a,{Z:function(){return l}});var n=t(5862),s=t(61962);function r(e){let{strokeWidth:a,...t}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:null!=a?a:1.5,stroke:"currentColor",...t,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}var i=t(51537);function l(e){let{title:a,description:t,onDelete:l}=e;return(0,n.jsxs)(s.Popover,{placement:"left",children:[(0,n.jsx)(s.Popover.Trigger,{children:(0,n.jsx)(s.ActionIcon,{size:"sm",variant:"outline","aria-label":"Delete Item",className:"cursor-pointer hover:!border-gray-900 hover:text-gray-700",children:(0,n.jsx)(r,{className:"h-4 w-4"})})}),(0,n.jsx)(s.Popover.Content,{className:"z-0 ",children:e=>{let{setOpen:r}=e;return(0,n.jsxs)("div",{className:"w-56 pb-2 pt-1 text-left rtl:text-right",children:[(0,n.jsxs)(s.Title,{as:"h6",className:"mb-0.5 flex items-start text-sm text-gray-700 sm:items-center",children:[(0,n.jsx)(i.VeE,{className:"me-1 h-[17px] w-[17px]"})," ",a]}),(0,n.jsx)(s.Text,{className:"mb-2 leading-relaxed text-gray-500",children:t}),(0,n.jsxs)("div",{className:"flex items-center justify-end",children:[(0,n.jsx)(s.Button,{size:"sm",className:"me-1.5 h-7 bg-red-500 hover:bg-red-700",onClick:()=>{l(),r(!1)},children:"Hapus"}),(0,n.jsx)(s.Button,{size:"sm",variant:"outline",className:"h-7",onClick:()=>r(!1),children:"Batal"})]})]})}})]})}},36687:function(e,a,t){"use strict";t.d(a,{default:function(){return b}});var n=t(5862),s=t(97931),r=t(61917),i=t(20465),l=t(94231),c=t(92830),o=t(43272),m=t(11897),d=t(61962);let h=e=>{let{onDeleteItem:a}=e;return[{title:(0,n.jsx)(m.qN,{title:"No"}),width:50,dataIndex:"index",key:"index",render:(e,a,t)=>(0,n.jsx)(d.Text,{className:"text-sm",children:t+1})},{title:(0,n.jsx)(m.qN,{title:"Nama Agama"}),dataIndex:"nama_agama",key:"nama_agama",render:e=>(0,n.jsx)(d.Text,{className:"text-sm",children:e})},{title:(0,n.jsx)(m.qN,{title:"Aksi"}),dataIndex:"id",width:20,key:"id",render:e=>(0,n.jsxs)("div",{className:"flex items-center justify-end gap-3 pe-4",children:[(0,n.jsx)(d.Tooltip,{size:"sm",content:"Edit Agama",placement:"top",color:"invert",children:(0,n.jsx)(l.default,{href:"/admin/master/agama/edit/".concat(e),children:(0,n.jsx)(d.ActionIcon,{size:"sm",variant:"outline","aria-label":"Edit Agama",children:(0,n.jsx)(c.Z,{className:"h-4 w-4"})})})}),(0,n.jsx)(o.Z,{title:"Hapus Agama",description:"Apakah kamu yakin ingin mengapus agama ini? ",onDelete:()=>a(e)})]})}]};var u=t(51537);let x=[{href:"/admin/dashboard",name:"Dashboard"},{name:"Agama"}];function g(e){let{data:a,onDeleteData:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z,{title:"Agama",breadcrumb:x,data:a,urlButton:"/admin/master/agama/tambah",buttonText:"Tambah Agama",iconText:(0,n.jsx)(u.$eR,{className:"me-1.5 h-[17px] w-[17px]"}),children:(0,n.jsx)(i.Z,{title:"Data Agama",variant:"modern",data:a,getColumns:h,onDelete:t,enablePagination:!0,searchPlaceholder:"Cari agama...",className:"min-h-[480px] [&_.widget-card-header]:items-center [&_.widget-card-header_h5]:font-medium"})})})}var j=t(86349),f=t(7516),v=t(57026),p=t(67058),N=t(65042);function b(){let e=(0,f.useRouter)(),[a]=(0,v.fP)(["accessToken"]),[t,r]=(0,p.useState)([]),[i,l]=(0,p.useState)(!1),[c,o]=(0,p.useState)(!1);(0,p.useEffect)(()=>{(async()=>{l(!0);try{var e;let t=a.accessToken,n=await s.Z.get("".concat(N.env.API_URL,"/api/master/agama"),{headers:{Authorization:"Bearer ".concat(t)}});r(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.data),l(!1)}catch(e){console.error("Error fetching agama data: ",e)}finally{l(!1)}})()},[a.accessToken]);let m=async t=>{l(!0);try{let n=a.accessToken,i=await s.Z.delete("".concat(N.env.API_URL,"/api/master/agama/").concat(t),{headers:{Authorization:"Bearer ".concat(n)}});200===i.status&&(j.ZP.success("Agama berhasil dihapus!"),r(e=>e.filter(e=>e.id!==t)),e.refresh(),o(!0))}catch(e){console.log("Error deleting data: ",e),j.ZP.error("Terjadi kesalahan saat menghapus data, silahkan coba lagi!")}finally{l(!1)}};return i?(0,n.jsx)("div",{className:"mx-auto flex justify-center ",children:(0,n.jsx)(d.Title,{as:"h6",className:"-me-2 mt-4 font-medium text-gray-500",children:"Loading..."})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(g,{data:t,onDeleteData:m})})}}},function(e){e.O(0,[5472,6782,1209,3547,177,7026,733,522,5079,158,660,1744],function(){return e(e.s=94642)}),_N_E=e.O()}]);