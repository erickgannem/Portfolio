import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Contact from 'pages/Contact'
import Services from 'pages/Services'
import Works from 'pages/Works'

export default function PageRouter () {
  return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/services' component={Services}/>
        <Route path='/works' component={Works}/>
      </Switch>
  )
}
