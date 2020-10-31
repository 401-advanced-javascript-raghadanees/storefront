import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { select, getCategoriesData } from '../store/categories.js';
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
        marginLeft: '38%',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
}));
const Status = props => {
    // eslint-disable-next-line
    useEffect(() => { props.getCategoriesData();}, []);

    const classes = useStyles();
    console.log('props......................', props);
    return (
        <>
        <CssBaseline />
            <Box>

                <ButtonGroup className={classes.btnRoot} variant="text" color="secondary" aria-label="text primary button group">
                    {props.categoryData.results.map((item,idx) => (
                       
                            <Button key={idx} onClick={() => {
                                props.select(item.name);
                                // props.chooseList(item);
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
    return {categoryData: state.categoryData}; // categories from reducer in store categories and imported into index in store to combineReducers 
    // return {activeCategory: state.categories.categories};
}
// const mapStateToProps = state =>({
//     activeCategory: state.categories
// })
// const mapDispatchToProps = {select , chooseList, getCategoriesData}
const mapDispatchToProps = (dispatch) => ({
    select:  (name) => dispatch(actions.select(name)),
    getCategoriesData: () => dispatch(actions.getCategoriesData())
})

export default connect(mapStateToProps , mapDispatchToProps)(Status)