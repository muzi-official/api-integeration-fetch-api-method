import React, {useState , useEffect} from 'react';


const App = () => {

const [users, setUsers] = useState([]);


 // fetch api method api integeration start //
const getUsers = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/albumbs/1/photos');
setUsers(await res.json());
}

useEffect ( () => {
getUsers();
},[]);
 // fetch api method api integeration close //


    return (
        <>
            <h1 className="text-center mt-5">Fetch Api  Method  </h1>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center align-items-center">

{

users.map((curElem) => {
    return (
        <>
           <div className="main col-10 col-md-3 mt-3" key={curElem.id}>
                      
           <img src={curElem.thumbnailUrl} className="rounded" width="40px" height="40px" />         <h4>Muzammil              
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{curElem.title}  </span>
                        </h4>
                        <div className="items">
                            <h4 className='article'>articles&nbsp;
                                <span>40</span>
                            </h4>
                            <h4 className='follower'>follower&nbsp;<span>400</span>
                            </h4>
                            <h4 className='rating'>rating                        &nbsp;<span>5.2</span>
                            </h4>
                        </div>
                    </div>
        </>
    )
}) 

} 
 </div>
  </div>
        </>
    )
}

export default App;
