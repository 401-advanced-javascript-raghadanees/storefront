import React from 'react';
import { Grid, AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) =>{
    return (
        <>
       <CssBaseline />
            <AppBar position="static" elevation={0} color="default">
                <Toolbar >
                    <Grid container justify="space-between" alignItems="center">
                        {/* <Typography variant="h4"> Our Store..</Typography> */}
                        <Link to="/"> home</Link> <Typography variant="h4"> Our Store</Typography>
                        <Link to="/cart">My Cart ({props.cart.count})</Link>
                    </Grid>
                </Toolbar>

            </AppBar>
        </>
    )
}
const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Header);