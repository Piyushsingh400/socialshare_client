export default process.env.NODE_ENV === "development"
	? "http://localhost:5000"
	: "https://socialshare-server.onrender.com";
