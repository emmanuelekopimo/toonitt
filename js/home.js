const latest = document.querySelector(".latest-videos");

fetch("https://outrageous-elk-wear.cyclic.app/?page=1")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let videos = data.videos; // Array
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
  });
