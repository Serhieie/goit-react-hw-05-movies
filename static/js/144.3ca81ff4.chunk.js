"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[144],{524:(e,t,a)=>{a.d(t,{$h:()=>s,YM:()=>l,_n:()=>o});const o="https://api.themoviedb.org/3/",s="api_key=713cb35a39a71866f61c58ef1cecbe50",l={method:"GET",params:{language:"en-US",page:"1",include_adult:!1,per_page:"20"},headers:{accept:"application/json"}}},936:(e,t,a)=>{a.d(t,{J:()=>s});var o=a(85);a(462);const s=()=>{o.Am.error("Sorry but this element is not full",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}},714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var o=a(791),s=a(294),l=a(87),r=a(689),n=a(524),c=a(936),i=a(763),d=a(184);function m(e){let{visibleMovies:t}=e;const a=(0,r.TH)();return(0,d.jsx)("ul",{className:"grid md:grid-cols-2 sm2:grid-cols-4 grid-cols-5 w-11/12 mx-auto gap-3 min-h-[450px] h-full",children:t.filter((e=>e.poster_path)).map((e=>{var t,o;return(0,d.jsx)("li",{children:(0,d.jsxs)(l.rU,{className:"flex flex-col gap-1",to:"/movies/".concat(e.id),state:{from:a},children:[(0,d.jsx)("img",{loading:"lazy",className:"rounded-sm overflow-hidden object-cover lg:max-h-[190px] max-h-[320px] md:max-h-[300px]",src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),alt:null!==(t=e.title)&&void 0!==t?t:e.name,width:250}),(0,d.jsx)("h3",{className:"text-xs md:text-base",children:null!==(o=e.title)&&void 0!==o?o:e.name})]})},e.id)}))})}function x(e){let{movieId:t}=e;return(0,d.jsx)(d.Fragment,{children:!t&&(0,d.jsx)("div",{className:"transform -skew-y-6 w-10/12",children:(0,d.jsxs)("p",{className:"text-[200px] text-blue-100 text-center font-h1Font leading-[0.65] md:text-[100px] md:mt-12 sm2:text-[160px]",children:["Enjoy"," ",(0,d.jsx)("span",{className:"bg-gradient-to-r from-blue-200 to-blue-800 text-transparent bg-clip-text z-100",children:"your"})," ","choise"]})})})}function u(){const[e,t]=(0,o.useState)([]),[a,u]=(0,l.lr)(),h=(0,r.TH)(),p=a.get("movieId")||"";(0,o.useEffect)((()=>{if(!p)return;const e=(0,i.debounce)((async()=>{try{const e=await s.Z.get("".concat(n._n,"search/movie?query=").concat(p,"&").concat(n.$h),n.YM);t(e.data.results)}catch(e){(0,c.J)()}}),300);return e(),()=>e.cancel()}),[p]);const g=(0,o.useMemo)((()=>e.filter((e=>e.title.toLowerCase().includes(p.toLowerCase())))),[e,p]);return(0,d.jsxs)("section",{className:"mx-auto mt-28 flex justify-center items-center flex-col bg-gradient-to-t via-blue-950 from-black to-black",children:[(0,d.jsx)("h2",{className:"font-h1Font text-4xl mb-2 text-blue-100 md:text-2xl",children:"Find your Movie"}),(0,d.jsx)("input",{className:"bg-blue-200 px-6 py-2 text-blue-900 md:mb-6 mb-16 w-full max-w-[400px] placeholder:text-blue-900 placeholder:opacity-60 placeholder:font-thin outline-none rounded-sm text-xl md:max-w-[260px]",type:"text",placeholder:"Enter movie title",value:p,onChange:e=>{const t=e.target.value;u({movieId:t})}}),(0,d.jsx)(x,{movieId:p}),(0,d.jsx)(m,{visibleMovies:g,location:h})]})}}}]);
//# sourceMappingURL=144.3ca81ff4.chunk.js.map