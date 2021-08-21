var courseList = $("#courses");

$("button").click(function(){
    $.get("https://codingninjas.in/api/v3/courses",function(data){
        let courses = data.data.courses;

        for(let course of courses)
        {
            courseList.append(`
                <div class="card">
                  <img src="${course.preview_image_url}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text">${course.title}</p>
                    
                 </div>
                </div>
                `);
            
        }
    });
})