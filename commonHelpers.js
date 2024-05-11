import"./assets/vendor-9dabe76c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i=new URLSearchParams({key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"}),l=n=>{const r=`${i}&q=${n}`;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},a=document.querySelector(".ul"),u=document.querySelector(".submit-button");u.addEventListener("click",n=>{l("flower").then(r=>{const o=r.hits.map(s=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${s.webformatURL}">
            <img
            class="gallery-image"
            src="${s.webformatURL}"
            alt="cat"
            />
        </a>
    </li>

`).join("");a.innerHTML=o}).catch(r=>{console.log(r.message)})});
//# sourceMappingURL=commonHelpers.js.map
