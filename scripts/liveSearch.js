//Getting value from "prescription.php".

function fill(Value) {

   //Assigning value to "search" div in "search.php" file.
	$('#search').val(Value);

   //Hiding "display" div in "search.php" file.
   $('#disp').hide();

}

$(document).ready(function() {

   //On pressing a key on "Search box" in "search.php" file. This function will be called.

   $("#search").keyup(function() {

       //Assigning search box value to javascript variable named as "name".

       var name = $('#search').val();

       //Validating, if "name" is empty.

       if (name == "") {

           //Assigning empty value to "display" div in "search.php" file.

           $("#disp").html("");

       }

       //If name is not empty.

       else {

           //AJAX is called.
           $.ajax({
            	type: "POST",
               url: "prescription.php",
               data: {
                   search: name
               },

               //If result found, this funtion will be called.

               success: function(html) {

                   //Assigning result to "display" div in "search.php" file.

                   $("#disp").html(html).show();
				    console.log(html);

               }

           });

       }

   });

});