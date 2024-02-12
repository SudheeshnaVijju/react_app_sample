function Students(){
    let data=[{
        name:'sudhee',
        rno:'21a91a05f6',
        clg:'AEC'
    },
    {
        name:'vasavi',
        rno:'21a91a05g9',
        clg:'AEC'
    }]
    // return(
    //     <center>
    //         <table border={1} cellSpacing={0}>c679
    //          <tr><th>Name</th><th>Rollnum</th><th>college</th></tr>
    //         {
    //         data.map((ele,i)=>{
    //             return(
    //                 <tr>
    //                 <td>{ele.name}</td>
    //                 <td>{ele.rno}</td>
    //                 <td>{ele.clg}</td>
    //                 </tr>
    //             )
    //         })
    //     }
    //         </table>
    //     </center>
    // )
    return(
        
            <ol>
                {
                    data.map((ele,i)=>{
                        return(
                            <>
                            <li>student:{i+1}</li>
                            <ul>
                            <li>{ele.name}</li>
                            <li>{ele.rno}</li>
                            <li>{ele.clg}</li>
                            </ul>
                            </>
                        )
                    })
                }
            </ol>
        
    )
}
export default Students;