var items = $("#items");



$("form button").click(function(e){
    var rollno = $("#rollno");
    var name = $("#name");
    var marks = $("#marks");

    var rollval = rollno.val();
    console.log(rollval);
    var nameval = name.val();
    console.log(nameval);
    var marksval = marks.val();
    console.log(marksval);

    e.preventDefault();

    if(rollno.val()==="" || name.val()==="" || marks.val()==="")
    {
        alert("Please fill all the details");
    }
    else
    {
        items.append('<div>Roll No -<span class="highlight">'+rollno.val()+'</span>,<span class="highlight">'+nameval+'</span> has scored <span class="highlight">'+marksval+'</span> marks</div>');
    }
});
