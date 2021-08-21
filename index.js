fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => {
    var temp;
    data.forEach((element) => {
      temp += "<tr>";
      temp += "<td>" + element.name + "</td>";
      temp += "<td>" + element.capital + "</td>";
      temp += "<td>" + element.borders + "</td>";
      temp += "<td><img src='" + element.flag + "'alt='image'/>";

      temp += "<td>" + element.currencies + "</td>";
      temp += "<td>" + element.population + "</td>";
      temp += "</tr>";
    });

    document.getElementById("myTable").innerHTML = temp;
  });
