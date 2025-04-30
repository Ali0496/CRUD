let wrapper = document.querySelector(".wrapper");
let html = "";
let form = document.querySelector("#form");
let course_name = document.querySelector("#course_name");
let course_time = document.querySelector("#course_time");
let course_duration = document.querySelector("#course_duration");
let course_price = document.querySelector("#course_price");

async function getData() {
  let fetchData = await fetch("https://crmpanel-yle6.onrender.com/courses");
  let json = await fetchData.json();

  json.data.forEach((item) => {
    html += `
        <div class="card" id=${item._id}>
            <h2>${item.course_name}</h2>
            <h4>${item.course_time}</h4>
            <h4>${item.course_month}</h4>
            <h4>${item.course_price}</h4>
            <button id="updateBtn">Update</button>
            <button id="deleteBtn">Delete</button>
        </div>`;
  });

  wrapper.innerHTML = html;

  let allUpdateBtns = document.querySelectorAll("#updateBtn");
  allUpdateBtns.forEach((upBtns) => {
    upBtns.addEventListener("click", (e) => {
      form.classList.add("show");
      let id = e.target.parentElement.id;

      form.addEventListener("submit", (ev) => {
        ev.preventDefault();

        let tayyor = {
          course_name: course_name.value,
          course_time: course_time.value,
          course_month: course_duration.value,
          course_price: course_price.value,
        };
        fetch("https://crmpanel-yle6.onrender.com/courses/" + id, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(tayyor),
        });
      });
    });
  });
  let allDeleteBtns = document.querySelectorAll("#deleteBtn");
  allDeleteBtns.forEach((delBtns) => {
    delBtns.addEventListener("click", (eve) => {
      fetch(
        "https://crmpanel-yle6.onrender.com/courses/" +
          eve.target.parentElement.id,
        {
          method: "DELETE",
        }
      );
      eve.target.parentElement.style.display = "none";
    });
  });
}
getData();
