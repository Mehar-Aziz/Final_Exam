import { useDispatch, useSelector } from "react-redux";

function Missions(){
    const { mission } = useSelector((state)=> state.mission);
    const dispatch = useDispatch();

    return(
    <table>
        <thead>
            <tr>
                <th>Mission</th>
                <th>description</th>
                <th>Status</th>
                <th>Name</th>
            </tr>
        </thead>
    </table>
    
    )
}

export default Missions;