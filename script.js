const getbrewary = async () => {
  const resp = await fetch("https://api.openbrewerydb.org/v1/breweries");
  const data = await resp.json();
  return data;
};
const brewaries = document.getElementById("brewaries");
(async () => {
  try {
    const getbrew = await getbrewary();
    getbrew.map(addbrewary);

    async function addbrewary(x) {
      let brew = document.createElement("div");
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      brew.classList.add("brew");
      brew.style.backgroundColor = "#" + randomColor;
      brew.innerHTML = `<div class="namee">${x.name}</div>
        <div class="type">Brewary_type : ${x.brewery_type}</div>
        <div class="url">${x.website_url}</div>
        <div class="phone">${x.phone}</div>`;
      brewaries.appendChild(brew);
    }
  } catch (e) {
    console.log(e.error);
  }
})();
