import { useRoutes } from "react-router-dom";
import element from './element'

export default function RouterDOM() {
    let elements = useRoutes(element)
    return (
        <div>
            {
                elements
            }
        </div>
    )
}
