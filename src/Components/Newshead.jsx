
const Newshead = ({ setCatagory, setCountry }) => {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid text-bg-info p-3">
                <a className="navbar-brand  badge text-bg-danger" href="#">NewsFresh</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ cursor: "pointer", fontWeight: "700" }}>
                        <li className="nav-item">
                            <div className="nav-link " onClick={() => setCatagory("sports")}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link " onClick={() => setCatagory("business")}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link " onClick={() => setCatagory("science")}>Science</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link " onClick={() => setCatagory("health")}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link " onClick={() => setCatagory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link " onClick={() => setCatagory("entertainment")}>Entertainment</div>
                        </li>

                    </ul>

                </div>
                {/* <img src="" /> */}
                {/* <select name="Country" id="Country">
                    <option value="in" onSelect={() => setCountry("in")}>India</option>
                    <option value="au" onSelect={() => setCountry("au")}>Australia</option>
                    <option value="eg" onSelect={() => setCountry("eg")}>Egypt</option>
                    <option value="cn" onSelect={() => setCountry("cn")}>China</option>
                    <option value="co" onSelect={() => setCountry("co")}>Colombia</option>
                    <option value="de" onSelect={() => setCountry("de")}>Germany</option>
                    <option value="pt" onSelect={() => setCountry("pt")}>Portugal</option>
                    <option value="pl" onSelect={() => setCountry("pl")}>Poland</option>
                </select> */}


            </div>
        </nav>
    </>
}
export default Newshead