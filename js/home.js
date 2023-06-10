const latest = document.querySelector(".latest-videos");

fetch("https://outrageous-elk-wear.cyclic.app/?page=1")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let videos = data.videos; // Array
    videos.forEach((video, index) => {
      let element = document.createElement("div");
      element.classList.add("widget");
      element.classList.add("fade-in-section");
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
      if (index === 3) {
        let adElement = document.createElement("script");
        adElement.innerHTML = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1186998729200892"
                    crossorigin="anonymous"></script>
                    <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-format="fluid"
                    data-ad-layout-key="-ed+6k-30-ac+ty"
                    data-ad-client="ca-pub-1186998729200892"
                    data-ad-slot="9165255911"></ins>
                    <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                      </script>`;
        latest.append(adElement);
      }
      element.innerHTML = content;
      latest.append(element);
    });
  })
  .catch((err) => {
    let element = document.createElement("div");
    element.classList.add("widget");
    element.classList.add("fade-in-section");
    let content = `
        <div class="description error">
            Error fetching content. Reload page
        </div>`;
    element.innerHTML = content;
    latest.append(element);
    setTimeout(() => {
      element.classList.add("is-visible");
    });
  });
