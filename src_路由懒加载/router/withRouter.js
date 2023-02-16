import { useParams , useSearchParams , useLocation , useNavigate } from "react-router-dom";

function WithRouter(Component){
    function ComponentHooks(props) {
        let params = useParams();
        let searchParams = useSearchParams();
        let loaction = useLocation();
        let navigate = useNavigate();
        return <Component {...props} router={{params,searchParams,loaction,navigate}}></Component>
    }
    return ComponentHooks
}

export default WithRouter


