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
import SvgIconFlag from 'material-ui/svg-icons/content/flag';
import {blue300, indigo900} from 'material-ui/styles/colors';


const styles = {
  block: {
    maxWidth: 200,
  },
  checkbox: {
    marginBottom: 16,width: 50,position: "absolute",right:0,
  },
   aligning: {
     display: 'inline-block',
  },chip: {
    margin: 2,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin:4,
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
            
     
                <Card style = {styles.card}>
                    <CardHeader
                              title="Proyecto #1 Mi proyecto"
                              subtitle="fecha de creacion : Hoy ..."
                    />
                    <CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </CardText>
                 
                    <CardActions className="visibility">
                       <Checkbox
                       className="visibility"
                          checkedIcon={<Visibility />}
                          uncheckedIcon={<VisibilityOff />}
                         style={styles.checkbox}
                        />
                    </CardActions>
                <div className="contain" style={styles.wrapper}>
            
                    <Chip style={styles.chip}
                     backgroundColor={'#BCBCBC'}
                     >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag1
                    </Chip>
                    <Chip 
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip} >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag2
                    </Chip>
                    <Chip
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip} >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag3
                    </Chip>
                    <Chip 
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip}  >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag4
                    </Chip>
                </div>
                    
                            
                </Card>
             
                
                 <Card style = {styles.card}>
                    <CardHeader
                              title="Proyecto #2 Mi proyecto"
                              subtitle="fecha de creacion : Hoy ..."
                    />
                    <CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </CardText>
                 
                    <CardActions className="visibility">
                       <Checkbox
                       className="visibility"
                          checkedIcon={<Visibility />}
                          uncheckedIcon={<VisibilityOff />}
                         style={styles.checkbox}
                        />
                    </CardActions>
                <div className="contain" style={styles.wrapper}>
            
                    <Chip style={styles.chip}
                     backgroundColor={'#BCBCBC'}
                     >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag1
                    </Chip>
                    <Chip 
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip} >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag2
                    </Chip>
                    <Chip
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip} >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag3
                    </Chip>
                    <Chip 
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip}  >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag4
                    </Chip>
                </div>
                    
                            
                </Card>
                 <Card style = {styles.card}>
                    <CardHeader
                              title="Proyecto #3 Mi proyecto"
                              subtitle="fecha de creacion : Hoy ..."
                    />
                    <CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </CardText>
                 
                    <CardActions className="visibility">
                       <Checkbox
                       className="visibility"
                          checkedIcon={<Visibility />}
                          uncheckedIcon={<VisibilityOff />}
                         style={styles.checkbox}
                        />
                    </CardActions>
                <div className="contain" style={styles.wrapper}>
            
                    <Chip style={styles.chip}
                     backgroundColor={'#BCBCBC'}
                     >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag1
                    </Chip>
                    <Chip 
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip} >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag2
                    </Chip>
                    <Chip
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip} >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag3
                    </Chip>
                    <Chip 
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip}  >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag4
                    </Chip>
                </div>
                    
                            
                </Card>
                 <Card style = {styles.card}>
                    <CardHeader
                              title="Proyecto #4 Mi proyecto"
                              subtitle="fecha de creacion : Hoy ..."
                    />
                    <CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </CardText>
                 
                    <CardActions className="visibility">
                       <Checkbox
                       className="visibility"
                          checkedIcon={<Visibility />}
                          uncheckedIcon={<VisibilityOff />}
                         style={styles.checkbox}
                        />
                    </CardActions>
                <div className="contain" style={styles.wrapper}>
            
                    <Chip style={styles.chip}
                     backgroundColor={'#BCBCBC'}
                     >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag1
                    </Chip>
                    <Chip 
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip} >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag2
                    </Chip>
                    <Chip
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip} >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag3
                    </Chip>
                    <Chip 
                     backgroundColor={'#BCBCBC'}
                     style={styles.chip}  >
                      <Avatar color="#444" icon={<SvgIconFlag />} />
                      tag4
                    </Chip>
                </div>
                    
                            
                </Card>
        </MuiThemeProvider>
            );
    }
    
    
    
    
    
    
    
}
export default ProjectList;