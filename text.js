$(document).ready(function () {
    var myRules = {
        myNumber:
            {
                required: true,
                digits: true,
                min: 1,
                max: 1000
            }
    };
    var myMessages = {
        myNumber:
            {
                required: "Must fill in number",
                digits: "Only whole numbers",
                min: "Must be 1 - 1000",
                max: "Must be 1 - 1000"
            }
    };

    $("#loopTestForm").validate({
        rules: myRules,
        messages: myMessages,
        submitHandler: runLoops
    });
});

function runLoops() {
    var selectedLoopMethod = $("input[name=loop-type]:checked").val();

    /*
        Depending on which test method was selected,
        call the appropriate function.

        Possible values of selectedLoopMethod and
        the corresponding function calls are:

        for-loop	  ==> runForLoop()
        while-loop    ==> runWhileLoop()
        do-while-loop ==> runDoWhileLoop()
    */





}


function runWhileLoop() {
    var number = parseInt($("#myNumber").val());
    var output = "";

    /*
        Use a while loop to write the letter A "number" times
        to the div with ID "while-result".
    */


    $("#while-result").text(output);
}


function runForLoop() {
    var number = parseInt($("#myNumber").val());
    var sum = 0;

    /*
        Use a for loop to sum the numbers 1 through "number".
        Write the result to the div with ID "for-result".
    */

    $("#for-result").text(sum);
}


function runDoWhileLoop() {
    var number = parseInt($("#myNumber").val());
    var output = "";

    /*
        Use a do-while loop to print the numbers 1 through
        "number" to the div with ID "do-while-result".
    */


    $("#do-while-result").text(output);
}