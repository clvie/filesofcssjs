function department_onchange(){
    var myselect = document.getElementById("departmentId");
    var index=myselect.selectedIndex;
    var id = myselect.options[index].value
    $.ajax({
        url:'/apitest/department_onchange/',
        type:'POST',
        data:{'departmentId':id},
            success:function(data){
            $("#projectId").html('').html(data);
        }
    });

}

function requireProject(){
    $.ajax({
        url:'/apitest/ajax_require_project/',
        type:'POST',
        data:$('form').serialize(),
        success:function(data){
            $("#project_list").html('');
            $("#project_list").html(data);
        }
    })
}

function requireEnvironmet(){
    $.ajax({
        url:'/apitest/ajax_require_environment/',
        type:'POST',
        data:$('form').serialize(),
        success:function(data){
            $("#environment_list").html('');
            $("#environment_list").html(data);
        }
    })
}