import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Getthelistofmodes=({selectmode , list})=>{
    const [ loginmode, setMode ] = useState('')

    // onSubmit event handler of this form
    const handlemode = (event) => {
        // Preventing default submission of the form to the action attribute URL
        event.preventDefault()

        const mode = loginmode

        selectmode(mode)

        setMode('')
    }
    return(
        <div>
            <form onSubmit={handlemode} id='abha'>
            <div className="form-group row">
                    <label for="abhaid" className="offset-md-1 col-md-2 col-form-label">Select Mode</label>
                    <div className="col-md-1 col-lg-2"  >
                        <button className="btn btn-primary form-control" type="submit" value={list[0]} onClick={event => setMode(event.target.value)}>{list[0]}</button>
                    </div>
                    <div className="col-md-1 col-lg-2">
                        <button className="btn btn-primary form-control" type="submit" value={list[1]} onClick={event => setMode(event.target.value)}>{list[1]}</button>
                    </div>
                    <div className="col-md-1 col-lg-2">
                        <button className="btn btn-primary form-control" type="submit" value={list[2]} onClick={event => setMode(event.target.value)}>{list[2]}</button>
                    </div>
                </div>
                {/* <div className="form-group row">
                    <div className="offset-md-4 col-md-1 col-lg-2">
                        <button className="btn btn-primary form-control">Submit</button>
                    </div>
                </div> */}
            </form>
        </div>
    )
}
export default Getthelistofmodes