import{X as a,e,Z as r}from"./index.cd5b3688.js";import{M as n}from"./Markdown.cc1c2fd1.js";const o=async()=>await(await fetch("https://jsd.nn.ci/gh/alist-org/alist@main/README.md")).text(),c=()=>{const[t]=a(o);return e(r,{get loading(){return t.loading},get children(){return e(n,{get children(){return t()}})}})};export{c as default};
