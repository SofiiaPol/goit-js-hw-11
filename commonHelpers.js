import{S as c,i as l}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const u="https://pixabay.com",m="/api/",f={key:"43828991-79d1a60f3e87126db3a63842a",imageType:"photo",orientation:"horizontal",safesearch:"true"},p=r=>{const s=new URLSearchParams(f);return s.append("q",r),s},d=r=>{const s=`${u}${m}?${p(r)}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},h=r=>{const s=r.map(e=>`
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

`).join("");document.querySelector(".gallery").innerHTML=s},g=document.querySelector(".search-form"),i=document.querySelector(".loader");i.style.display="none";let y=new c(".gallery a");const b=r=>{r.preventDefault();const e=r.target.elements.searchInput.value;if(e.trim()===""){alert("please fill in the line");return}d(e).then(n=>{i.style.display="none",n.totalHits===0&&L("Sorry, there are no images matching your search query. Please try again!"),h(n.hits),y.refresh()}).catch(n=>{i.style.display="none",w(n.message)})};g.addEventListener("submit",b);function w(r){l.show({title:"Error",message:r,messageColor:"white",backgroundColor:"tomato"})}function L(r){l.show({title:"Message",message:r,messageColor:"white",backgroundColor:"teal"})}
//# sourceMappingURL=commonHelpers.js.map
