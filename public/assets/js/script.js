$(function () {
    $(".btn-eat").on("click", function (event) {
        const id = $(this).data("id");
        const eat = $(this).data("eaten");
        const eaten = {
            devoured: eat
        };
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: eaten
        }).then(
            function () {
                location.reload();
            }
        )
    });
}),
    $(function () {
        $(".btn-delete").on("click", function (event) {
            var id = $(this).data("id");
            let item = event.target
            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then(
                function () {
                    console.log(item)
                    $(`#${id}`).remove();
                    // location.reload();
                }
            )
        });
    })

