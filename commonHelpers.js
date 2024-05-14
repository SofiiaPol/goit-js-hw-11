import{S as c,i}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const l="https://pixabay.com",m="/api/",u={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},f=r=>{const s=new URLSearchParams(u);return s.append("q",r),s},p=r=>{const s=`${l}${m}?${f(r)}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},d=r=>{const s=r.map(e=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
            />
        </a>
        <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            <span>${e.likes}</span> 
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            <span>${e.views}</span>
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            <span>${e.comments}</span>
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            <span>${e.downloads}</span>
                        </p>
                    </div>
    </li>

`).join("");document.querySelector(".gallery").innerHTML=s},h=document.querySelector(".search-form"),g=r=>{r.preventDefault();const s=r.target;console.log(s.elements),console.log(s.elements.searchInput.value),p(s.elements.searchInput.value).then(e=>{e.totalHits===0?b("Sorry, there are no images matching your search query. Please try again!"):(d(e.hits),new c(".gallery a"))}).catch(e=>{y(e.message)})};h.addEventListener("submit",g);function y(r){i.show({title:"Error",message:r,messageColor:"white",backgroundColor:"tomato"})}function b(r){i.show({title:"Message",message:r,messageColor:"white",backgroundColor:"teal"})}
//# sourceMappingURL=commonHelpers.js.map
