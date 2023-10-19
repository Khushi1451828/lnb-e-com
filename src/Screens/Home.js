import {useEffect} from 'react'

function Home()
{
    //var count=0;
    // react method to initialize a variable that will be chnage after some actions
    //state is not a variable ,it is a variable mechanism which is directly connected or bind with the virtual DOM
    // const [count,setCount]=useState(0);
    // function incre()
    // {
    //     setCount(count+1);
    // }
    function fetchData(){
        //this is an async call and in javasccript they returns a promise and to handle that we use .then .catch method
        fetch('https://dummyjson.com/products').then((
        data => data.json()
        )).then((result)=>{
            console.log(result)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
            
        </>
       
    )
}
export default Home;