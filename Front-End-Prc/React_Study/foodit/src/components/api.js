const BASE_URL = "https://learn.codeit.kr/3053";

export async function getData({ order = "createdAt", cursor = "", limit = 20 }) {
  const query = `order=${order}&cursor=${cursor}&limit=${limit}`;
  const response = await fetch(`${BASE_URL}/foods?${query}`);
  if (!response.ok) {
    throw new Error("리뷰 불러오기 실패");
  }
  const body = response.json();
  return body;
}

export async function createData(formData) {
  const response = await fetch(`${BASE_URL}/foods`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰 등록 실패");
  }
  const body = response.json();
  return body;
}

export async function updateData(id, formData) {
  const response = await fetch(`${BASE_URL}/foods/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰 수정 실패");
  }
  const body = response.json();
  return body;
}
