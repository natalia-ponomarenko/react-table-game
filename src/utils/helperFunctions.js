const BASE_API = "https://60816d9073292b0017cdd833.mockapi.io/modes";

export const fetchModes = async () => {
  try {
    const response = await fetch(BASE_API);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw new Error(`Error fetching modes: ${error.message}`);
  }
};
