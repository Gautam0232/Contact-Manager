import React from 'react';

class AddContact extends React.Component {
    state = {
        name: "",
        number: "",
        email: ""
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "" || this.state.number === "" ){
            alert("All the fields are mandatory!");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", number: "", email: "" });
    }
    render() {
        return (
            <div className='home'>
            <div className='main'>
                <h2>Add Contact</h2>
                <form className='form' onSubmit={this.add}>
                    <div className='field'>
                        <div className='font'>Name</div>
                        <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={ (e) => this.setState({name: e.target.value}) }/>
                    </div>
                    <div className='field'>
                        <div className='font'>Number</div>
                        <input type='text' name='number' placeholder='Number' value={this.state.number} onChange={ (e) => this.setState({number: e.target.value})}/>
                    </div>
                    <div className='field'>
                        <div className='font'>Email</div>
                        <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) }/>
                    </div>
                    <button className='button'>Add</button>
                </form>
            </div>
            </div>
        )
    }
}

export default AddContact;