import { Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { TaskApp } from "./pages/TaskApp";

export function App() {
	return (
		<div className="App">
			<AppHeader />
			<main className="main-layout">
				<Switch>
					<Route component={TaskApp} path='/' />
				</Switch>
			</main>
		</div>
	)
}
