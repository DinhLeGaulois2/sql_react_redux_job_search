import React from 'react'
import { Route, NavLink } from "react-router-dom";
import requireAuth from '../requireAuth'
import '../HeaderStyle.css';

import DisplayAllComponent from './DisplayAllComponent'
import DisplayMissedComponent from './DisplayMissedComponent'
import DisplayPendingComponent from './DisplayPendingComponent'
import DisplayRecentFirstComponent from './DisplayRecentFirstComponent'

class DisplayUIComponent extends React.Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <div style={{ "backgroundColor": "black" }}>
                    <br />
                    <p align="center">
                        <NavLink to={`${match.url}/all`} className="navLink" activeStyle={{ color: 'blue', fontSize: 'bold' }}>All</NavLink>
                        <NavLink to={`${match.url}/missed`} className="navLink" activeStyle={{ color: 'blue', fontSize: 'bold' }}>Missed</NavLink>
                        <NavLink to={`${match.url}/pending`} className="navLink" activeStyle={{ color: 'blue', fontSize: 'bold' }}>Pending</NavLink>
                        <NavLink to={`${match.url}/recent`} className="navLink" activeStyle={{ color: 'blue', fontSize: 'bold' }}>Most Recents First</NavLink>
                    </p>
                    <br />
                </div>
    
                <Route path={`${match.url}/all`} exact component={DisplayAllComponent} />
                <Route path={`${match.url}/missed`} exact component={DisplayMissedComponent} />
                <Route path={`${match.url}/pending`} exact component={DisplayPendingComponent} />
                <Route path={`${match.url}/recent`} exact component={DisplayRecentFirstComponent} />
            </div>
        )
    }
}

export default requireAuth(DisplayUIComponent)