import {Img, Sequence, spring, useCurrentFrame, useVideoConfig, interpolate} from "remotion";
import Image from './../assets/jack.png'

const Bottle = () => {
    const frame = useCurrentFrame();
    const {fps,durationInFrames} = useVideoConfig();
    const scale = spring({
        fps,
        frame,
    });

    const backgroundColor = `rgb(${Math.floor((255 * frame) / durationInFrames)}, 0, ${Math.floor(255 - (255 * frame) / durationInFrames)})`;


    return (
        <div style={{
            backgroundColor,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <div
                style={{
                    textAlign: "center",
                    fontSize: "7em",
                }}
            >
                <div style={{
                    transform: `scale(${scale})`,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    color: '#08a2c5',
                    fontWeight: 'bold'
                }}>whiskey jack daniels
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    width: 500,
                }}>
                    <Img src={Image} alt="fffff"/>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: 50,
                color: '#bb0d75',
                fontWeight: 'bold',
                height: 120
            }}>
                <Sequence from={35} layout="none">
                <span style={{
                    fontSize: 100,
                }}>$150</span>
                </Sequence>
            </div>
            <div
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 100,
                    color: '#fff',
                    fontWeight: 'bold',
                }}
            >
                Frame: {frame}.
            </div>
        </div>

    );
};

export default Bottle;