$( document ).ready(function() {
    $(`.devour`).click(function(event){
        event.preventDefault();
        let id = $(this).data("id");
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: {"id": id}})
        .then(function(){
            location.reload();
        });
    })

    $(`#createBurger`).click(function(event){
        event.preventDefault();
        let burgerName = $(`#newBurger`).val();
        $.ajax("/api/burgers", {
            type: "POST",
            data: {"name": burgerName}})
        .then(function(){
            location.reload();
        });
    });
});