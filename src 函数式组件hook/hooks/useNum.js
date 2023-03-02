import { useState } from "react";

export default function useNum() {
    let [num, setNum] = useState(0)
    let add = () => {
        setNum(num + 1)
    }
    return (
        [num, add]
    )
}
