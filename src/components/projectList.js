import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader,CardActions, CardTitle, CardText} from 'material-ui/Card';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,width: 50, display: 'inline-block',
  },
   aligning: {
     display: 'inline-block',
  },chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
 function handleRequestDelete() {
    alert('You clicked the delete button.');
    }

class ProjectList extends Component{
    
    
    constructor(props) {
        super(props)
    } 
    
   
    
    render() {
        return (
            
            <MuiThemeProvider>
                <Card>
                    <CardHeader
                              title="Proyecto #1 Mi proyecto"
                              subtitle="fecha de creacion : Hoy ..."
                    />
                    <p className="descriptionP"   align="justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <CardActions>
                      <FlatButton style={styles.aligning}label="Action1" />
                      <FlatButton style={styles.aligning}label="Action2" />
                       <Checkbox
                          checkedIcon={<Visibility />}
                          uncheckedIcon={<VisibilityOff />}
                        align="right"
                         style={styles.checkbox}
                        />
                    </CardActions>
                    <div style={styles.wrapper}>
            
                    <Chip style={styles.chip}
                     onRequestDelete={handleRequestDelete}>
                    
                      <Avatar color="#444" icon={<SvgIconFace />} />
                      tag1
                    </Chip>
                    <Chip style={styles.chip}  onRequestDelete={handleRequestDelete}>
                      <Avatar color="#444" icon={<SvgIconFace />} />
                      tag2
                    </Chip>
                    <Chip style={styles.chip}  onRequestDelete={handleRequestDelete}>
                      <Avatar color="#444" icon={<SvgIconFace />} />
                      tag3
                    </Chip>
                    <Chip style={styles.chip}  onRequestDelete={handleRequestDelete}>
                      <Avatar color="#444" icon={<SvgIconFace />} />
                      tag4
                    </Chip>
                    </div>
                    
                            
                </Card>
                 <Card>
                    <CardHeader
                              title="Proyecto #2"
                              subtitle="fecha de creacion : Ayer"
                    />
                    <p className="descriptionP"   align="justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                            
                </Card>
                 <Card>
                    <CardHeader
                              title="Proyecto #3"
                              subtitle="fecha de creacion : La semana pasada"
                    />
                    <p className="descriptionP"   align="justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                            
                </Card>
        </MuiThemeProvider>
            );
    }
    
    
    
    
    
    
    
}
export default ProjectList;