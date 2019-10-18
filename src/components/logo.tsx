/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Styled } from 'theme-ui';
import { theme } from './theme';
import { Link as GatsbyLink } from 'gatsby';

const Logo = () => (
    <Styled.h1
        sx={{
            m: 0,
            textTransform: "uppercase",
            fontWeight: 700,
            fontSize: [5, 5, 6],
            padding: theme.padding,
            paddingBottom: [2, 2, 3],
        }}
    >
        <GatsbyLink to='/' sx={{ textDecoration: 'none', color: 'inherit' }}>
            <div>Common</div>
            <div sx={{ lineHeight: 0.5 }}>Knowledge</div>
        </GatsbyLink>
    </Styled.h1>
)

export default Logo