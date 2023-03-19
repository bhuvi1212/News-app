import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify"
import { Navigate } from 'react-router';
import { API } from 'aws-amplify/lib-esm/index.js';
import { Link } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import { AppBar, Toolbar, Typography, Button, Box, Select, MenuItem } from '@mui/material';
import News from './news.js';

function Dashboard() {
    const [user, setUser] = useState(null);
    const [category, setCategory] = useState("general");

    useEffect(() => {
        async function userDetails() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setUser(user);
                const username = user.username;
                const categoryData = await API.graphql({
                    query: /* GraphQL */ `
                        query GetCreateCategoryInput($username: String!) {
                            getCreateCategoryInput(username: $username) {
                                category
                            }
                        }
                    `,
                    variables: { username }
                });
                const category = categoryData.data.getCreateCategoryInput?.category || 'general';
                setCategory(category);
            } catch (err) {
                console.log('Error retrieving user category:', err);
                setCategory('general');
            }
        }
        userDetails();
    }, []);

    async function signOut() {
        try {
            await Auth.signOut({ global: true });
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    if (user) {
        console.log(user.attributes.name);
    } else {
        console.log("No user found");
    }

    !user && <Navigate to="/login" />

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <Authenticator>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                            News-App
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Hi, {user?.attributes?.name}
                        </Typography>
                        <Box sx={{ minWidth: 120 }}>
                            <Select
                                value={category}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="general">General</MenuItem>
                                <MenuItem value="business">Business</MenuItem>
                                <MenuItem value="entertainment">Entertainment</MenuItem>
                                <MenuItem value="health">Health</MenuItem>
                                <MenuItem value="science">Science</MenuItem>
                                <MenuItem value="sports">Sports</MenuItem>
                                <MenuItem value="technology">Technology</MenuItem>
                            </Select>
                        </Box>
                        <Button color="inherit" onClick={signOut}>Sign Out</Button>
                    </Toolbar>
                </AppBar>
                <News category={category} />
            </Authenticator>
        </div>
    );
}

export default Dashboard;