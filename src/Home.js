import React from "react";
import { useEffect, useState } from "react";
import { Table, Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const getemployee=()=>{
        fetch("https://635ec2c0ed25a0b5fe4c8f78.mockapi.io/userdetail")
        .then((data) => data.json())
        .then((response) => setData(response));
    }
    useEffect(() => {
        getemployee()
    }, []);

    const handledelete = (id) =>{
        fetch("https://635ec2c0ed25a0b5fe4c8f78.mockapi.io/userdetail/"+ id, {
            method: "DELETE"
        })
        .then((data) => data.json())
        .then((response)=>getemployee());
    };
    return (
        <>
            <Container id="employeecontainer">
                <Table striped bordered hover>
                    <tbody>
                        <tr id="tablehead">
                            <th>SL.NO</th>
                            <th>Name</th>
                            <th>USER NAME</th>
                            <th>EMAIL id</th>
                            <th>ADDRESS</th>
                            <th>ID NO.</th>
                            <th>VIEW DETAILS</th>
                            <th>EDIT DETAILS</th>
                            <th>DELETE</th>
                        </tr>

                        {data.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.username}</td>
                                    <td>{value.email}</td>
                                    <td>{value.address}</td>
                                    <td>{value.id}</td>
                                    <td>
                                        <Button
                                            color="warning"
                                            outline
                                            onClick={()=> navigate("/viewemployee/" + value.id)}
                                        >
                                           <i class="fa-solid fa-eye"></i>&nbsp;&nbsp;VIEW DETAILS
                                        </Button>
                                    </td>
                                    <td>
                                        <Button color="info" outline  onClick={()=>navigate("/addemployee/"+value.id)}>
                                            <i class="fa-sharp fa-solid fa-pencil"></i>&nbsp;&nbsp;Edit Details
                                        </Button>
                                    </td>
                                    <td>
                                        <Button color="danger" onClick={()=>handledelete(value.id)} outline>
                                            <i class="fa-solid fa-trash"></i>&nbsp;&nbsp;DELETE
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Home;
