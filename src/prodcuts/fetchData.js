export default async function fetchData() {
  let response;

  const controller = new AbortController();
  const signal = controller.signal;

  // Cancel the fetch request in 2s
  setTimeout(() => controller.abort(), 2000);

  try {
    response = await fetch(
      "https://raw.githubusercontent.com/golam71/odin-shopping-cart/refs/heads/main/public/data.json",
      { signal },
    );
  } catch (error) {
    alert(`Could not fetch data. Error : ${error}`);
  }

  if (response.ok) {
    let json = await response.json();
    return json;
  } else {
    alert(`Error happened. Status code ${response?.status}`);
  }
}
