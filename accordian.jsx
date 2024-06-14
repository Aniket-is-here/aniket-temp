import { useState } from "react";
import Searchdiv from "./searchdiv";

export default function Accordian() {
  const [firstisopen, setfirstisopen] = useState(false);
  const [nestedfirstisopen, setnestedfirstisopen] = useState(false);
  const [secondisopen, setsecondisopen] = useState(false);
  const [thirdisopen, setthirdisopen] = useState(false);

  const FirstclickHandler = () =>{
    setfirstisopen(!firstisopen)
  }
  const SecondclickHandler = () =>{
    setsecondisopen(!secondisopen)
  }
  const ThirdclickHandler = () =>{
    setthirdisopen(!thirdisopen)
  }
  const nestedclickHandler = () =>{
    setnestedfirstisopen(!nestedfirstisopen)
  }
  return (
    <>
    <Searchdiv title={'First Div'} onClickhandler={FirstclickHandler} isopen= {firstisopen}
    />
    {firstisopen ? 
    <div>
    <Searchdiv title={'Nested in First Div'} onClickhandler={nestedclickHandler} isopen= {nestedfirstisopen}/>
    {nestedfirstisopen ? <div>This is Further Nested</div> : ''}
    </div>
     : ""}
    <Searchdiv title={'Second Div'} onClickhandler={SecondclickHandler} isopen= {secondisopen}/>
    <Searchdiv title={'Third Div'} onClickhandler={ThirdclickHandler} isopen= {thirdisopen}/>
</>
  );
}
