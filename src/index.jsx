import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import { Provider } from 'react-redux'
import store from './components/store/store'

store.subscribe(()=>console.log(store.getState()))

ReactDom.render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.getElementById('root')
)
