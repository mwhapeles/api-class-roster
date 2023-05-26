// My Scripts


// Data source from AirTable API
// Note: We're using NoCode API to make connecting to AirTable easier
//const url = "https://v1.nocodeapi.com/pmanikoth/airtable/rsqhQzAAKcMyyPPW?tableName=Roster";

//const dataSource = "https://assets.codepen.io/16425/spring23web3.json";

// Get data
//fetch( dataSource)
 // .then( response  => response.json())
//  .then( data  => {
    // check-check: get one image
    // Note: Webflow returns data in array called `items`
   // console.log(data.records);
   // console.log(data.records[0].fields);
   // console.log(data.records[0].fields.Name);
   // console.log(data.records[0].fields.Emoji);
   // console.log(data.records[0].fields.Color);
   // console.log(data.records[0].fields.Image[0].url);

    // get container for data
   // const gallery = document.querySelector(".gallery");

    // loop through data
   // data.forEach( student => {
      
      // template
   //   const template = `
   //       <figure>
   //         <figcaption>${student.Name}</figcaption>
   //         <p>${student.Emoji}</p>
   //         <img src="${student.Image[0]}" alt="${student.Name}">
   //       </figure>
   //    `;

      // insert EACH `student` record into container
    //  gallery.insertAdjacentHTML("afterbegin", template);
   // });
 // });
// Data source
const dataSource = "https://assets.codepen.io/16425/spring23web3.json";

// fetch
fetch( dataSource ) 
.then ( response => response.json())
.then (data => {
  
  //get container for data 
   const gallery = document.querySelector('.gallery');
  
  //for each record, insert into parent
  data.forEach( (student) => {
    
    //template to reuse
   const template = `
   <img src= ${student.Image} >
   <h1> ${student.Name} </h1>
  <p>${student.Emoji}</p>
  <blockquote>${student.Quote}</blockqoute>
  <p>${student.Superpower}</p>
`
    gallery.insertAdjacentHTML(`afterbegin`, template) ;
  });
  
});


document.querySelectorAll('student.Image').forEach( item => {
    
  // for each item i.e. card, do this
  item.addEventListener('click', event => {
    
    // toggle class on card
    item.classList.toggle('flipped');
  })

});

 //console.log(data);
 // console.log(data[9].Superpower);
 // console.log(data[2].Emoji);
 // console.log(data[1].Quote);