import React from 'react'
import { BrowserRouter as Router, Route, Switch, browserHistory  } from 'react-router-dom'
import { connect } from "react-redux";
import styled from 'styled-components'
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Syncopate:700|Teko:400|Orbitron:400|Raleway:400');
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html,
body {
    position: relative;
    color: #474247;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.2;
    background: #f2f2f2;
    word-break: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.selected {
  color: #ff00ff;
}
`

const Wrap = styled.div`
  position: relative;
`

const MainWrap = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 80px);
  ${media.lg`
    min-height: calc(100vh - 50px);
  `}
`

class Main extends React.Component {

  render() {
    return(
      <Router history={browserHistory}>
        <Wrap>
        <GlobalStyle whiteColor />
          <MainWrap>
            <Switch location={location}>
              <Route exact path="/" render={props =>
                <Home e={e} p={p}
                  categories={categories}
                  subCategories={subCategories}
                  products={products}
                  language={language}
                  {...props} />}
                />
              <Route exact path="/delivery" component={Delivery}/>
              <Route exact path="/dostawa" component={Delivery}/>
              <Route exact path="/terms" component={Terms}/>
              <Route exact path="/privacy" component={Privacy}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/bags" render={props => <ProductsList  e={e} p={p} categories={categories} subCategories={subCategories} products={products} showAlert={showAlert} language={language} {...props} />} />
              <Route exact path="/:catId/:productId" render={props => <Product categories={categories} subCategories={subCategories} products={products} showAlert={showAlert} language={language} {...props} />} />
              <Route component={NotFound} />
            </Switch>
          </MainWrap>
          <Footer />
        </Wrap>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  alert: state.ui.alert,
  language: state.language,
  categories: state.data.categories,
  subCategories: state.data.subCategories.isFetching ? [] : state.data.subCategories.items,
  products: state.data.products,
  productsLoading: state.data.products.loading,
  cookieAccepted: state.cookieAccepted,
});

export default connect(mapStateToProps, actionCreators)(Main);