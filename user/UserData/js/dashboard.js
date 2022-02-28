$(document).ready(function () {

    console.log("hello");
    $("#Dashboard").addClass("active");

    let balanceChecker = 1;
    $.ajax({
        type: "POST",
        url: "code.php",
        data: { BalanceCheck: balanceChecker },
        dataType: "json",
        success: function (response) {
            $("#BalanceDisplay").text(response['Balance'] + " kshs");
            $("#SavingDisplay").text(response['Saving'] + " kshs");

            $("#CreditDisplay").text(response['CreditThisMonth'] + " kshs");
            $("#DebitDisplay").text(response['DebitThisMonth'] + " kshs");

            $("#DebitLastM").text(response['DebitTotal'] + " kshs");
            $("#CreditLastM").text(response['CreditTotal'] + " kshs");




            // for(let i=0; i<5; i++){
                
            // }
            let Status = new Array($(".Status").text());


            console.log(Status);



        }
    });

});