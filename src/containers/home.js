import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import List from '../components/list';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Todo Demo App',
            value: '',
            button: 'Add',
            list:[],
            selectedPosition: ''
        };
       this.delete = this.delete.bind(this);
       this.onSave = this.onSave.bind(this);
       this.edit = this.edit.bind(this);
    }

    onSave(){
        if(this.state.button == 'Add'){
       const list = this.state.list;
       list.push(this.refs.demo.value);
       
        this.setState({list});
        this.refs.demo.value = '';
        }
        else{
            const list = this.state.list;
            const selectedPosition = this.state.selectedPosition;
            list[selectedPosition]=this.refs.demo.value;
             this.setState({list,button:'Add'});
             this.refs.demo.value = ''; 
        }
        
    }


     
    delete(i){
        console.log('delete',i);
        const list = this.state.list;
        list.splice(i,1);
        this.setState({list});
    }

    edit(i){
        const list = this.state.list;
        console.log('edit',i);
        this.refs.demo.value = list[i];
        this.setState({button:'Updte',selectedPosition: i});

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>{this.state.name}</h1>
                        <input 
                            type="text"
                            ref="demo"
                            //onChange={(event) =>  this.setState({value: event.target.value })}
                            //value={this.state.value}
                            />
                            <button onClick={this.onSave}>{this.state.button}</button>
                            <br/>
                            <List 
                                list={this.state.list} 
                                _delete={this.delete}
                                _edit={this.edit}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) =>
    ({
    });

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
