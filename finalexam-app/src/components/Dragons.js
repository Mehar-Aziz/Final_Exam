import { useDispatch, useSelector } from "react-redux";

function Dragons() {

    const {dragon} = useSelector((state) => state.dragon);
    const dispatch = useDispatch();

    return(
        <li>SpaceX Dragons</li>
    )
}


export default Dragons;