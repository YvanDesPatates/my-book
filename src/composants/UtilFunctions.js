import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useScrollToTop(){
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export function useHandleNavigate() {
    const navigate = useNavigate();
    return (path) => navigate(path);
}
