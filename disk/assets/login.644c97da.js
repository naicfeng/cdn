import{j as u,K as c,h as d,r as m,R as e,C as p,V as g,E as b,G as f,I as E,D as h}from"./vendor.a586f42d.js";import{k as C,b as k}from"./index.5895d29d.js";import"./index.cebb5bb7.js";const x=()=>{const{t}=u(),l=c(),o=d(),[r,i]=m.exports.useState(""),n=()=>{C(r),k.post("login").then(s=>{const a=s.data;a.code===200?(o({title:t(a.message),status:"success",duration:3e3,isClosable:!0}),l.push("settings/0")):o({title:t(a.message),status:"error",duration:3e3,isClosable:!0})})};return e.createElement(p,{p:"4",h:"full"},e.createElement(g,{w:{base:"full",md:"50%"}},e.createElement(b,{isRequired:!0},e.createElement(f,null,t("password")),e.createElement(E,{type:"password",value:r,onChange:s=>i(s.target.value),onKeyUp:s=>{s.key==="Enter"&&n()}})),e.createElement(h,{onClick:n},t("login"))))};export{x as default};
