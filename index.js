import{i as a,S as f}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function h(r){return r.map(({webformatURL:o,largeImageURL:t,tags:n,likes:e,views:s,comments:i,downloads:u})=>`
        <li class = "list-foto">
        <div class="container">
        <a class="foto-link" href="${t}">
            <img width="360px" height="200px" class="foto" src="${o}" alt="${n}">
        </a>
        <div class="text-overlay">
        <div class="overlay-list likes"> 
            <h3 class="likes-text">Likes</h3>
            <p class="likes-text">${e}</p>
        </div>
        <div class="overlay-list views"> 
            <h3 class="views-text">Views</h3>
            <p class="views-text">${s}</p>
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

    `).join("")}const m="47015926-a75abbcadb56cf8cc5bf9ef48";function p(r=""){const o=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const c=document.querySelector(".js-search-form"),l=document.querySelector(".gallery"),d=document.querySelector(".loader");c.addEventListener("submit",g);function y(r){return new Promise(o=>setTimeout(o,r))}async function g(r){r.preventDefault();const{foto:o}=r.currentTarget.elements;if(o.value.trim()==""){a.error({message:"Please enter text to search.",position:"topRight"});return}l.innerHTML="",w(),await y(1e3),p(o.value).then(t=>{console.log("data",t),t.hits.length==0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(l.innerHTML=h(t.hits),v.refresh())}).catch(t=>{console.log("error",t)}).finally(()=>{x()}),c.reset()}let v=new f(".gallery a");function w(){d.style.display="block"}function x(){d.style.display="none"}
//# sourceMappingURL=index.js.map
