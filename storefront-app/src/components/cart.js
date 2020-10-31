import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/cart';
import * as actionsProduct from '../store/products';

import { Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    fullHeight: {
        height: "100%"
    },
    card: {
        margin: '1em',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', 
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px'
    },
    grid2: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'initial'
    },
    jss5: {
        padding: '64px 0px 48px'
    },
    grid1: {
        paddingTop: '24px',
        paddingBottom: '24px'
    }
}));



const Cart = props => {

    useEffect(() => { props.getCartAPI(); }, []);

    const classes = useStyles();
    console.log('Props ........ Cart ===>>', props);

    const deletefromCart = (idx, element) => {
        props.removeFromCart(idx);
        props.increaseInStock(element);
    }
    return (
        <>
            {props.cartData.cartItem.map((item,idx) => {
                return (
                    <>
                        <Container key={idx} maxWidth="md" component="main">
                
                            <Grid className={classes.grid1} container spacing={0} direction="row" justify="center" alignItems="center">
                                <Grid className={classes.grid2} container item xs={6} sm={6} lg={6} >
                                    <Card key={idx} className={classes.card}>
                                        <CardContent >
                                            <Typography variant="h5" color="textPrimary">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="p" color="textSecondary">
                                            category: {item.category}
                                            <br/>
                                            price:  {item.price}
                                        </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button key={idx}  style={{ fontSize: '0.9rem' }} color="secondary" onClick={() => deletefromCart(idx, item)} >Remove</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>

                    </>
                )
            }

            )}

        </>
    )
}




const mapStateToProps = state => ({
    // length: state.cartItem.length,
  cartData: state.cartData,
})
// const mapDispatchToProps = { addToCart, removeFromCart }

const mapDispatchToProps = (dispatch, getState) => ({
    getCartAPI: () => dispatch(actions.getCartAPI()),
    removeFromCart: (productIdx) => dispatch(actions.removeFromCart(productIdx)),
    increaseInStock: (product) => dispatch(actionsProduct.increaseInStock(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)