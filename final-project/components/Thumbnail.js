import React from "react";
import Link from "next/link";
import Image from 'next/image';

import { ThumbUpIcon } from '@heroicons/react/outline';

import { forwardRef } from 'react';


const Thumbnail = forwardRef(({ result }, ref) => {
	const BASE_URL = 'https://image.tmdb.org/t/p/original/';

	console.log(result);
	return (
		<div
			ref={ref}
			className='group cursor-pointer transitio duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
			<Link href="/movies/[id]" as={`/movies/${result.id}`}>
			<Image
				layout='responsive'
				src={
					`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
					`${BASE_URL}${result.poster_path}`
				}
				height={1000}
				width={1920}
			/>
            </Link>
			<div className='p-2'>
				<p className='truncate max-w-md'>{result.overview}</p>
				<h2 className='mt-1 text-2xl text-white transition-all ease-in-out group-hover:font-bold'>
					{result.title || result.original_name}
				</h2>
				<p className='flex items-center opacity-0 group-hover:opacity-100'>
					{result.media_type && `${result.media_type} •`}{' '}
					{result.release_date || result.first_air_date} •{' '}
					<ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
				</p>
			</div>
		</div>
	);
});

export default Thumbnail;
