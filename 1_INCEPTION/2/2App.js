//  const heading = React.createElement(" heading_type ", {attributes to class} , "children")

       const heading = React.createElement("h1", { id: "heading", xyz: "abc" } , "Hello World from React !");

       console.log(heading);  // it will show an h1 type object in console
       // 

//   const root =  ReactDOM.createRoot(document.getElementById("root"));

       const root =  ReactDOM.createRoot(document.getElementById("root"));

// this will be responsible to take the object and convert the heading tag 
       root.render(heading);
