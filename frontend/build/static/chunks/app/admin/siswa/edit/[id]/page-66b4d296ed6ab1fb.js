(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4935],{73570:function(a,e,n){Promise.resolve().then(n.bind(n,49628)),Promise.resolve().then(n.bind(n,26843)),Promise.resolve().then(n.bind(n,8873))},8873:function(a,e,n){"use strict";n.d(e,{default:function(){return p}});var i=n(5862),s=n(94231),l=n(97931),t=n(86349),r=n(60311),o=n(95700),d=n(59155),c=n(61962),u=n(57026),h=n(67058),m=n(7516),v=n(15876),_=n(65042);let g=[{href:"/admin/dashboard",name:"Dashboard"},{href:"/admin/siswa",name:"Siswa"},{name:"Edit Siswa"}];function p(){var a,e;let n=(0,m.useRouter)(),p=(0,m.usePathname)().split("/").pop(),[w]=(0,u.fP)(["accessToken"]),[f,k]=(0,h.useState)({nama_lengkap:"",nis:"",nisn:"",tanggal_lahir:new Date,tempat_lahir:"",jenis_kelamin:"",agama:{id:""},kelas:{id:""},nama_wali:"",no_telp_wali:"",alamat:""});(0,h.useEffect)(()=>{(async()=>{try{var a;let e=w.accessToken,n=await l.Z.get("".concat(_.env.API_URL,"/api/siswa/").concat(p),{headers:{Authorization:"Bearer ".concat(e)}});k(null==n?void 0:null===(a=n.data)||void 0===a?void 0:a.data)}catch(a){console.log(a)}})()},[w.accessToken,p]);let b=async a=>{try{let e=w.accessToken,i=await l.Z.patch("".concat(_.env.API_URL,"/api/siswa/").concat(p),a,{headers:{Authorization:"Bearer ".concat(e)}});200===i.status&&(t.ZP.success("Siswa berhasil diedit!"),n.refresh(),n.push("/admin/siswa"))}catch(a){409===a.response.status?t.ZP.error("Siswa sudah ada"):t.ZP.error("Terjadi kesalahan saat mengubah data, silahkan coba lagi!")}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{title:"Edit Siswa",breadcrumb:g}),(0,i.jsx)(d.l,{onSubmit:b,resetValues:!1,validationSchema:v.p,useFormProps:{values:{nama_lengkap:null==f?void 0:f.nama_lengkap,nis:null==f?void 0:f.nis,nisn:null==f?void 0:f.nisn,tanggal_lahir:(null==f?void 0:f.tanggal_lahir)?new Date(f.tanggal_lahir):null==f?void 0:f.tanggal_lahir,tempat_lahir:null==f?void 0:f.tempat_lahir,jenis_kelamin:null==f?void 0:f.jenis_kelamin,agamaId:null==f?void 0:null===(a=f.agama)||void 0===a?void 0:a.id,kelasId:null==f?void 0:null===(e=f.kelas)||void 0===e?void 0:e.id,nama_wali:null==f?void 0:f.nama_wali,no_telp_wali:null==f?void 0:f.no_telp_wali,alamat:null==f?void 0:f.alamat},mode:"onChange"},children:a=>{let{register:e,control:n,formState:{errors:l}}=a;return(0,i.jsxs)("div",{className:"space-y-3",children:[(0,i.jsx)(r.Z,{control:n,register:e,errors:l}),(0,i.jsxs)("div",{className:"flex items-center justify-end gap-3",children:[(0,i.jsx)(c.Button,{type:"submit",size:"lg",children:"Edit Siswa"}),(0,i.jsx)(s.default,{href:"/admin/siswa",children:(0,i.jsx)(c.Button,{size:"lg",className:" cursor-pointer bg-red-500 hover:bg-red-700 ",children:"Batalkan"})})]})]})}})]})}}},function(a){a.O(0,[7461,5472,6782,1209,3547,177,7026,733,1309,2101,719,158,660,1744],function(){return a(a.s=73570)}),_N_E=a.O()}]);