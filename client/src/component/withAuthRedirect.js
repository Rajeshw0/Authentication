import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const withAuthRedirect = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const isAuth = useSelector((state) => state.auth.isAuth);
    useEffect(() => {
      if (!isAuth) {
        router.push("/login");
      }
    }, [isAuth, router]);
    return <WrappedComponent {...props} />;
  };
};


export default withAuthRedirect;
