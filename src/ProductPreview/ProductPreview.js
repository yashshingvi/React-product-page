import React from 'react';
import ProductData from '../Utils/ProductData';
import classes from './ProductPreview.module.css'

const ProductPreview = (props) =>{
    
    return(
    <div className={classes.ProductPreview}>
        <img src={props.previewImage}></img>
        
         {
                  props.showHeartBeat?<div className={classes.FeatureDataHeart}>
          <div className={classes.HeartColor}>
             
            <i className="fa fa-heartbeat"></i>
        </div>
        <p>72</p>
        </div> :<div className={classes.FeatureData}>
        <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
        </div>
              }
        
        </div>)
}
export default ProductPreview;