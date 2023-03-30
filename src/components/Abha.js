import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const AbhaFetch=({fetch})=>{
    const [ abhaid, setabhaid ] = useState('')

    // onSubmit event handler of this form
    const handleabhaid = (event) => {
        // Preventing default submission of the form to the action attribute URL
        event.preventDefault()

        const id = abhaid

        fetch(id)

        setabhaid('')
    }
    return(
        <div>
            <form onSubmit={handleabhaid} id='abha'>
            <div className="form-group row">
                    <label htmlFor="abhaid" className="offset-md-1 col-md-2 col-form-label">Abha Address</label>
                    <div className="col-md-6">
                        <input className="form-control" type="text" name='abhaid' id='abhaid' placeholder='ABHA Address' value={abhaid} onChange={event => setabhaid(event.target.value)} required/>
                    </div>
                    <div className="col-md-1 col-lg-2">
                        <button className="btn btn-primary form-control">Submit</button>
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
export default AbhaFetch