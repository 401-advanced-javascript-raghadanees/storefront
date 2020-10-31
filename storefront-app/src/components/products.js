import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionsCart from '../store/cart.js'
import * as actions from '../store/products';


import { Box, CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
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
    
    fullHeight: {
        height: "100%"
    },
    card: {
        margin: '1em',
    },
    media: {
        height: 0,
        paddingTop: '60%',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px'
    },
    grid2: {
        display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: 'center'
    },
    grid1: {
        paddingTop: '34px',
        paddingBottom: '44px'
    }
}));

const Status = props => {
    console.log('props??????????.....', props);
    // eslint-disable-next-line
    useEffect(() => {  props.getProduct(); }, []);

    const classes = useStyles();

    const updateFunctions = item => {
        props.addToCart(item) 
        props.decreaseInStock(item)
        // props.updateRemoteCart(props.cartData.cartItem)
      }

    return (

        <>
            <section className="product">
                <ul>
                    <Box textAlign="center">
                        <Typography variant="h2" color="textPrimary">
                            {props.categoryData.activeCategory}
                        </Typography>
                       
                    </Box>
                   
                    {props.productData.results.map((item, idx) => {
                        if (item.category === props.categoryData.activeCategory) {   
                   
return (
    <Container maxWidth="md" component="main" key={idx}>
                        <Grid className={classes.grid1} container  direction="raw" justify="center" alignItems="center">
                            <Grid className={classes.grid2} container item xs={12} sm={6} lg={4} >

                                <Card key={idx} className={classes.card}>
                                    <CardMedia
                                    className={classes.media}
                                    image={item.img}
                                    title={item.name}
                                    description={item.description}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" color="textPrimary">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="p" color="textSecondary">
                                            price : {item.price}$
                                            <br/>
                                            inStock :  {item.inStock}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button key={idx} size="large" style={{ fontSize: '0.9rem' }} color="secondary" onClick={() =>{item.inStock > 0 ? updateFunctions(item): <br/> } 
                                        }>Add to my cart </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
)
 }
})}
        </ul>

            </section>
        </>
    )
}


const mapStateToProps = state => ({
    // return state;
    productData: state.productData,
    categoryData: state.categoryData,
    cart: state.cart,
});


// const mapDispatchToProps  = { getProductData, addToCart};
const mapDispatchToProps  = (dispatch) => ({
    decreaseInStock: (product) => dispatch(actions.decreaseInStock(product)),
    addToCart: (product) => dispatch(actionsCart.addToCart(product)),
    updateRemoteCart: (product) => dispatch(actionsCart.updateRemoteCart(product)),
    getProduct: () => dispatch(actions.getProductData())
});

export default connect(mapStateToProps, mapDispatchToProps )(Status);