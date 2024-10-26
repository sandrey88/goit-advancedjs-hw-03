import{S as d,i as m}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="46726016-b290741f0a1b76ad16aa31499";function y(l){const r=new URLSearchParams({key:f,q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r.toString()}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let c;function g(l){const r=l.map(({tags:o,webformatURL:s,largeImageURL:e,likes:t,views:i,comments:a,downloads:n})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e}">
            <img class="gallery-img" src="${s}" alt="${o}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${t}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${i}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${a}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${n}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");h(r)}function h(l){const r=document.querySelector("ul.images-div");r.innerHTML=l,c?c.refresh():c=new d(".images-div a",{captionsData:"alt",captionDelay:250})}const p=document.querySelector("button[type=submit]"),b=document.querySelector(".images-div"),u=document.querySelector(".loaderClass");p.addEventListener("click",S);function S(l){l.preventDefault();let r=document.querySelector('input[name="search"]'),o=document.querySelector(".not-found-img"),s=r.value.trim();if(s<=0){m.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}u.style.display="flex",y(s).then(e=>{if(e.total===0){b.innerHTML="",o.innerHTML=`Results for query <span>${s}</span> not found!`,m.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"white",titleColor:"yellow"});return}g(e.hits);const t=document.querySelectorAll(".gallery-img"),i=Array.from(t).map(a=>new Promise(n=>{a.onload=n,a.onerror=n}));Promise.all(i).then(()=>{console.log(i)}).catch(a=>{u.innerHTML="",console.error(a)})}).catch(console.error).finally(()=>{console.log("completed"),u.style.display="none"}),r.value=""}
//# sourceMappingURL=index.js.map
