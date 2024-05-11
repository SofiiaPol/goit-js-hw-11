import"./assets/vendor-9dabe76c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=new URLSearchParams({key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"}),a=s=>{const o=`${i}&q=${s}`;return fetch(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},l=document.querySelector(".ul");a("flower").then(s=>{const o=s.hits.map(r=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${r.webformatURL}">
            <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="cat"
            />
        </a>
    </li>

`).join("");l.innerHTML=o}).catch(s=>{console.log(s.message)});console.log("data",data);
//# sourceMappingURL=commonHelpers.js.map
