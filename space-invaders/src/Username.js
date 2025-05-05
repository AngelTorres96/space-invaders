import React, {useState} from 'react';
    
function Username() {
    
    const [username, setUsername] = useState('');

    return (
        <div className='container centered-element login-form'>
            <p>Inicio de sesión</p>
            
            <form >
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <br/>
            
                <br/>
                <button type="submit" className="btn btn-primary">Start</button>

            </form>
            
        </div>
    );
}

export default Username;
