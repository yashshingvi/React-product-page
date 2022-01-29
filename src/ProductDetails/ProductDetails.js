import React from "react";
import classes from './ProductDetails.module.css';


const ProductDetails =(props) =>{
    const display = props.data.colorOptions.map((item,pos)=>{
        const classArr = [classes.imageDiv]
        if(pos===props.currImgPos){
            classArr.push(classes.SelectedProductImage);
        }
        return(<div className={classArr.join(' ')}>
          <img key={(pos)}className={classes.selectColor} src={item.imageUrl} onClick={()=>props.onColorOptionClick(pos)} ></img></div>
        
        )
      });
      const featureList = props.data.featureList.map((item,pos)=>{
          const classArr = [classes.FeatureItem];
          if(pos===props.currFePos){
              classArr.push(classes.SelectedFeatureItem);
          }
          return( <button key={(pos)}  className={classArr.join(' ')}onClick={()=>props.onFeatureOptionClick(pos)} >{item} </button>)
      });
    return(
        <div className={classes.ProductDetails}>
          <div className={classes.Details}>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
          </div>
          <h2 className={classes.SelectColor}>Select Color</h2>
          <div className={classes.SelectImage}>
          {display}
          </div>
          
          <div className={classes.FeatureHeading}>
            <h2>Features</h2>
            
            {featureList}
            <br></br>
            <button className={classes.BuyNow}>Buy Now</button>
          </div>
          </div>
    )

}
export default ProductDetails;