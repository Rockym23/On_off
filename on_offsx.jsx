

function On_Off({width, height}){



    return (
    <>
        <img src="off.png" width={width} height={height} />
    </> 
    );
}

ReactDOM.render(
    <On_Off width={400} height={600} />,
    document.getElementById("root")
  );
  