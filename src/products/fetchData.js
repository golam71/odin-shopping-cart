export default async function fetchData() {
  const controller = new AbortController();
  const signal = controller.signal;

  setTimeout(() => controller.abort(), 9000);

  try {
    const response = await fetch("/data.json", { signal });
    if (response.ok) {
      return await response.json();
    } else {
      alert(`Error happened. Status code ${response.status}`);
    }
  } catch (error) {
    alert(`Could not fetch data. Error: ${error}`);
  }
}
