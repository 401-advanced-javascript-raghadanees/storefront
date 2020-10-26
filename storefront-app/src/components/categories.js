import React from 'react';

import { connect } from 'react-redux';
import { select } from '../store/categories.js';
import { chooseList } from '../store/products.js';


const Status = props => {
    console.log('props......................', props);
    return (
    <>
        <h2>{props.activeCategory.activeCategory.name}</h2>
        <h2>{props.activeCategory.activeCategory.desciption}</h2>

        {props.activeCategory.categories.map((item, idx) => {
            return (
            <button key={idx} onClick={()=>  {
                props.select(item);
                props.chooseList(item);
            }}  
            >  {item.name}  </button>
            )
        })}
    </>
    )
}

const mapStateToProps = state => {
    // console.log('props::>>',props);
    return {activeCategory: state.categoruActivator};
}

const mapDispatchToProps = {select , chooseList}


export default connect(mapStateToProps , mapDispatchToProps)(Status)