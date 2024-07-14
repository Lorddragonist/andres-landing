const urlApi =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC3zmB-vG-bol2bZEu6REw3A&part=snippet%2Cid&order=date&maxResults=50";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "0f210a4b3bmsh3720c288db0237dp109088jsnf64eccb546e3",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi, options) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

// let test = async (urlApi, options) => {
//   const prueba = await fetchData(urlApi, options);
//   console.log(prueba);
// };

// test(urlApi, options);

(async () => {
  try {
    const videos = await fetchData(urlApi, options);
    let view = `
        ${videos.items
          .map(
            (video) => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
                >
                <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full" 
                alt="${video.snippet.description}" />
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
                </div>
            </div>
        `
          )
          .slice(0, 4)
          .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
