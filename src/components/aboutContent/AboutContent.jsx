/** @jsxImportSource @emotion/react */
//eslint-disable-next-line
import { jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import Container from '../../layout/Container';
import Item from '../../layout/Item';
import * as styles from './AboutContentStyles';

const AboutContent = () => {
    return (
        <section className="about-page-content-component">
            <Container flexDirection="column">
                <Item align="center">
                    <h1 css={styles.aboutPageHeader}>About This App</h1>
                    <h3 css={styles.aboutPageSubHeader}>
                        What i learn by building this app.
                    </h3>
                </Item>
                <Item>
                    <Container>
                        <p css={styles.aboutPageParagraph}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Container>
                </Item>
                <Item align="center">
                    <Link to="/">
                        <span css={styles.backToHome}>
                            Back to Home
                        </span>
                    </Link>
                </Item>
            </Container>
        </section>
    )
}

export default AboutContent;