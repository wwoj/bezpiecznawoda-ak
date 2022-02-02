import React ,{useState,useEffect }from "react";
import { Dropdown } from 'react-bootstrap';
function Contact(){
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
    function testMe(){
        setCount(count + 1);
        console.log("TestMe",count)
    }
    function testMe1(){
        setCount(count -1);
        console.log("TestMe",count)
    }
    function testMe2(){
        console.log("TestMe",fruit)
    }
    function testMe3(){
        console.log("TestMe",todos)
    }
    useEffect(() => {
        // Zaktualizuj tytuł dokumentu, korzystając z interfejsu API przeglądarki
        document.title = `Naciśnięto ${count} razy`;
      });
    return (
      <div>
        <button onClick={testMe}>Test me</button>
        <button onClick={testMe1}>Test me</button>
        <button onClick={testMe2}>Test me</button>
        <button onClick={testMe3}>Test me</button>
        <p>Naciśnięto {count} razy</p>
        <div className={`${count<=2 ? "" : " hidden"}` }>sprawdzam widocznosc komponentu:</div>
      </div>
    );
}
export default Contact;