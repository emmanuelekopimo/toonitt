const latest = document.querySelector(".latest-videos");
const bottomNav = document.querySelector(".pages");
const sectionTitle = document.querySelector(".section-title.videos");
const url = new URL(location.href);
const page = url.search.slice(url.search.indexOf("=") + 1, url.search.length);

fetch(`https://outrageous-elk-wear.cyclic.app/?page=${page}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    sectionTitle.innerText = sectionTitle.innerText + ` - Page ${page}`;
    let videos = data.videos; // Array
    let pages = data.pages; //Array
    videos.forEach((video) => {
      let element = document.createElement("div");
      element.classList.add("widget");
      let content = `
        <div class="description">
            <h3 class="detail">${video.title}</h3>
            <b>${video.short_desc}</b> <br>
            ${video.long_desc}
        </div>

        <iframe class="embed" src="${video.youtube}" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>`;
      element.innerHTML = content;
      latest.append(element);
    });
    pages.forEach((pageNumber) => {
      let element = document.createElement("span");
      if (pageNumber === page) {
        element.innerHTML = `<a href="./../videos/index.htm?page=${pageNumber}"><span class="number current">${pageNumber}</span></a>`;
      } else {
        element.innerHTML = `<a href="./../videos/index.htm?page=${pageNumber}"><span class="number">${pageNumber}</span></a>`;
      }
      bottomNav.append(element);
    });
  })
  .catch((err) => {
    let element = document.createElement("div");
    element.classList.add("widget");
    let content = `
        <div class="description error">
            Error fetching content. Reload page
        </div>`;
    element.innerHTML = content;
    latest.append(element);
    latest.classList.add("error");
  });
