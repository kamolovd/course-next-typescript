import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	return (
		<div>
			<ul>
				{menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
			</ul>
		</div>
	);
};