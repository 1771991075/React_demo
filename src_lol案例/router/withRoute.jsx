import {useParams,useSearchParams,useLocation,useNavigate} from 'react-router-dom';
// Component 表示传递过来的class类组件
function WithRouter(Component){
    function ComponentHooks(props){
        let myuseParams = useParams();
        let [search] = useSearchParams();
        let myuseLocation= useLocation();
        let myuseNavigate= useNavigate();
        return <Component {...props} router={{myuseParams,search,myuseLocation,myuseNavigate}}></Component>
    }
    return ComponentHooks
}

export default WithRouter;