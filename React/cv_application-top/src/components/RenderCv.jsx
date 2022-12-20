import '../RenderCv.css'

function RenderCv({heading}){
    return (
        <div className="render">
            <div className="left-bar">
            <section>
                <h2 className='my-name'>
                {heading.fname} {heading.lname} <br/>
                {heading.profession}
                </h2>
            </section>
            <section>
                <h3 className='h3'>Contact</h3>
                <strong>Phone:</strong>&nbsp;{heading.phone}<br/>
                <strong>email:</strong>&nbsp;{heading.email}
            </section>
            <section>
                <h3 className='h3'>Skills</h3>
                <p>
                    <ul>
                        <li>hard working not </li>
                        <li>hard working not </li>
                        <li>hard working not </li>
                    </ul>
                </p>
            </section>
            </div>
            <div className="right-bar">
                <section>
                    <h3 className='about'>About</h3>
                    <p>Some text goes here Some text goes 
                    hereSome text goes here Some text goes 
                    hereSome text goes here Some text goes 
                    hereSome text goes here Some text goes 
                    Some text goes here Some text goes here</p>
                </section>
                <section>
                    <h1>Working History</h1>
                    <p>Some text goes here</p>
                </section>
                <section>
                    <h1>Education</h1>
                    <p>Some text goes here</p>
                </section>
            </div>

        </div>
    )
}

export default RenderCv;