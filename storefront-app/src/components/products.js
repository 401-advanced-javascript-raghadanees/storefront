import React from 'react';
import { connect } from 'react-redux';
import { chooseList } from '../store/products.js';

import { Box, CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     '@global': {
//         ul: {
//             margin: 0,
//             padding: 0,
//             listStyle: 'none',
//         },
//     },
//     appBar: {
//         borderBottom: `1px solid ${theme.palette.divider}`,
//     },
//     toolbarTitle: {
//         flex: 1,
//     },
//     fullHeight: {
//         height: "100%"
//     },
//     card: {
//         margin: '1em',
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%',
//         borderTopLeftRadius: '5px',
//         borderTopRightRadius: '5px'
//     },
//     jss8: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         flexWrap: 'initial'
//     },
//     jss5: {
//         padding: '64px 0px 48px'
//     },
//     jss7: {
//         paddingTop: '64px',
//         paddingBottom: '64px'
//     }
// }));

const Status = props => {
    console.log('props??????????',props);
    console.log('props.list.results??????????',props.list.results);

// const classes = useStyles();

    return (
        <>
            {/* <h2>{props.list.results} List</h2> */}
            {props.list.results.map((item, idx) => {
                return <li key={idx}>{item.name}<br />{item.price} <br /> {item.image} <br /></li>
            })}
        </>
    )
}


const mapStateToProps = state => {
    return state ;
};

const mapDespatchRoProps = {chooseList} ;

export default connect(mapStateToProps,mapDespatchRoProps )(Status)