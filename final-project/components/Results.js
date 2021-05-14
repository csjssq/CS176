import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

function Results({ requests }) {
	// console.log(requests);
	return (
		<FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
			{requests.map((request) => (
				<Thumbnail key={request.id} result={request} />
			))}
		</FlipMove>
	);
}

export default Results;
