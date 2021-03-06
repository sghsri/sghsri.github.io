$(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('#email').attr('href', 'mailto:sghsri@gmail.com');
    } else {
        // for copying email on computer
        $("#email").on({
            mouseenter: function () {
                $(this).html(
                    'sghsri@gmail.com (click to copy)'
                );
            },
            mouseleave: function () {
                $(this).html('<i class="fa fa-envelope" style="padding-right:5px;"><br></i> Contact');
            },
            click: function () {
                copyToClipboard();
                $(this).html(
                    'sghsri@gmail.com (copied!)');
            }
        });
    }

    function copyToClipboard() {
        //make a dummy input with email as value, then select it and copy the value from it
        let input = document.createElement("input");
        document.body.appendChild(input);
        input.setAttribute('value', "sghsri@gmail.com");
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
    };
});