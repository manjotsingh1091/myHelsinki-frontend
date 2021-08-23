import React from "react";
import {Col, Navbar} from "react-bootstrap";

class Footor extends React.Component {
    render() {
        let fullYear = new Date().getFullYear();
        let sideBarStyle = {
            'height': '100%',
            'position': 'absolute',
            'top': '0',
            'right': '0'
        }

        return(
           <Navbar fixed="bottom" bg="dark" variant="dark">
               <container>
                       <Col lg={20} className="text-white text-muted text-sm-right">
                           <div style={sideBarStyle}>{fullYear}-{fullYear+1}, All Rights reserved by Manjot</div>
                       </Col>
               </container>
           </Navbar>
        );
    }
}
export default Footor