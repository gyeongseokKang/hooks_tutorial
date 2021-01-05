export const useClick = onClick => {
	if (typeof onClick !== "funtion") {
		return;
	}
	const element = useRef();
	useEffect(() => {
		if (element.current) {
			element.current.addEventListener("click", onClick);
		}
		return () => {
			if (element.current) {
				element.current.remove("click", onClick);
			}
		};
	}, []);
	return element;
}