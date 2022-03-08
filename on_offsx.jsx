

const width = 400;
const height = 600;
const imgArray = ['off.png', 'on.png'];


function On_Off({width, height, focoImg}){

    return (
    <>
        <img src={focoImg} width={width} height={height} />
    </> 
    );
}


function Interruptor({pressButton, text}){

    return(
        <button onClick={pressButton} value="On" >{text}</button>
    );
}


function Switch(){
    
    const [encendido, prender] = React.useState(true);
    const [text, setText] = React.useState("On")
    const [imagen, setImagen] = React.useState(imgArray[0]);
    
    const handleEvent = (event) =>{
        console.log(event.target.value);
        prender(!encendido);
        
        if(encendido){
            setText("Off");
            event.target.value = "Off";
            setImagen(imgArray[1]);

        }else{
            setText("On");
            event.target.value = "On";
            setImagen(imgArray[0]);
        }

        console.log(`Imagen ${imagen}`);
        
    }




    return (
        <>
        <div><Interruptor pressButton={handleEvent} text={text} /></div>
        
        <div><On_Off width={width} height={height} focoImg={imagen} /></div>
        </>
    );

}

ReactDOM.render(
    //<On_Off width={400} height={600} />,
    <Switch />,
    document.getElementById("root")
  );
  