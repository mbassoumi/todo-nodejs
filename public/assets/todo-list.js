$(document).ready(function () {
    $(document).on('click','#add-todo', function (e) {
        e.preventDefault();
        var item = $('form input').val();

        $.ajax({
            type: 'POST',
            url: '/todo',
            dataType: 'json',
            data: {
                item: item
            },
            success: function (data) {
                location.reload();
            },
            error: function (error) {
                alert('error');
                alert(error);
            }
        });

        return false;
    });

    $(document).on('click','li', function (e) {
        e.preventDefault();

        var todoId = $(this).attr('id');
        $.ajax({
            type: 'DELETE',
            url: '/todo/'+todoId,
            success: function (data) {
                location.reload();
            },
            error: function (error) {
                alert('error');
                alert(error);
            }
        });

        return false;
    });



});