import React from 'react'
import { useEffect,useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';

function ViewEmployee() {
    const {id}=useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const getemployee=()=>{
      fetch("https://635ec2c0ed25a0b5fe4c8f78.mockapi.io/userdetail")
      .then((data) => data.json())
      .then((response) => setData(response));
  }

  useEffect(() => {
    getemployee()
}, []);


  return <>
  <div>

  {data.filter((value) => value.id === id).map((resp) =>{
    return (
    <div className="vh-100" style={{ backgroundColor:"whitesmoke" }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={resp.avatar}
                      alt='Avatar'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle style={{ fontSize: '20px' ,fontWeight: 'bold' }}>{resp.name}</MDBCardTitle>
                    <MDBCardText style={{ fontSize: '16px' ,fontWeight: 'bold' }}>USER NAME: {resp.username}</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">ID</p>
                        <p className="mb-0">{resp.id}</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">ADDRESS</p>
                        <p className="mb-0">{resp.address}</p>
                      </div>
                     
                    </div>
                    <div className="d-flex pt-1">
                    <MDBCardText style={{ fontSize: '16px' ,fontWeight: 'bold' }}>EMAIL ID: {resp.email}</MDBCardText>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
   <div id="backbutton">
   <button id="backbuttonst" onClick={()=>navigate(-1)} style={{paddingTop:"15px",paddingLeft:"20px",paddingBottom:"15px",paddingRight:"20px",backgroundColor:"aqua",borderRadius:"20px"}}><i class="fa-solid fa-backward-step"></i> &nbsp;<bold>BACK</bold></button>
   </div>
      

    </div>
    )
  })}
 
  </div>:
  </>
}

export default ViewEmployee