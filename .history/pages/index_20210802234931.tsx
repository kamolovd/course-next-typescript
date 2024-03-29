import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag='h2'>{counter}</Htag>
			<Button appearance='primary' arrow="right" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
			<Button appearance='ghost' arrow="down">Кнопка</Button>
			<Ptag size="sm">Маленький</Ptag>
			<Ptag >Средний без параметра</Ptag>
			<Ptag size="md" >Средний</Ptag>
			<Ptag size="lg" >Большой</Ptag>
			<Tag size='s' color="ghost">Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color="green" >Green</Tag>
			<Tag color="primary" >Primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<ul>
				{menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
			</ul>
		</>
	);
}

export default withLayout(Home);


export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	})
	return {
		props: {
			menu,
			firstCategory
		}
	}
}


interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}