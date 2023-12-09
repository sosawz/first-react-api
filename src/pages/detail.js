import { useParams } from "react-router-dom";
import Main from "../layouts/main";
import { useEffect, useState } from "react";

function Detail() {
    let { aid } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + aid)
            .then((response) => response.json())
            .then((json) => setData(json));
    })

    return (
        <Main>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>{data.name}</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address" style={{paddingTop : '35px'}}>
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>{data.address && data.address.street}, {data.address && data.address.suite}, {data.address && data.address.city}, {data.address && data.address.zipcode}</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>{data.email}</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>{data.phone}</p>
                                </div>

                                <div className="site">
                                    <i class='bx bx-world'></i>
                                    <h4>Website:</h4>
                                    <p>{data.website}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-stretch">
                            {data && data.address && data.address.geo && (
                                <iframe
                                    title="Location Map"
                                    src={`https://maps.google.com/maps?q=${data.address.geo.lat},${data.address.geo.lng}&hl=es;&output=embed`}
                                    width="800"
                                    height="450"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                />
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </Main>
    );
}

export default Detail;
