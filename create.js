let form = document.querySelector("#form")
let course_name = document.querySelector("#course_name");
let course_time = document.querySelector("#course_time");
let course_duration = document.querySelector("#course_duration");
let course_price = document.querySelector("#course_price");
let create_btn = document.querySelector("#create_btn");

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let tayyor = {
      course_name: course_name.value,
      course_time: course_time.value,
      course_month: course_duration.value,
      course_price: course_price.value,
    };

    fetch("https://crmpanel-yle6.onrender.com/courses", {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(tayyor)
    });
})