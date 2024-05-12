import"./assets/vendor-9dabe76c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const a="https://pixabay.com",i="/api/",l={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},u=s=>{const t=new URLSearchParams(l);return t.append("q",s),t},m=s=>{const t=`${a}${i}?${u(s)}`;return fetch(t).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},f=s=>{const t=s.map(r=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${r.webformatURL}">
            <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="cat"
            />
        </a>
    </li>

`).join("");document.querySelector(".ul").innerHTML=t},d=document.querySelector(".search-form"),h=s=>{s.preventDefault();const t=s.target;console.log(t.elements),console.log(t.elements.searchInput.value),m(t.elements.searchInput.value).then(r=>{f(r.hits)}).catch(r=>{console.log(r)})};d.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
