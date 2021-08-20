var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "20170525_131457.png", "20170206_141345.jpg", "20171228_193520.jpg", "20170920_143203.jpg"];
var names = ["My Family Book", "Hasmukh Jain", "Premlata Jain", "Lekhraj Jain", "Group Photo"];
var i = 0;
function update(){
    i++
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}