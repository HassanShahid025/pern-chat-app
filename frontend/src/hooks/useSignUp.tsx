import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

type SignupInputs = {
	fullName: string;
	username: string;
	password: string;
	confirmPassword: string;
	gender: string;
};

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async (inputs: SignupInputs) => {
		try {
			setLoading(true);
			const res = await fetch("/api/v1/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs),
				credentials: "include",
			});
			const data = await res.json();

			if (!res.ok) throw new Error(data.error);
			setAuthUser(data);
		} catch (error: any) {
			console.error(error.message);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;
