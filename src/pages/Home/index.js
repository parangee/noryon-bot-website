import React, { Component } from 'react';
import styles from './home.module.scss'
import Fullpage, {FullPageSections, FullpageSection} from '@ap.cx/react-fullpage'
import {Button} from 'discord-components-react'

class HomePage extends Component {
    state = {
        current: 0
    }

    container = React.createRef()

    sections = new Array(3).fill('').map(r => React.createRef())

    async triggerOnePage(e) {
        let current

        if (e.deltaY < 0) {
            if (this.sections[this.state.current-1]) {
                console.log('up')
                current = this.state.current-1
                this.setState({current: this.state.current-1})
            } else {
                current = this.state.current
            }
        } else if (e.deltaY > 0) {
            if (this.sections[this.state.current+1]) {
                console.log('down')
                current = this.state.current+1
                this.setState({current: this.state.current+1})
            } else {
                current = this.state.current
            }
        } else {
            current = this.state.current
        }

        if (current !== undefined) {
            window.scroll({
                behavior: 'smooth',
                top: this.sections[current].current.offsetTop
            })
        }
    }

    render() {
        return (
            <Fullpage>
                <FullPageSections>
                    <FullpageSection className={`${styles.bg} ${styles.dark}`}>
                        <h1>놀욘봇</h1>
                        <p>대충 디스코드 봇임</p>
                    </FullpageSection>
                    <FullpageSection className={`${styles.bg}`}>
                        여긴 뭐넣지
                    </FullpageSection>
                    <FullpageSection className={`${styles.bg} ${styles.dark}`}>
                        <h1>서포트 서버</h1>
                        <Button onClick={() => window.open('https://discord.gg/SXx598F')}>참가하기</Button>
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
            );
    }
}

export default HomePage;