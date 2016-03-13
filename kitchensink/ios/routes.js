import React from 'react'
import { Route, IndexRoute } from 'react-router'

export default function getRoutes () {
  return (
    <Route path='/' component={require('./views/Framework').default}>
      <IndexRoute component={require('./views/Index').default} />
      <Route path='components'>
        <Route path='view' component={require('./views/Components/View').default} />
        <Route path='pages' component={require('./views/Components/Pages').default} />
        <Route path='transitionpages' component={require('./views/Components/TransitionPages').default} />
        <Route path='transitionpagesright' component={require('./views/Components/TransitionPagesRight').default} />
        <Route path='transitionpagesup' component={require('./views/Components/TransitionPagesUp').default} />
        <Route path='page' component={require('./views/Components/Page').default} />
        <Route path='block' component={require('./views/Components/Block').default} />
        <Route path='grid' component={require('./views/Components/Grid').default} />
        <Route path='button' component={require('./views/Components/Button').default} />
        <Route path='form' component={require('./views/Components/Form').default} />
        <Route path='picker' component={require('./views/Components/Picker').default} />
        <Route path='radiofield' component={require('./views/Components/RadioField').default} />
        <Route path='checkfield' component={require('./views/Components/CheckField').default} />
        <Route path='navbar' component={require('./views/Components/Navbar').default} />
        <Route path='toolbar' component={require('./views/Components/Toolbar').default} />
        <Route path='tabbar' component={require('./views/Components/Tabbar').default} />
      </Route>
      <Route path='*' component={require('./views/NotFound').default} status={404} />
    </Route>
  )
}