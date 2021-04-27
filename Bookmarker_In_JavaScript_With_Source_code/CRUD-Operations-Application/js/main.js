var siteName = document.getElementById("siteName"),
  siteUrl = document.getElementById("siteUrl"),
  addBtn =  document .getElementById("addBtn"),
  deleteBtn = document.getElementById("deleteBtn"),
  visitBtn = document.getElementById("visitBtn"),
  websiteItem = document.getElementsByClassName("websiteItem"),
  sitesList = [];

// Add Website Name and URL Function
function addWebsite() 
{
  if (siteName != "" && siteUrl != "") {

    var website = 
    {
      name: siteName.value,
      url: siteUrl.value
    };
    sitesList.push(website);
    displayWebsite();
    siteName.value = '';
    siteUrl.value = '';

  } else {

     alert("Please, Fill These Fields");
  }
}

// Display Website Name and URL Function
function displayWebsite() 
{
  var websites = "",
      h3, a1, a2;

  for (var i = 0; i < sitesList.length; i++)
  {
    h3 = "<h3 class='d-inline-block'>" +sitesList[i].name +"</h3>";
    a1 = "<a id=\"visitBtn\" class=\"btn btn-primary d-inline-block mx-2 openWebsite\"href=\""+sitesList[i].url+"\"target=\"_blank\">Visit</a>";
    a2 = "<button id=\"deleteBtn\" onclick=\"deleteWebsite(this)\"  class='btn btn-danger text-white d-inline-block mx-2'>Delete</button>";
    websites = "<div class='websiteItem'>"+ h3 + a1 + a2 +"</div>";
  
  }
  document.getElementById("displaySite").innerHTML += websites;

}

// Delete Website Name and URL Function
function deleteWebsite (deleteBtn)
{
      // Disappear The Website
      deleteBtn.parentElement.style.display = 'none';
  
      // Remove Website from Array
      var link = deleteBtn.previousElementSibling;
      var url = link.getAttribute('href');
      console.log(url);
      for (var i = 0; i < sitesList.length; i++)
      {
        if (sitesList[i].url == url)
        {
          sitesList.splice(i,1);
        }
      }
}
deleteBtn.onc