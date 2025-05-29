import React from 'react';
function Docker() {    
    return ( 
        <div className="container">
          <div className="col-6 mt-5">
            <h1>Docker</h1>
            <p>Docker is similer to github. It is light weight to Use because there is in docker every Container consume minimum size so that we have more extra memory to safe. &nbsp; In docker we study about Images and Container it is similler to Class and Objects where Class doesn't conatin Memory(can say class is blue print of an Objects) but an object have a memory. Similler to Images also like a Class and Conatiner is like an Object.</p>
            <p> Note: Docker can be used every machine without any problem. </p>
            <ul>
                <li>docker pull IMAGES_NAME (Images Pull from docker hub)</li>
                <li>docker images (show image in terminal)</li>
                <li>docker run Image-NAME (Build container and run)</li>
                <li>docker run -it IMAGES_NAME (-it (intractive mod) container ke through terminal ko access kr sktey hai.)</li>
                <li>docker stop CONT_NAME OR CONT_ID</li>
                <li>docker run CONT_NAME OR CONT_ID</li>
                <li>docker ps (check running container.)</li>
                <li>docker ps -a (check all container)</li>
            </ul>
          </div>   
        </div>
     );
}

export default Docker;