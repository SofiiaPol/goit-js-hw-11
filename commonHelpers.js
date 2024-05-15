import{S as c,i}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="https://pixabay.com",u="/api/",p={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},f=o=>{const s=new URLSearchParams(p);return s.append("q",o),s},d=o=>{const s=`${m}${u}?${f(o)}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},h=o=>{const s=o.map(e=>`
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

`).join("");document.querySelector(".gallery").innerHTML=s},g=document.querySelector(".search-form"),a=document.querySelector(".loader");a.style.display="none";let y=new c(".gallery a");const b=o=>{o.preventDefault();const s=o.target;console.log(s.elements),console.log(s.elements.searchInput.value),d(s.elements.searchInput.value).then(e=>{a.style.display="none",e.totalHits===0?L("Sorry, there are no images matching your search query. Please try again!"):(h(e.hits),y.refresh())}).catch(e=>{a.style.display="none",w(e.message)})};g.addEventListener("submit",b);function w(o){i.show({title:"Error",message:o,messageColor:"white",backgroundColor:"tomato"})}function L(o){i.show({title:"Message",message:o,messageColor:"white",backgroundColor:"teal"})}
//# sourceMappingURL=commonHelpers.js.map
