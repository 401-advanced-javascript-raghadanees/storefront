import React from 'react';
import { Grid, AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';

function Header() {
    return (
        <>
       <CssBaseline />
            <AppBar position="static" elevation={0} color="default">
                <Toolbar >
                    <Grid container justify="space-between" alignItems="center">
                        <Typography variant="h4"> Our Store..</Typography>
                        <Typography variant="h6">Favorite List</Typography>
                    </Grid>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Header;