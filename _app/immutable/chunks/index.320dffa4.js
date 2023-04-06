import{U as p}from"./index.8d99dbfa.js";function $(t){const n=t-1;return n*n*n+1}function U(t){return--t*t*t*t*t+1}function q(t,{delay:n=0,duration:a=400,easing:e=$,x:i=0,y:f=0,opacity:s=0}={}){const o=getComputedStyle(t),r=+o.opacity,u=o.transform==="none"?"":o.transform,y=r*(1-s),[m,c]=p(i),[d,_]=p(f);return{delay:n,duration:a,easing:e,css:(l,g)=>`
			transform: ${u} translate(${(1-l)*m}${c}, ${(1-l)*d}${_});
			opacity: ${r-y*g}`}}function C(t,{delay:n=0,duration:a=400,easing:e=$,start:i=0,opacity:f=0}={}){const s=getComputedStyle(t),o=+s.opacity,r=s.transform==="none"?"":s.transform,u=1-i,y=o*(1-f);return{delay:n,duration:a,easing:e,css:(m,c)=>`
			transform: ${r} scale(${1-u*c});
			opacity: ${o-y*c}
		`}}export{q as f,U as q,C as s};
