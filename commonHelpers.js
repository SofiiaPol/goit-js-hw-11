import{S as i,i as c}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const l="https://pixabay.com",u="/api/",m={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},f=o=>{const t=new URLSearchParams(m);return t.append("q",o),t},g=o=>{const t=`${l}${u}?${f(o)}`;return fetch(t).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},h=o=>{const t=o.map(r=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
            <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
            />
        </a>
    </li>

`).join("");document.querySelector(".gallery").innerHTML=t},d=document.querySelector(".search-form"),p=o=>{o.preventDefault();const t=o.target;console.log(t.elements),console.log(t.elements.searchInput.value),g(t.elements.searchInput.value).then(r=>{r.totalHits===0?w("Sorry, there are no images matching your search query. Please try again!"):(h(r.hits),new i(".gallery a"))}).catch(r=>{y(r.message)})};d.addEventListener("submit",p);function y(o){c.show({title:"Error",message:o,messageColor:"white",backgroundColor:"tomato"})}function w(o){c.show({title:"Message",message:o,messageColor:"white",backgroundColor:"teal"})}
//# sourceMappingURL=commonHelpers.js.map
