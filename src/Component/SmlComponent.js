import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class SmlComponent extends React.Component{
   constructor(props) {
       super(props);
       this.state = {
        title: "Comment",
        comm: "",
        Url: "",
       }


    }

    render(){
        const styles = {
            button:{
                float: "right",
                margin: "0px, 0px, 10px"

            },
            text:{
                width: "100%"
            }
        }

        function onclick(){

        }
        function onchange(){

        }
        const style ={

        }



        return(

            <div className="mdl-card something-else mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop">

            <div className="mdl-card__supporting-text meta meta--fill mdl-color-text--grey-600">
              <div>
                <strong>{this.state.title}</strong>
              </div>



            </div>
            <div className="inner">
            <TextField
              hintText="Name"
            /><br />
            <TextField
              hintText="Image URL"
            /><br />
            <TextField
              hintText="Comment"
            /><br />

            </div>
                <div >
                <RaisedButton style={styles.button} label="Comment" />
          </div>
        </div>

    );
    }
}

export default SmlComponent;
