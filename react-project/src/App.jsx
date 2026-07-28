

// class component 
// functional component 
//jsx => javascript xml 
//component => resuable 
//props => pass value to child component

import Child from "./Child";


function App() {

  return (
    <div>
      {/* JSX  */}
      <h2>Hello React</h2>
      <h1>Hello DKM College</h1>

      {/* self closing tag  */}
      <Child name="FIIT" />
      <Child name="Academy" />
    </div>
  );
}

export default App;
