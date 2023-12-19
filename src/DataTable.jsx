import React, {useState, useEffect } from "react";
import { getAllStudents } from '../api/index'




export default function DataTable() {

    const [data, setData] = useState([]);
    useEffect(()=>{
        (async()=>{
            const response = await getAllStudents();
            if(response?.data?.result === 1){
                setData(response?.data?.data);
            }
        })();
    },[])
    
    return (
   <div>
    {
        data?.length>0 &&
    
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Address</td>
                </tr>
            </thead>
            <tbody>
                {data?.map((item)=>{
                    return (
                        <tr key={item?._id}>
                            <td>{item?.name}</td>
                            <td>{item?.age}</td>
                            <td>{item?.gender}</td>
                            <td>{item?.email}</td>
                            <td>{item?.phone}</td>
                            <td>{item?.address}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
}
   </div>
  );
}