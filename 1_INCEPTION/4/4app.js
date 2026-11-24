
/*
  <div id ="parent">
       <div id = "child">
          <h1>This is first h1 tag</h1>
          <h2>This is first h2 tag</h2>
       </div>
  </div>  
   
   if multiple children means siblings are there we will use an array
   
   [React.createElement("h1",{},"I am h1 tag") , React.createElement("h2",{},"I am h2 tag")]
   */

   const parent = React.createElement(
    "div", { id: "parent"},
       React.createElement(
         "div" ,  { id : "child" }, [
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")]
      )

   );

   console.log(parent);

   const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);