import {
	Button,
	Flex,
	HStack,
	Image,
	Input,
	Link as ChakraLink,
	Text,
	VStack,
	Box,
	Center,
} from "@chakra-ui/react";
import "./App.css";
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				{/* <Route path="about" element={<About />}></Route>
				<Route path="create" element={<AddBlog />} />
				<Route path="*" element={<NoPage />}></Route> */}
			</Routes>
		</Router>
	);
}

export default App;
