import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { select } from '../store/categories.js';
// import { chooseList } from '../store/products.js';
import * as actions from '../store/categories';
import { Box, ButtonGroup, Button, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 5,
            padding: 0,
            listStyle: 'none',
        },
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
   
    btnRoot: {
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'raw',
        alignItems: 'center',
        marginLeft: '35%',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
}));
const Status = props => {
    useEffect(() => {
        props.GETCATEG();
    }, []);

    const classes = useStyles();
    console.log('props......................', props);
    return (
        <>
        <CssBaseline />
            <Box>

                <ButtonGroup className={classes.btnRoot} variant="text" color="secondary" aria-label="text primary button group">
                    {props.activeCategory.categories.map((item) => (
                       
                            <Button key={item.name} onClick={() => {
                                props.select(item);
                                props.chooseList(item);
                            }}
                            >  {item.name}  
                            
                            </Button >
                        
                        ))}
                </ButtonGroup>
            </Box>
        </>
    )
}
// 
const mapStateToProps = state => {
    // console.log('props::>>',props);
    return {activeCategory: state.categories}; // categories from reducer in store categories and imported into index in store to combineReducers 
    // return {activeCategory: state.categories.categories};
}

// const mapDispatchToProps = {select , chooseList}
const mapDispatchToProps = (dispatch) => ({
    select:  (name) => dispatch(actions.select(name)),
    GETCATEG: () => dispatch(actions.getRemoteData())
})

export default connect(mapStateToProps , mapDispatchToProps)(Status)

{/* <CssBaseline />
<Box>

    <h2 className={classes.mainCategory}>{props.activeCategory.activeCategory.name}</h2>
    <h2>{props.activeCategory.activeCategory.desciption}</h2>
    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {props.activeCategory.categories.map((item, idx) => {
           
                <Button  key={idx} onClick={() => {
                    props.select(item);
                    props.chooseList(item);
                }}
                >  {item.name}  </Button >
            
        })}
    </ButtonGroup>
</Box> */}