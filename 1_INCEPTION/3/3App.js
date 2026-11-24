
/*
  <div id ="parent">
       <div id = "child">
          <h1>This is first h1 tag</h1>
       </div>
  </div>  
   
   // ReactElement(object) =>HTML(Browser Understands)
   
   // how to create this nested loop in REACT

    
   */
   // for single heading
   // const heading = React.createElement("h1",{},"attribute")

   const parent = React.createElement(
    "div", { id: "parent"},
       React.createElement(
         "div" ,  { id : "child" },
            React.createElement("h1",{},"I am h1 tag")
      )

   );

   const heading = React.createElement(
   "h1",
    {  id: "heading" , xyz : "abc"},
     "Hello World from multiples headings in React"
     
   );

   console.log(parent);

   const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);