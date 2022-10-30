import React from 'react'
import { useEffect,useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';


function EmployeeDetails() {
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
  {data.map((e,i)=>{
    return (
        <div className="table" style={{marginTop:"0px"}}>
             <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={e.avatar}
                      alt='Avatar'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle style={{ fontSize: '20px' ,fontWeight: 'bold' }}>{e.name}</MDBCardTitle>
                    <MDBCardText style={{ fontSize: '16px' ,fontWeight: 'bold' }}>USER NAME: {e.username}</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">ID</p>
                        <p className="mb-0">{e.id}</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">ADDRESS</p>
                        <p className="mb-0">{e.address}</p>
                      </div>
                     
                    </div>
                    <div className="d-flex pt-1">
                    <MDBCardText style={{ fontSize: '16px' ,fontWeight: 'bold' }}>EMAIL ID: {e.email}</MDBCardText>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr className="sidebar-divider my-0"></hr>

        
        </div>

    )
   

  })}
   
  </>
}

export default EmployeeDetails