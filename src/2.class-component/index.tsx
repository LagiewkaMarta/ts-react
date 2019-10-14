import * as React from 'react';

interface Props {
	num: number;
}

interface State {
	count: number;
}

export class Ex2 extends React.Component<Props, State> {
	state = {
		count: 0,
	};

	render() {
		const { count } = this.state;
		const { num } = this.props;
		return (
			<p>
				state: {count}, props: {num}
			</p>
		);
	}
}
