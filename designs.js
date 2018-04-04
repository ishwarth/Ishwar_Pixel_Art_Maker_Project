$(document).ready(function () { //Once the DOM is ready, the jQuery ready function is called
    $('#sizePicker').submit(function makeGrid(grid) { //When the sumbit buttomis clicked, the makeGrid function is called
        $('table tr').remove(); //stops creating additional table after clicking submit button second time
        var rows = $('#inputHeight').val(); //assigning the entered grid height value to var rows
        var cols = $('#inputWidth').val();  //assigning the entered grid width value to var cols
        for (var i = 1; i <= rows; i++) {
            $('table').append('<tr></tr>');
            for (var j = 1; j <= cols; j++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'cells');
                /* these 2 for loops consructs the table of grid */
            }
        }
        grid.preventDefault();
        $('.cells').click(function (event) { //when we click on the any of the cells(grids), the click event function called
            var paint = $('#colorPicker').val(); //assigning the colorpicker value to var paint
            $(event.target).css('background-color', paint); 
            /*when we click on grid it changes the background color to the value of paint */
        });
    });
});