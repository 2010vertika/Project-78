var images= ["mom.jpeg","dad.jpeg","sister.jpeg","me.jpeg"];
var names= ["Divya Rapolu","Yadaiah Rapolu","Anusha Rapolu","Vertika Rapolu"];

var i = 0;
function update() {
    i++;
    var number_of_family_members = 3;
    if(i > number_of_family_members)
    {
        i = 0;
    }
    var updated_image = images[i];
    var updated_name = names[i];
    document.getElementById("Family_image").src = updated_image;
    document.getElementById("family_member_name").innerHTML = updated_name;
}



   

