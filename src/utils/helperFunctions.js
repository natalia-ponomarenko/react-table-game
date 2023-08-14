const BASE_API = "https://60816d9073292b0017cdd833.mockapi.io/modes";

export const fetchModes = (setModes) => {
  fetch(BASE_API)
    .then((response) => response.json())
    .then((data) => setModes(data))
    .catch((error) => {
      console.error("Error fetching modes:", error);
    });
};
