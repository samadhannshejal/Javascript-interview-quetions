const modelContainer = document.getElementById("model-container");

const render = () => {
  const togglePopup = (isOpen) => {
    modelContainer.innerHTML = `
      <div id=${!isOpen ? "none" : "model"}>
         <div id="model-header">
             <i class="fa-solid fa-xmark cross" id="cross-mark"></i>
         </div>
         <div class="model-body">
         </div>
         <div class="model-footer">
           <button class="btn">Cancel</button>
           <button class="btn">Save</button>
         </div>
      </div>
    `;

    if (isOpen) {
      // Add the event listener after the modal is rendered
      document.getElementById('cross-mark').addEventListener('click', () => {
        togglePopup(false); 
        render()// Close modal on clicking cross
      });
    }
  };

  // Initial rendering with the "Open" button
  modelContainer.innerHTML = `<button id="open-btn">Open </button>`;

  // Add event listener for "Open" button
  document.getElementById("open-btn").addEventListener("click", () => {
    togglePopup(true);
  });
};

render();
