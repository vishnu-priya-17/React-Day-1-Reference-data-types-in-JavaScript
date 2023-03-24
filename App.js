function Test()
{
    let myobject={name:"Madras"};
    let newObject=myobject;
    myobject.name="Chennai";
    let myarray=["a","e","i","o","u"];
    let vowelArray=myarray;
    myarray.push("u");
    console.log(newObject);
    console.log(myobject);
    console.log(vowelArray);
    console.log(myarray);

    const Hi=()=>{alert("Check the console output!")}
    return (
        <div>
        <button onClick={Hi}>Reference Data Types</button></div>
    );
}
ReactDOM.render(<Test/>,document.getElementById("mydiv"));