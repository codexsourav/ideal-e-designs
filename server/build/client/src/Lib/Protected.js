import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function Protected({ page }) {
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (!auth) {
            navigate("/", { replace: true });
        }
    }, []);
    return page;
}
export default React.memo(Protected);
