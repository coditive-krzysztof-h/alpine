import{u as m}from"./asyncData.fc035bcb.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.a60ad5f9.js";import f from"./Ellipsis.83443df1.js";import _ from"./ComponentPlaygroundData.3f4801dc.js";import"./TabsHeader.f841e1b3.js";import"./ComponentPlaygroundProps.7b030aa8.js";import"./ProseH4.2ca0012b.js";import"./ProseCodeInline.4adb84fe.js";import"./Badge.628ba497.js";import"./MDCSlot.8ef0bc23.js";import"./slot.acee0bfe.js";import"./ProseP.c0f79789.js";import"./index.69a23384.js";import"./ComponentPlaygroundSlots.vue.5429f466.js";import"./ComponentPlaygroundTokens.vue.3706819a.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-c6ef11bc"]]);export{V as default};