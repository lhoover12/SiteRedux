'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



class LrgComponent extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
       title: "Comment",
       comm: "",
       Url:  "",
      }


   }

    render(){



     function nameChange(event){
            this.setState({name: event.target.value});
        }
        function commChange(event){
            this.setState({comm: event.target.value});
        }
        function UrlChange(event){
            this.setState({Url: event.target.value});
        }
        function clickhandle(){
                              const temp ={name:this.state.name,
                              comment: this.state.comm,
                              Url: this.state.Url
                              }

                            //  this.setState({comments.push(temp)});

        }
//    function createcom(){
//        for(let i: 0; i< this.sate.comments.length){
//
//        }
//    }
//        function displaycom(){
//            return(
//               <div class="mdl-card  mdl-cell mdl-cell--12-col">
//
//                </div>
//            )
//
//
//
//
//
//
//        }
//        function submit(){
//            const r =""
//
//
//            return(
//
//            </div>
//                </div>
//                )
//        }

//        const styles = {
//            comment: {
//                padding: "20px 20px 20px 20px"
//            },
//            button:{
//                margin:12
//            }
//        };
const style= "mdl-card__media mdl-color-text--grey-50 " + this.props.pictue;

        return(
            <div className="mdl-card amazing mdl-cell mdl-cell--12-col">
            <div className= {style}>
              <h3>{this.props.title}</h3>
            </div>
            <div className="mdl-card__supporting-text mdl-color-text--grey-600">
            {this.props.text}
            </div>

          </div>

        );
}
}

export default LrgComponent;
