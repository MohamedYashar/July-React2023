import React from'react'
import './Home.css'

import { useHistory } from 'react-router';

export default function Home () {


    const history = useHistory();


    return(

        <div>
        <div class="container">
          <div >

            <h3>HEY! I AM</h3>

            <h1>MOHAMED YASHAR</h1>
                
             <h3> 
                I'm Enthusiastic Team player. Emphasizing on skill development. Striving to accelerate the complete potential as an Full Stack Developer.
                
             </h3>   

            <h3>To know more about me !!   <span><button  type="link" onClick={ ()=> history.push("/About") } >Click Here</button></span></h3>  
            
            </div>

            
            
        </div>




</div>

        

    )
}

