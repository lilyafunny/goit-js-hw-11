import{i as a,S as f}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(r){return r.map(({webformatURL:s,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:u})=>`
        <li class = "list-foto">
        <div class="container">
        <a class="foto-link" href="${o}">
            <img width="360px" height="200px" class="foto" src="${s}" alt="${n}">
        </a>
        <div class="text-overlay">
        <div class="overlay-list likes"> 
            <h3 class="likes-text">Likes</h3>
            <p class="likes-text">${e}</p>
        </div>
        <div class="overlay-list views"> 
            <h3 class="views-text">Views</h3>
            <p class="views-text">${t}</p>
        </div>
        <div class="overlay-list comments"> 
            <h3 class="comments-text">Comments</h3>
            <p class="comments-text">${i}</p>
        </div>
        <div class="overlay-list downloads"> 
            <h3 class="downloads-text">Downloads</h3>
            <p class="downloads-text">${u}</p>
        </div>
        </div>    
        </div>
        </li>

    `).join("")}const m="47015926-a75abbcadb56cf8cc5bf9ef48";function p(r=""){const s=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}const c=document.querySelector(".js-search-form"),l=document.querySelector(".gallery"),d=document.querySelector(".loader");c.addEventListener("submit",g);function y(r){return new Promise(s=>setTimeout(s,r))}async function g(r){r.preventDefault();const{foto:s}=r.currentTarget.elements;if(s.value.trim()==""){a.error({message:"Please enter text to search.",position:"topRight"});return}l.innerHTML="",w(),await y(1e3),p(s.value).then(o=>{o.hits.length==0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(l.innerHTML=h(o.hits),v.refresh())}).catch(o=>{console.log("error",o)}).finally(()=>{x()}),c.reset()}let v=new f(".gallery a");function w(){d.style.display="block"}function x(){d.style.display="none"}
//# sourceMappingURL=index.js.map
