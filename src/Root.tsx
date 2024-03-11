import {Composition} from 'remotion';
import Bottle from './Bottle';
import {Logo, myCompSchema2} from './HelloWorld/Logo';

// Each <Composition> is an entry in the sidebar!
const FPS = 30;
// duration 10s
const DURATION = FPS * 10

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyBottleComposition"
				durationInFrames={DURATION}
				fps={FPS}
				width={720}
				height={1280}
				component={Bottle}
			/>
		</>
	);
};
