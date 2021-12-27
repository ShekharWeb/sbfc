
// stellernav activate for main menu
jQuery('.stellarnav').stellarNav({
    theme: 'light',
    breakpoint: 991
});


// $(document).ready(function() {
//     $('.minus').click(function () {
//         var $input = $(this).parent().find('input');
//         var count = parseInt($input.val()) - 1;
//         count = count < 1 ? 1 : count;
//         $input.val(count);
//         $input.change();
//         return false;
//     });
//     $('.plus').click(function () {
//         var $input = $(this).parent().find('input');
//         $input.val(parseInt($input.val()) + 1);
//         $input.change();
//         return false;
//     });
// });


function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}
