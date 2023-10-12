// Fetch data from the manually created JSON file
  fetch('https://lo-ivan.github.io/assignment-2/user.json')
    // Convert the data into JavaScript
    .then((response) => response.json())
    // Now we can use the data
    .then((data) => {
      // Log out the data
      console.log(data);
      // Add total number and list items to the page
      document.getElementById('total').innerText += data.length;
      for (var i = 0; i < data.length; i++) {
        var htmlStr = "<li class='contact-item cf'> \
                          <div class='contact-details'> \
                              <img class='avatar' src='" + data[i].image + "'> \
                              <h3>" + data[i].name + "</h3> \
                              <span class='email'>" + data[i].email + "</span> \
                          </div> \
                          <div class='joined-details'> \
                              <span class='date'>Joined " + data[i].joined + "</span> \
                          </div> \
                       </li>";
        document.getElementById('contact-list').insertAdjacentHTML('afterbegin', htmlStr);
      }
      // Get the element of contact list document object 
      var ul = document.getElementById('contact-list');
      // Initiate the page for showing first 10 users
      page(1);
      // Calculate how many pages are needed to be included
      for (let j = 1; j <= Math.ceil(ul.children.length/10); j++) {
        var btn = document.createElement('button');
        btn.addEventListener('click', function() {page(j)});
        btn.innerText = j;
        btn.style.color = '#4ba6c3';
        document.getElementById('pagination').appendChild(btn);
      }
      // Display the corresponding 10 user profiles in the selected page
      function page(int) {
        for (let k = 0; k < ul.children.length; k++) {
          if (k < int*10 && k >= (int-1)*10) {
            ul.children[k].style.display = 'flex';
          }
          else {
            ul.children[k].style.display = 'none';
          }
        }
      }      
    })
    // Log out any errors
    .catch((error) => console.error(error));