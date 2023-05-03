
import './css/breadcrumbs.css';
const Breadcrumbs = ({page}) => {
  return <div className="breadcrumbsDiv">
        <div className="breadcrumbs_container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="breadcrumbs">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>{page}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>			
    </div>
}

export default Breadcrumbs