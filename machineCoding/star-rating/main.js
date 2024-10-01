const starContainer = document.getElementById("star-container");
const render = () => {
  const renderStar = (selectedStar) => {
    starContainer.innerHTML = `
          ${Array(5)
            .fill(0)
            .map(
              (item, idx) =>
                `<span class=${
                  idx <= selectedStar ? "yellow" : "star"
                } ><i class="fa-regular fa-star" data-id=${idx}></i></span>`
            )
            .join("")}
        `;
  };

  renderStar();
  starContainer.addEventListener("click", (e) => {
    renderStar(parseInt(e.target.dataset.id));
  });
//   starContainer.addEventListener("mouseover", (e) => {
//     console.log(e.target)
//     renderStar(parseInt(e.target.dataset.id))
//   });
//   starContainer.addEventListener("mouseleave", (e) => {
//   });
};

render();
