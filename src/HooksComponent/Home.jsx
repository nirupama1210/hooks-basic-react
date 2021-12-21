import React, {useState,useEffect, useContext, createContext} from 'react'

const themes={
    light:{
        foreground:"#ff6b86",
        background:"#ffd4dc"
    },
    dark:{
        foreground:"#ffffff",
        background:"#c90025"
    }
}

const ThemeContext = createContext(themes.light)

export default function Home(){
    const [myAge,setAge]=useState(19)
    const [siblingNum,setSiblingNum]=useState(10)

    const [count,setCount]=useState(0);



    useEffect(()=>{
        document.title="You are "+myAge+" years old!";
        console.log("Componen Mount/Update")
    })
    
    const [themeStyle,setThemeStyle]=useState(themes.dark);
    var handleThemeStyle=()=>{
        setThemeStyle(themeStyle===themes.dark?themes.light:themes.dark);
    }

    var ThemeButton=()=>{
        const theme=useContext(ThemeContext);
        let val='';
        if(theme.background==="#c90025")
        {
            val='dark'
        }
        else{
            val='light'
        }
        return(
            <div id="d1" style={{background:theme.background,color:theme.foreground}}>
            <h2>Hey Prograds</h2>
            <p>Welcome to React Hooks</p>
            <p>The theme here is {val}</p>
            </div>
            )
    }

    return(
        <div>
            <ThemeContext.Provider value={themeStyle}>            
            <p className='p1'>Today I am {myAge} Years of Age</p>
            <p className='p2'> I have {siblingNum} siblings</p>
            <button  onClick={()=>setAge(myAge+1)}>Get Older!</button>
            <button onClick={()=>setSiblingNum(siblingNum+1)}>More siblings!</button>
            <p className='p2'>Count Value is: {count}</p>
            <button onClick={()=>setCount(count+1)}>Plus(+)</button>
            <button onClick={()=>setCount(count-1)}>Minus(-)</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <ThemeButton></ThemeButton>
            <button onClick={handleThemeStyle}>Change Theme</button>
            </ThemeContext.Provider>

        </div>
    )
}