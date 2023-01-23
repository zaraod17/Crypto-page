export const fetchData = async () => {
  const response = await fetch("/cryptocurrency/listings/latest", {
    headers: {
      "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
    },
  });

  const responseData = await response.json();
  if (!response.ok) {
    const error = new Error(responseData.message || "Failed to fetch!");
    throw error;
  }
  console.log(responseData);

  return responseData.data;
};
