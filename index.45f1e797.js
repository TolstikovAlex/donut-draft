const e={searchSection:document.querySelector(".search"),libButtons:document.querySelector(".library-btn-list"),headerEl:document.querySelector("header"),libLink:document.querySelector("#library"),homeLink:document.querySelector("#home")};e.libLink.addEventListener("click",(function(t){t.preventDefault(),e.searchSection.classList.add("visually-hidden"),e.libButtons.classList.remove("visually-hidden"),e.homeLink.classList.remove("current"),e.libLink.classList.add("current"),e.headerEl.classList.add("header-container_lib")})),fetch("https://api.themoviedb.org/3/movie/550?api_key=4c72667d32b2e08beebedbc40d9b510d").then((e=>e.json())).then((e=>console.log(e)));
//# sourceMappingURL=index.45f1e797.js.map