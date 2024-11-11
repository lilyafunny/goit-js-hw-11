const API_KEY = "47015926-a75abbcadb56cf8cc5bf9ef48";


export function fetchData(foto = "") {

    const params = new URLSearchParams({

        key: API_KEY,
        q: foto,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"

    });

    return fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });

}
