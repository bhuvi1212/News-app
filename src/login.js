import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify"
import { Navigate } from 'react-router';
import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
function Login() {
    const [signedUser, setSignedUser] = useState(true);
    useEffect(() => {
        async function authListener() {
            Hub.listen("auth", (data) => {
                if (data.payload.event === 'signIn')
                    setSignedUser(true);
                else if (data.payload.event === 'signOut')
                    setSignedUser(false);
            });
            try {
                await Auth.currentAuthenticatedUser();
                setSignedUser(true);
            } catch (err) { }
            return () => {
                Hub.remove("auth");
            };
        }
        authListener();
    }, [signedUser]);


    return (
        <div style={{ padding: 100 }}>


            <Navigate to="/Dashboard" />
            {/* </div> </Authenticator> */}
        </div>// your login form code here
    );

}
export default withAuthenticator(Login);