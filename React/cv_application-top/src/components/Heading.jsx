function Heading({heading, headingOnChange}){
    console.log(heading)

    return (
        <div>
            <form >
                <table className="form-table">
                    <tbody>
                        <tr>
                            <td><label htmlFor="fname">First Name</label></td>
                            <td><label htmlFor="lname">Last Name</label></td>
                        </tr>
                        <tr>    
                            <td><input 
                                type="text" id="fname" 
                                placeholder="e.g. Spyros" 
                                name="fname" 
                                onChange={(e)=>headingOnChange({...heading, fname:e.target.value})}
                                value={heading.fname}
                                /></td>
                            <td><input 
                                type="text" id="lname" 
                                placeholder="e.g. Gavriilidis" 
                                name="lname"
                                onChange={(e)=>headingOnChange({...heading, lname:e.target.value})}
                                value={heading.lname} />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="profession">Profession</label></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input type="text" size="43" id="profession" 
                                placeholder="e.g. Engineer" name="profession"
                                onChange={(e)=>headingOnChange({...heading, profession:e.target.value})}
                                value={heading.profession} />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="phone">Phone</label></td>
                            <td><label htmlFor="email">email</label></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="tel" id="phone" 
                                placeholder="e.g. 6999999999" name="phone"
                                onChange={(e)=>headingOnChange({...heading, phone:e.target.value})}
                                value={heading.phone} />
                            </td>

                            <td>
                                <input type="email" id="email" 
                                placeholder="e.g. sg@gmail.com" name="email"
                                onChange={(e)=>headingOnChange({...heading, email:e.target.value})}
                                value={heading.email} />
                            </td>
                        </tr>
                    </tbody>    
                </table>   
            </form>
            <hr/>
        </div>
    )
}

export default Heading;