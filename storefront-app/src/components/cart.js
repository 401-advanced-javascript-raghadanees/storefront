import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/cart.js'
import { removeFromCart } from '../store/cart.js'

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
        paddingTop: '56.25%', // 16:9
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px'
    },
    jss8: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'initial'
    },
    jss5: {
        padding: '64px 0px 48px'
    },
    jss7: {
        paddingTop: '24px',
        paddingBottom: '24px'
    }
}));



const Cart = props => {

    const classes = useStyles();
    console.log('Props ........ Cart ===>>', props);

    return (
        <>
            {props.cartContent.map((item,idx) => {
                return (
                    <>
                        <Container key={idx} maxWidth="md" component="main">
                        {/* <Typography variant="h5" color="textPrimary">
                        Cart: ({props.length}) */}
                        {/* </Typography> */}
                            <Grid className={classes.jss7} container spacing={0} direction="row" justify="center" alignItems="center">
                                <Grid className={classes.jss8} container item xs={6} sm={6} lg={6} >
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
                                            <Button key={idx}  style={{ fontSize: '0.9rem' }} color="secondary" onClick={() => { props.removeFromCart(item) }} >Remove</Button>
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
    length: state.cart.cartContent.length,
  cartContent: state.cart.cartContent,
})

const mapDispatchToProps = { addToCart, removeFromCart }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)