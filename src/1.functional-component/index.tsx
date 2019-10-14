import * as React from 'react';

interface Props {
	name: string;
	ok: boolean;
	fn: () => void;
}

export const Ex1: React.FC<Props> = () => {
	return <p></p>;
};
