function WorkHisotry(){
    const a1 = {name: "Job Title", phld: "e.g. Senior Engineer"};
    const a2 = {name: "Employer", phld: "e.g. The best one "};
    const b1 = {name: "City", phld: "e.g. Athens"};
    const b2 = {name: "Country", phld: "e.Greece"};
    const c1 = {name: "Start Date", phld: "Select"};
    const c2 = {name: "End Date", phld: "Select"};

    return (
        <div>
            <form>
                <table className="form-table">
                    <tbody>
                        <tr>
                            <td><label htmlFor={a1.name}>{a1.name}</label></td>
                            <td><label htmlFor={a2.name}>{a2.name}</label></td>
                        </tr>
                        <tr>    
                            <td><input type="text" id={a1.name} placeholder={a1.phld} name={a1.name} /></td>
                            <td><input type="text" id={a2.name} placeholder={a2.phld} name={a2.name} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor={b1.name}>{b1.name}</label></td>
                            <td><label htmlFor={b2.name}>{b2.name}</label></td>
                        </tr>
                        <tr>    
                            <td><input type="text" id={b1.name} placeholder={b1.phld} name={b1.name} /></td>
                            <td><input type="text" id={b2.name} placeholder={b2.phld} name={b2.name} /></td>
                        </tr>                        <tr>
                            <td><label htmlFor={c1.name}>{c1.name}</label></td>
                            <td><label htmlFor={c2.name}>{c2.name}</label></td>
                        </tr>
                        <tr>    
                            <td><input type="date" id={c1.name} placeholder={c1.phld} name={c1.name} /></td>
                            <td><input type="date" id={c2.name} placeholder={c2.phld} name={c2.name} /></td>
                        </tr>
                    </tbody>    
                </table>   
            </form>
            <hr/>
        </div>
    )
}

export default WorkHisotry;