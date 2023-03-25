import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify"
import { Navigate } from 'react-router';
import { API } from 'aws-amplify/lib-esm/index.js';
// import { Link } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import { AppBar, Toolbar, Typography, Button, Box, Select, MenuItem } from '@mui/material';
import News from './news.js';
import "./Dashboard.css";
function Dashboard() {
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState(["general"]);

    useEffect(() => {
        async function userDetails() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setUser(user);
                const username = user.username;
                const categoryData = await API.graphql({
                    query: /*GraphQL*/ `query GetCreateCategoryInput($username: String!) {
              getCreateCategoryInput(username: $username) {
                category
              }
            }`,
                    variables: { username },
                });
                const category =
                    categoryData.data.getCreateCategoryInput?.category || ["general"];
                setCategories(category);
            } catch (err) {
                console.log("Error retrieving user category:", err);
                setCategories(["general"]);
            }
        }
        userDetails();
    }, []);

    async function signOut() {
        try {
            await Auth.signOut({ global: true });
        } catch (error) {
            console.log("error signing out:", error);
        }
    }

    if (user) {
        console.log(user.attributes.name);
    } else {
        console.log("No user found");
    }

    !user && <Navigate to="/login" />;

    const handleChange = (event) => {
        setCategories(event.target.value);
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
                                variant='outlined'
                                sx={{ color: "white", borderColor: "none" }}
                                multiple
                                value={categories}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                            >    <MenuItem value="general" color="inherit">
                                    General
                                </MenuItem>
                                <MenuItem value="business" color="inherit">
                                    Business
                                </MenuItem>
                                <MenuItem value="entertainment" color="inherit">
                                    Entertainment
                                </MenuItem>
                                <MenuItem value="health" color="inherit">
                                    Health
                                </MenuItem>
                                <MenuItem value="science" color="inherit">
                                    Science
                                </MenuItem>
                                <MenuItem value="sports" color="inherit">
                                    Sports
                                </MenuItem>
                                <MenuItem value="technology" color="inherit">
                                    Technology
                                </MenuItem>
                            </Select>
                        </Box>
                        <Button color="inherit" onClick={signOut}>
                            Sign Out
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box id="news">
                    {categories.map((category) => (
                        <News key={category} category={category} />
                    ))}
                </Box>
            </Authenticator>
        </div>
    );
}

export default Dashboard;