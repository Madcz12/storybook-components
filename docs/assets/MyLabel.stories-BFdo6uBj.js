import{j as d}from"./jsx-runtime-D_zvdyIk.js";const t=({label:o,size:s="h3",AllCaps:n=!1,color:c="text-tertiary",fontColor:i="#ddd"})=>d.jsx("span",{className:`${s} ${c}`,style:{color:i},children:n?o:o.toUpperCase()});t.__docgenInfo={description:`allCaps: boolean,\r
color: 'text-primary | 'text-secondary' | 'text-tertiary',\r
fontColor: string, texto del span`,methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label size",defaultValue:{value:"'h3'",computed:!1}},AllCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"Label color",defaultValue:{value:"'text-tertiary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"font color",defaultValue:{value:"'#ddd'",computed:!1}}}};const m={title:"UI/labels/MyLabel",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},color:{control:"color"}}},e={args:{label:"Basic Label",size:"normal"}},a={args:{label:"All Caps Label",size:"h3"}},r={args:{label:"Secondary Label",color:"text-secondary"}},l={args:{label:"Custom Color Label",fontColor:"#e81c01"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label',
    size: "normal"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    size: "h3"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: "#e81c01"
  }
}`,...l.parameters?.docs?.source}}};const u=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,u as __namedExportsOrder,m as default};
