import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import Details from "./screens/Details";
import Home from "./screens/Home";
import Update from "./screens/Update";

function App() {
	return (
		<div style={{ padding: "30px" }}>
			<ContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/restaurants/:id/update' element={<Update />} />
						<Route path='/restaurants/:id' element={<Details />} />
					</Routes>
				</BrowserRouter>
			</ContextProvider>
		</div>
	);
}

export default App;
