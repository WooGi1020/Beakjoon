const URL = "https://learn.codeit.kr/api/members/16";
const newMember = {
  name: "cogi",
  email: "cogi@codeit.kr",
  department: "marketing",
};

fetch(URL, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
  });
