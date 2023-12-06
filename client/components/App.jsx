import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const App = () => {
    //using state to store users data
    const [ user, setUser ] = useState({});

    //response comes from google docs from the identity services
    function handleCallbackResponse(response) {
        console.log('Encoded JWT ID Token: ', response.credential);
        //jwt_decode is a func that allows the jwt token to be decoded into object
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        //hide the signin button if already signed in
        document.getElementById('signInDiv').hidden = true;
    }

    function handleSignOut() {
        //if user wants to signout, set user back to empty obj
        setUser({});
        //show the sign in again
        document.getElementById('signInDiv').hidden = false;
    }

    //useEffect will render once page is loaded
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '1091479149718-kjjcl23t6cah3jqqm94g0gpafvv14v8u.apps.googleusercontent.com',
            // if someone wants to login this func will be invoked
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            //create button to render
            document.getElementById('signInDiv'),
            { theme:'outline', size: 'large'}
        );
    }, []);

    //if we have no user, show signin button
    //if we have user, show signout button
    return (
        <div className="App">
            <div id="signInDiv"></div>
            {/* conditionally render by using && op */}
            { Object.keys(user).length != 0 &&
            <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            }
            { user &&
              <div>
                  <img src={user.picture}></img>
                  <h3>{user.name}</h3>
              </div>
            }
        </div>
    );
};

export default App;

