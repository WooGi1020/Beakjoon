export async function getReviews({ order = "createdAt", offset = 0, limit = 6 }) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`https://learn.codeit.kr/3050/film-reviews?${query}`);
  const body = response.json();
  return body;
}
