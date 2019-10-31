import React from 'react'
import './index.scss'
import { Carousel, WingBlank } from 'antd-mobile';

class HomeHeader extends React.Component {
    state = {
        data: [],
        imgHeight: 194,
    }
    componentDidMount () {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [
                    '/2019/10/08640cb1d859585c.jpg',
                    '/2019/10/7557c4f81123b7bc.jpg',
                    '/2019/10/bc39bfd7f1073908.jpg',
                    '/2019/10/1e7ad34b6e125b7c.jpg'
                ],
            });
        }, 100);
    }
    render () {
        return (
            <div className = "home-header">
                <Carousel
                    autoplay={false}
                    infinite
                    dotStyle = {{
                        background: '#80cebb'
                    }}
                    dotActiveStyle = {{
                        background: '#fff'
                    }}
                    beforeChange={(from, to) => ''}
                    afterChange={index => ''}
                >
                    {this.state.data.map(val => (
                        <a
                            key={ val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://ftp.bmp.ovh/imgs${val}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default HomeHeader
