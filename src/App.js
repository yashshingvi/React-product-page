import logo from './logo.svg';
import './App.css';
import ProductData from './Utils/ProductData';
import React from 'react';
import classes from './app.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProducrDetails from './ProductDetails/ProductDetails';
import ProductDetails from './ProductDetails/ProductDetails';

class App extends React.Component {

  state ={ productData : ProductData,
          showHeartBeat : true,
          currPreviewImgPos:0,
          currFePos:0,
        }
          onColorOptionClick = (pos) =>{
            
            this.setState({currPreviewImgPos:pos});
          }
          onFeatureOptionClick = (pos) =>{
            
            this.setState({showHeartBeat:pos==1?true:false});
            this.setState({currFePos:pos});
          }
  render(){
  return (
    <div className="App">
      <header>
        <nav className={classes.TopBar}>
          <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"alt="amzn"></img>
        </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
        <ProductPreview previewImage={this.state.productData.colorOptions[this.state.currPreviewImgPos].imageUrl} showHeartBeat={this.state.showHeartBeat}/>
        </div>
        <div className={ProductDetails}>
          <ProducrDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currImgPos={this.state.currPreviewImgPos}
          onFeatureOptionClick={this.onFeatureOptionClick} currFePos={this.state.currFePos}/>
        </div>
     
      </div>
      {/* {ProductData.title}
      {this.display}{this.choice} */}
    </div>
  );
  }
}

export default App;
