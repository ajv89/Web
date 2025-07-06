const btn = document.querySelector(".btn");
const bto= document.querySelector(".bto");
const box = document.querySelector(".hidden");
const video = document.querySelector(".v1");

btn.addEventListener("click", () => 
box.classList.remove("hidden"));

bto.addEventListener("click", () => 
box.classList.add("hidden"));

video.addEventListener("click", () => video.pause());

box.addEventListener("click", () => box.classList.add("hidden"));

const cavE = document.querySelector(".cavE");
const cavO= document.querySelector(".cavO");
const fot = document.querySelector(".can");

cavE.addEventListener("click", () => 
fot.classList.remove("can"));

cavO.addEventListener("click", () => 
fot.classList.add("can"));

fot.addEventListener("click", () => fot.classList.add("can"));


/*```html
<button>Mostrar vídeo</button>

<div class="hidden">
  <video>
    <source src="/shared-assets/videos/flower.webm" type="video/webm" />
    <p>
      Su navegador no es compatible con video HTML. Aquí hay un
      <a href="rabbit320.mp4">enlace al video</a> en su lugar.
    </p>
  </video>
</div>

```
```css
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}

```

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));

```*/

