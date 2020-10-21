import React, { Component, Fragment } from 'react';
import './App.css';
import { sampleText } from './sampleText'
import marked from 'marked'

class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount () {
    const  text  = localStorage.getItem('text')
    if (text) {
      this.setState({ text })
    } else {
      this.setState({ text: sampleText })
    }
    
  }

  componentDidUpdate () {
    const { text } = this.state
    localStorage.setItem('text', text) 
  }

  handelChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }
  render () {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
               <textarea 
                className="col-sm-6"
                rows= "35"
                onChange= {this.handelChange}
                value={ this.state.text } >
               </textarea>
            </div> 
            <div className="col-sm-6">
              <div dangerouslySetInnerHTML= {this.renderText(this.state.text) }>
              </div>
            </div> 
          </div>
        </div>
      </Fragment>
   
    );
  }
}

export default App;
