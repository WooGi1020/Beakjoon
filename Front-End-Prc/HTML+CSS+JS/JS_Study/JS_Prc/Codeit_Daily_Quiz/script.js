const urls = [
  "https://www.example.com/abc123",
  "https://www.example.com/xyz456",
  "https://www.example.com/123abc",
  "https://www.example.com/def789",
  "https://www.example.com/ghi321",
];
async function fetchUrls() {
  try {
    for (const url of urls) {
      const response = await fetch(url);
      console.log(await response.await);
    }
  } catch (error) {
    console.error(error.name);
  }
}

fetchUrls();
