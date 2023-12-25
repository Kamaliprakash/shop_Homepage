import React, { useState } from "react";
import Card from "./components/Card";
import TopBar from "./components/TopBar";
import Header from './components/Header'
function App() {

let data = [
{
  name:"Fancy name",
  price:'$40.00 - $80.00',
},
{
  name:"Special Item",
  price:'$20.00 $18.00',
},

{
  name:"Sale Item",
  price:'$50.00 $25.00',
},

{
  name:"Popular Item",
  price:'$40.00',
},

{
  name:"Sale Item",
  price:'$50.00 $25.00',
},

{
  name:"Fancy name",
  price:'$120.00 - $280.00',
},

{
  name:"Special Item",
  price:'$20.00 $18.00',
},

{
  name:"Popular Item",
  price:'$40.00',
}

]

  let [cart, setCart] = useState(0);

  return <> 
      <TopBar cart={cart} setCart={setCart} />
      <Header/>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
{
  data.map((e,i)=>{
    return <Card data = {data} key={i}/>
  })
}        
          </div>
        </div>
      </section>
    </>
}
export default App;
