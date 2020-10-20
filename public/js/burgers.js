$(function(){
    $(".change-devoured").on("click", function(event){
        let id= $(this).data("id");
        let newDevour = $(this).data("newdevoured");
        let devourValue;
        if (newDevour === 1){
            devourValue = 0;
        } else if(newDevour === 0){
            devourValue = 1
        }
        let newDevourChange = {
            devoured: devourValue
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevourChange
        }).then(
            function(){
                console.log("changed devoured to" + newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("added new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event){
        let id = $(this).data('id');

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function(){
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});