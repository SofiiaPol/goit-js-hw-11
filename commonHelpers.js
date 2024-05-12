import"./assets/vendor-9dabe76c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const i="https://pixabay.com",a="/api",l={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},u=o=>{const t=new URLSearchParams(l);return t.append("q",o),t},f=o=>{const t=`${i}${a}?${u(o)}`;return fetch(t).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})},d=(o,t)=>{const n=o.map(s=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${s.webformatURL}">
            <img
            class="gallery-image"
            src="${s.webformatURL}"
            alt="cat"
            />
        </a>
    </li>

`).join("");t.innerHTML=n},m=document.querySelector(".ul"),p=document.querySelector(".submit-button");p.addEventListener("click",o=>{o.preventDefault(),f("flower").then(t=>{d(t.hits,m)}).catch(t=>{console.log(t)})});
//# sourceMappingURL=commonHelpers.js.map
