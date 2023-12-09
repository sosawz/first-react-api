import { useEffect, useState } from "react";
import Main from "../layouts/main";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json));
  })

  return (
    <Main>
      {/* ======= Services Section ======= */}
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Users</h2>
          </div>
          <div className="row">
            {data.map((item) => (
              <div className="col-xl-3 col-md-6 d-flex align-items-stretch aspect-ratio-box" style={{ paddingBottom: '25px' }}>
                <div className="icon-box" style={{ width: '300px', height: '250px' }}>
                  <div className="icon"><i class='bx bx-user-circle'></i></div>
                  <h4><Link to={`detail/${item.id}`}>{item.name}</Link></h4>
                  <p>Username : {item.username}</p>
                  <p>Company : {item.company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{/* End Services Section */}
    </Main>
  );
}

export default App;
